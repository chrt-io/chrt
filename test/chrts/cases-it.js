import * as chrt from '../../dist/chrt';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
const timeFormat = (date) => {
  return new Intl.DateTimeFormat('en-US',{
    month: 'short',
    day:'numeric'
  }).format(date)
}

const getData = async () => {
  const dataResponse = await fetch("https://corona.elezioni.io/data/regioni");
  const casesData = await dataResponse.json();

  const regionsResponse = await fetch("https://coronavirus.visualize.news/assets/json/regioni.json");
  const regions = await regionsResponse.json();

  const regionsMap = regions.reduce((map,d,i) => {
    if(!map[d.id]) {
      map[d.id] = d;
    }
    return map;
  }, {})

  const cases = Object.values(casesData.data.italy.regions).reduce((data, d, i) => {
    Object.entries(d.data).forEach((region, i, arr) => {
      if(!data[region[0]]) {
        data[region[0]] = [];
      }
      const population = regionsMap[region[0]].population;


      if(new Date(d.datetime) >= new Date('2020-08-01')) {

        const dailyCases = data[region[0]].length ? region[1].cases -  data[region[0]][data[region[0]].length - 1].cases : region[1].cases;
        const avg_case_per_10k = region[1].cases / population  * 10000;
        const avg_new_case_per_10k = dailyCases / population  * 100000;

        data[region[0]].push(Object.assign({}, region[1], {
          timestamp: new Date(d.datetime),
          prev: i > 0 ? arr[i - 1] : null,
          dailyCases,
          avg_case_per_10k,
          avg_new_case_per_10k,
          diff: data[region[0]].length ? avg_new_case_per_10k - data[region[0]][data[region[0]].length - 1].avg_new_case_per_10k : 0,
        }))
      }

    })
    return data;
  }, {})

  return {
    cases,
    casesData,
    regions,
    regionsMap,
  };
};


export default async function(container) {
  getData().then(response => {
    console.log(response);

    const regions = response.cases;

    const opacity = () => 1; // scaleLinear().domain([-300, 0]).range([1,0.2]);

    const chart = chrt.Chrt();
    console.log(chart)
    chart
      .node(container)
      .margins({
        top: 30,
        bottom: 30,
        left: 50,
        right: 20
      })
      .padding({
        top: 30,
        bottom: 0,
        left: 0,
        right: 0
      })
      .size(1100, 600)
      .svg()
      .y({domain:[0, 200]})
      .add(
        chrt.yAxis(5)
          .setTickPosition("outside")
          .format(d => {
            return new Intl.NumberFormat("en-US").format(d);
          })
          .hideAxis()
          .color("#999")
          // .zero(false)
          //.minor()
          // .filter(d => {
          //   return [0, -100, -200, -300].indexOf(d) > -1
          // })
      )
      .add(
        chrt.xAxis(8)
          .format(d => {
            return timeFormat(new Date(d));
          })
          .color("#999")
      )
      .add(
        chrt.horizontalGrid(5)
          .color("#ddd")
          //.minor()
          //.dashed()
          // .filter(d => {
          //   return [0, -100, -200, -300].indexOf(d) > -1
          // })
      );

    Object.entries(regions)
      // .slice(0, 20)
      .filter(d => d[0] !== "lombardia")
      .forEach(d => {

        const o =  d[1][d[1].length - 1].avg_new_case_per_mil - d[1][0].avg_new_case_per_mil;

        chart.add(
          chrt.chrtLine()
            .id(d[0])
            .data(d[1].slice(1), (value, i , arr) => {
              return {
                x: value.timestamp,
                y1: value.diff,
                y: value.avg_new_case_per_10k,
                y2: value.avg_new_case_per_mil !== "NA" ? value.avg_new_case_per_mil : null,
                y3:
                  value.avg_new_case_per_mil !== "NA"
                    ? value.avg_new_case_per_mil - arr[0].avg_new_case_per_mil
                    : null
              };
            })
            .color("#7c5981")
            .opacity(opacity(o))
            .width(1.5)
            // .curve(splineInterpolation)
            .add(chrt.chrtMarkers().lastMarker().size(6).stroke('#fff').strokeWidth(1))
        );
      });

    chart.add(
      chrt.chrtLine()
        .color("#f00")
        .width(3)
        .data(regions['lombardia'].slice(1), (value, i, arr) => {
          return {
            x: value.timestamp,
            y1: value.diff,
            y: value.avg_new_case_per_10k,
            y2: value.avg_new_case_per_mil !== "NA" ? value.avg_new_case_per_mil : null,
            y3:
              value.avg_new_case_per_mil !== "NA"
                ? value.avg_new_case_per_mil - arr[0].avg_new_case_per_mil
                : null
          };
        })
        //.curve(splineInterpolation)
        //.add(new chrtMarkers().lastMarker().size(10).stroke('#fff').strokeWidth(1))
    );
  });
}

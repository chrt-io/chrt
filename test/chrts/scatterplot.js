import * as chrt from '../../dist/chrt';

const data = [...new Array(10)].map((d, i) => {
  return {
    x: i,
    y: Math.random() * 100,
    y1: Math.random() * 100
  };
});

export default async function(container) {
  console.log('SCATTERPLOT CHRT READY TO CREATE', container);

  // const response = await fetch('./data/test.json?1');
  // const json = await response.json();
  // console.log('JSON', json);

  chrt
    .Chrt()
    .node(container)
    .data(data)
    .margins({
      top: 20,
      bottom: 30,
      left: 50,
      right: 50
    })
    .padding({
      top: 20,
      bottom: 0,
      left: 0, // 116.66666666666667,// 400/3,
      right: 0 // 116.66666666666667,// 400/3,
    })
    .size(800, 460)
    .svg()
    .y([0, 100])
    .add(
      chrt.yAxis(5)
        .setTickPosition('outside')
        .color('#999')
    )
    .add(
      chrt.xAxis(3)
        .color('#999')
        .format(d => {
          //console.log('xaxis',d)
          return d;
        })
    )
    .add(chrt.horizontalGrid(5).color('#ddd'))
    .add(
      chrt.points()
        .size(20)
        .opacity(0.5)
        // .fill("#fa5a51")
        // .width(0.1)
        // .color('#000')
        // .strokeWidth(1)
        .add(
          chrt.labels()
            .value(d => {
              // console.log(d)
              return d.x;
            })
            .align('middle')
            .valign('top')
            .color('#666')
            .offset(0, 0)
            .filter((d, i) => {
              // console.log('filter', d, i)
              return d.x > 3;
            })
        )
    );
}

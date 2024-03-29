import * as chrt from '../../dist/chrt';

const data = [...new Array(10)].map((d, i) => {
  return {
    x: i,
    y: Math.random() * 100,
    y1: Math.random() * 100
  };
});

export default async function(container) {
  console.log('BAR CHRT READY TO CREATE', container);

  const response = await fetch('./data/test.json?1');
  const json = await response.json();
  console.log('JSON', json);

  chrt
    .Chrt()
    .node(container)
    .size(500, 500)
    .data(data)
    //.x({ domain: [0, 10] })
    .y([0, 100])
    .add(
      chrt
        .yAxis(5)
        .setTickPosition('outside')
        .hideAxis()
        .color('#999')
    )
    .add(chrt.xAxis(3).color('#999'))
    .add(chrt.horizontalGrid(5).color('#ddd'))
    .add(
      chrt
        .line()
        .color('#055')
        .strokeWidth(2)
        .curve(chrt.interpolations.spline)
    );
}

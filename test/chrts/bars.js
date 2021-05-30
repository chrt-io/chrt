import * as chrt from '../../dist/chrt';

const data = [...new Array(10)].map((d, i) => {
  return {
    y: i,
    x: Math.random() * 100,
    y1: Math.random() * 100
  };
});

export default async function(container) {
  console.log('BAR CHRT READY TO CREATE', container);

  // const response = await fetch('./data/test.json?1');
  // const json = await response.json();
  // console.log('JSON', json);

  chrt
    .Chrt()
    .node(container)
    .size(500, 500)
    .margins({
      bottom: 100,
      top: 40
    })
    .data(data)
    //.x({ domain: [0, 10] })
    .x([0, 100])
    .add(
      chrt
        .xAxis(5)
        .setTickPosition('outside')
        .hideAxis()
        .color('#999')
    )
    .add(chrt.yAxis(3).color('#999'))
    .add(chrt.verticalGrid(5).color('#ddd'))
    .add(
      chrt
        .chrtBars()
        .fill('#fa5a51')
        .width(1)
        .color('#000')
        .strokeWidth(1)
    );
}

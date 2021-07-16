import * as chrt from '../../dist/chrt';

const data = [
  {
    y: 'a',
    x: 10
  },
  {
    y: 'b',
    x: 14
  },
  {
    y: 'c',
    x: 14
  },
  {
    y: 'd',
    x: 22
  }
];

export default async function(container) {
  return chrt.Chrt()
    .node(container)
    .size(600, 200)
    .y({scale:'ordinal'})
    .x({scale:'linear'})
    // .y({domain:[1,10000], scale:'log'})
    .add(chrt.xAxis())
    .add(chrt.yAxis())
    .add(
      chrt.chrtStack()
        .orientation('left')
        .add(
          chrt.chrtBars()
            .data(data, d => ({
              x: d.x,
              y: d.y,
            }))
            //.width(2)
            .color('#333')
            .fill('#f00')
            .fillOpacity(0.5)
        )
        .add(
          chrt.chrtBars()
            .data(data, d => ({
              x: d.x,
              y: d.y,
            }))
            // better method names for stroke: strokeWidth, stroke, strokeOpacity
            .strokeWidth(2)
            .stroke('#333')
            .strokeOpacity(0.8)
            .fill('#00f')
            .fillOpacity(0.5)
            .add(
              chrt.chrtLabels()
                .value(d => {
                  return `x:${d.x} y:${d.y}`;
                })
                .valign('middle')
                .align('middle')
                //.outside(true)
            )
        )
        .add(
          chrt.chrtBars()
            .data(data, d => ({
              x: d.x,
              y: d.y,
            }))
            //.width(2)
            .color('#333')
            .fill('#0f0')
            .fillOpacity(0.5)
        )
    )

}

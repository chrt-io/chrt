import * as chrt from '../../dist/chrt';

const data = [
  {
    x: 0,
    //y: 50,
    y: 'A'
  },
  {
    x: 10,
    //y: 20,
    y: 'A'
  },
  {
    x: 3,
    //y: 30,
    y: 'B'
  },
  {
    x: 7,
    //y: 10,
    y: 'B'
  }
];

export default async function(container) {
  chrt
    .Chrt()
    .node(container)
    .size(200, 200)
    .y(null,null,{scale:'ordinal'})
    .add(
      chrt
        .dotPlot()
        .data(data, d => ({
          x: d.x,
          y: d.y,
        }))
        .range()
    );
}

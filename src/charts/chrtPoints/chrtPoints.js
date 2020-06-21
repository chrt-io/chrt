import { createSVG as create } from '~/layout';
import { pointSize, pointColor, pointStroke, pointStrokeWidth } from './lib';
import chrtGeneric from '../chrtGeneric';

const DEFAULT_POINT_SIZE = 3;
const DEFAULT_POINT_COLOR = '#000';

function chrtPoints() {
  chrtGeneric.call(this);
  this.type = 'series';

  this.size = DEFAULT_POINT_SIZE;
  this.fill = DEFAULT_POINT_COLOR;
  this.stroke = DEFAULT_POINT_COLOR;
  this.strokeWidth = 0;

  this.draw = () => {
    this._data.forEach((d, i) => {
      // const point = points.find(p => )
      let circle = this.g.querySelector(`[data-id='circle-${name}-${i}']`);
      if (!circle) {
        circle = create('circle');
        circle.setAttribute('data-id', `circle-${name}-${i}`);
        this.g.appendChild(circle);
      }
      const x = this.parentNode.scales['x'](d.x);
      const y = this.parentNode.scales['y'](d.y);
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', this.size);
      circle.setAttribute('fill', this.fill);
      circle.setAttribute('stroke', this.stroke);
      circle.setAttribute('stroke-width', this.strokeWidth);
      // points.push({
      //   ...d,
      //   el: circle
      // });
    });

    // console.log('points', points);

    return this.parentNode;
  };
}

chrtPoints.prototype = Object.create(chrtGeneric.prototype);
chrtPoints.prototype.constructor = chrtPoints;
chrtPoints.parent = chrtGeneric.prototype;

chrtPoints.prototype = Object.assign(chrtPoints.prototype, {
  pointSize,
  color: pointColor,
  strokeColor: pointStroke,
  width: pointStrokeWidth
});

export default chrtPoints;

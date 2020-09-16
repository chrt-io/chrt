import { isNull } from '~/helpers';
import { createSVG as create } from '~/layout';
import { lineWidth, lineColor } from './lib';
import chrtGeneric from '../chrtGeneric';

const DEFAULT_LINE_WIDTH = 1;
const DEAULT_LINE_COLOR = '#000';

function chrtLine() {
  chrtGeneric.call(this);
  this.type = 'series';

  this.strokeWidth = DEFAULT_LINE_WIDTH;
  this.stroke = DEAULT_LINE_COLOR;

  this.draw = () => {
    const _data = this._data.length ? this._data : this.parentNode._data;
    console.log('this.draw', _data)
    if (!isNull(_data)) {
      if (!this.path) {
        this.path = create('path');
        this.g.appendChild(this.path);
      }



      const d = this.interpolationFunction(_data);
      this.path.setAttribute('d', d.join(''));
      this.path.setAttribute('fill', 'none');
      this.path.setAttribute('stroke', this.stroke);
      this.path.setAttribute('stroke-width', this.strokeWidth);
      this.path.setAttribute('stroke-linejoin', 'round');

      const singlePoints = _data.filter((d, i, points) => {
        return (isNull(points[i - 1]) || isNull(points[i - 1][this.fields.y]))
                &&
                !isNull(d[this.fields.y])
                &&
                (isNull(points[i + 1]) || isNull(points[i + 1][this.fields.y]));
      });

      // TODO: if the data changes and new single points are added they won't be rendered
      if (!this.points) {
        this.points = [];
        singlePoints.forEach((point) => {
          const circle = create('circle');
          this.points.push({
            circle,
            point,
          });
          this.g.appendChild(circle);
        });
      }
      this.points.forEach(d => {
        d.circle.setAttribute('cx', this.parentNode.scales['x'](d.point[this.fields.x]));
        d.circle.setAttribute('cy', this.parentNode.scales['y'](d.point[this.fields.y]));
        d.circle.setAttribute('fill', this.stroke);
        d.circle.setAttribute('r', this.strokeWidth);
      })
    }

    this.objects.forEach(obj => obj.draw())

    return this.parentNode;
  };
}

chrtLine.prototype = Object.create(chrtGeneric.prototype);
chrtLine.prototype.constructor = chrtLine;
chrtLine.parent = chrtGeneric.prototype;

chrtLine.prototype = Object.assign(chrtLine.prototype, {
  width: lineWidth,
  color: lineColor,
});

export default chrtLine;

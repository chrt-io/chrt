import { createSVG as create,  } from '~/layout';
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
    if (!this.path) {
      this.path = create('path');
      this.g.appendChild(this.path);
    }

    const d = this._data.map((d, i) => {
      const x = this.parentNode.scales['x'](d.x);
      const y = this.parentNode.scales['y'](d.y);
      return `${!i ? 'M' : 'L'}${x},${y}`;
    });
    this.path.setAttribute('d', d.join(''));
    this.path.setAttribute('fill', 'none');
    this.path.setAttribute('stroke', this.stroke);
    this.path.setAttribute('stroke-width', this.strokeWidth)
    this.path.setAttribute('stroke-linejoin', 'round')

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

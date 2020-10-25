import { isNull } from '~/helpers';
export default function lineOpacity(value) {
  if(isNull(value)) {
    return this.strokeOpacity;
  }

  if (typeof value === 'function') {
    // something will go here
  } else {
    this.strokeOpacity = value;
  }
  return this;
}

export {version} from '../dist/package.js';
export * from 'chrt-core';
export {
  xAxis,
  yAxis,
  chrtAxisTitle,
  chrtAxisTitle as axisTitle,
} from 'chrt-axis';
export * from 'chrt-grid';
export {
  chrtLine,
  chrtLine as line,
} from 'chrt-line';
export {
  chrtBars as bars,
  chrtBars,
  chrtColumns as columns,
  chrtColumns,
} from 'chrt-bars';
export {
  chrtPoints,
  chrtPoints as points,
} from 'chrt-points';
export {
  chrtLabel,
  chrtLabels,
  chrtLabel as label,
  chrtLabels as labels,
} from 'chrt-label';
export {
  chrtMarkers,
  chrtMarkers as markers,
} from 'chrt-markers';
export {
  chrtGroup,
  chrtGroup as group,
  chrtStack,
  chrtStack as stack,
} from 'chrt-set';
export {
  chrtAnnotation,
  chrtAnnotation as annotation,
} from 'chrt-annotation';
export * as interpolations from 'chrt-interpolations';
export {
  chrtDotPlot,
  chrtDotPlot as dotPlot
} from 'chrt-dotplot';
export {
  chrtHorizontalRange,
  chrtHorizontalRange as horizontalRange,
  chrtVerticalRange,
  chrtVerticalRange as verticalRange,
} from 'chrt-range';

// TEMPORARY REMOVED THE DEFAULT Chrt() from chrt
// import Chrt from 'chrt-core';
// export default Chrt;

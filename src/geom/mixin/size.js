/**
 * @fileOverview Utility for calculate the with ratui in x axis
 * @author sima.zhang1990@gmail.com
 * @author dxq613@gmail.com
 */
import { EVENT_AFTER_SIZE_CHANGE } from '../../chart/const';

import { uniq, isNil } from '../../util/common';
import Global from '../../global';

const SizeMixin = {
  initEvent() {
    const chart = this.get('chart');
    if (!chart) {
      return;
    }
    chart.on(EVENT_AFTER_SIZE_CHANGE, () => {
      this.set('_width', null);
    });
  },
  getDefaultSize() {
    let defaultSize = this.get('defaultSize');
    if (!defaultSize) {
      const coord = this.get('coord');
      const xScale = this.getXScale();
      const dataArray = this.get('dataArray');
      const values = uniq(xScale.values);
      const count = values.length;
      const range = xScale.range;
      let normalizeSize = 1 / count;
      let widthRatio = 1;

      if (coord && coord.isPolar) {
        if (coord.transposed && count > 1) {
          widthRatio = Global.widthRatio.multiplePie;
        } else {
          widthRatio = Global.widthRatio.rose;
        }
      } else {
        if (xScale.isLinear) {
          normalizeSize *= range[1] - range[0];
        }
        widthRatio = Global.widthRatio.column;
      }
      normalizeSize *= widthRatio;
      if (this.hasAdjust('dodge')) {
        normalizeSize = normalizeSize / dataArray.length;
      }
      defaultSize = normalizeSize;
      this.set('defaultSize', defaultSize);
    }
    return defaultSize;
  },
  getDimWidth(dimName) {
    const coord = this.get('coord');
    const start = coord.convertPoint({
      x: 0,
      y: 0
    });
    const end = coord.convertPoint({
      x: dimName === 'x' ? 1 : 0,
      y: dimName === 'x' ? 0 : 1
    });
    let width = 0;
    if (start && end) {
      width = Math.sqrt(
        Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
      );
    }
    return width;
  },
  _getWidth() {
    let width = this.get('_width');
    if (!width) {
      const coord = this.get('coord');
      if (coord && coord.isPolar && !coord.transposed) {
        width = (coord.endAngle - coord.startAngle) * coord.circleRadius;
      } else {
        width = this.getDimWidth('x');
      }
      this.set('_width', width);
    }

    return width;
  },
  _toNormalizedSize(size) {
    const width = this._getWidth();
    return size / width;
  },
  _toCoordSize(normalizeSize) {
    const width = this._getWidth();
    return width * normalizeSize;
  },
  getNormalizedSize(obj) {
    let size = this.getAttrValue('size', obj);
    if (isNil(size)) {
      size = this.getDefaultSize();
    } else {
      size = this._toNormalizedSize(size);
    }
    return size;
  },
  getSize(obj) {
    let size = this.getAttrValue('size', obj);
    if (isNil(size)) {
      const normalizeSize = this.getDefaultSize();
      size = this._toCoordSize(normalizeSize);
    }
    return size;
  }
};

export default SizeMixin;

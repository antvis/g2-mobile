/**
 * 一些小的图标，用于 tooltip 和 legend 的 marker
 * @type {Object}
 */
const Util = require('../util/common');
const { Shape } = require('../graphic/index');

const SYMBOLS = {
  // 圆
  circle(x, y, r, ctx) {
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
  },
  // 正方形
  square(x, y, r, ctx) {
    ctx.moveTo(x - r, y - r);
    ctx.lineTo(x + r, y - r);
    ctx.lineTo(x + r, y + r);
    ctx.lineTo(x - r, y + r);
    ctx.closePath();
  },
  // 菱形
  diamond(x, y, r, ctx) {
    ctx.moveTo(x - r, y);
    ctx.lineTo(x, y - r);
    ctx.lineTo(x + r, y);
    ctx.lineTo(x, y + r);
    ctx.closePath();
  },
  // 三角形
  triangle(x, y, r, ctx) {
    const diffY = r * Math.sin((1 / 3) * Math.PI);
    ctx.moveTo(x - r, y + diffY);
    ctx.lineTo(x, y - diffY);
    ctx.lineTo(x + r, y + diffY);
    ctx.closePath();
  },
  // 倒三角形
  'triangle-down': function(x, y, r, ctx) {
    const diffY = r * Math.sin((1 / 3) * Math.PI);
    ctx.moveTo(x - r, y - diffY);
    ctx.lineTo(x + r, y - diffY);
    ctx.lineTo(x, y + diffY);
    ctx.closePath();
  }
};

class Marker extends Shape {
  getDefaultCfg() {
    const cfg = super.getDefaultCfg();
    return Util.mix({}, cfg, {
      canStroke: true,
      canFill: true,
      type: 'marker'
    });
  }

  getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      lineWidth: 1
    };
  }

  createPath(context) {
    const attrs = this.get('attrs');
    const { x, y, radius } = attrs;
    const symbol = attrs.symbol || 'circle';
    let method;
    if (Util.isFunction(symbol)) {
      method = symbol;
    } else {
      method = SYMBOLS[symbol];
    }
    context.beginPath();
    method(x, y, radius, context, this);
  }

  calculateBox() {
    const attrs = this.get('attrs');
    const { x, y, radius, lineWidth } = attrs;
    const halfLineWidth = lineWidth / 2 + radius;
    return {
      minX: x - halfLineWidth,
      minY: y - halfLineWidth,
      maxX: x + halfLineWidth,
      maxY: y + halfLineWidth
    };
  }
}

module.exports = Marker;
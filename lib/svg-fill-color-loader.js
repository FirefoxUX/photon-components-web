const { getOptions, parseQuery } = require("loader-utils");

const PhotonColors = require("photon-colors/photon-colors.json");

module.exports = function(source) {
  const { defaultFill = "grey-90" } = getOptions(this) || {};
  const { fill = defaultFill } = parseQuery(this.resourceQuery || "?") || {};

  let fillColor = null;
  const [color, variant, alpha] = fill.split("-");
  if (color in PhotonColors && variant in PhotonColors[color]) {
    const item = PhotonColors[color][variant];
    if (!alpha) {
      fillColor = item.hex;
    } else {
      const { r, g, b } = getRgb(item.hex);
      const a = parseInt(alpha.substr(1), 10) / 100;
      fillColor = `rgba(${r},${g},${b},${a})`;
    }
  }

  if (!fillColor) {
    return source;
  }

  this.resourcePath = this.resourcePath.replace(/\.svg$/, `-${fill}.svg`);
  return source.replace(/fill="context-fill"/g, `fill="${fillColor}"`);
};

function getRgb(value) {
  const r = parseInt(value.substr(1, 2), 16);
  const g = parseInt(value.substr(3, 2), 16);
  const b = parseInt(value.substr(5, 2), 16);
  return { r, g, b };
}

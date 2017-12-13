
var ansi = require('ansi-256-colors')

var brightPalette = {
  red: [5, 0, 0],
  blue: [0, 1, 5],
  green: [0, 5, 1],
  cyan: [0, 3, 4],
  white: [5, 5, 5],
  gray: [2, 2, 2],
  yellow: [5, 5, 0],
  pink: [5, 0, 4],
  black: [0, 0, 0],
}
var bright = exports

var dimPalette = {
  red: [2, 0, 0],
  blue: [0, 0, 2],
  green: [0, 2, 1],
  cyan: [0, 1, 2],
  white: [3, 3, 3],
  gray: [1, 1, 1],
  yellow: [2, 2, 0],
  pink: [3, 0, 1],
  black: [0, 0, 0],
}
var dim = exports.dim = {}

var colors = Object.keys(brightPalette)
colors.forEach(function(color) {
  bright[color] = function(message) {
    return fromRGB(color, brightPalette) + message + ansi.reset
  }
  dim[color] = function(message) {
    return fromRGB(color, dimPalette) + message + ansi.reset
  }
})

function fromRGB(color, palette) {
  return ansi.fg.getRgb.apply(null, palette[color])
}

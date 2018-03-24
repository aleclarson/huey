const ansi = require('ansi-256-colors')

const huey = exports

const colors = {
  red: [5, 0, 0],
  pale_red: [5, 0, 1],
  blue: [0, 1, 5],
  pale_blue: [3, 3, 5],
  green: [0, 5, 1],
  pale_green: [0, 5, 3],
  yellow: [5, 5, 0],
  pale_yellow: [5, 5, 2],
  cyan: [0, 3, 4],
  pale_cyan: [1, 4, 5],
  pink: [5, 0, 4],
  pale_pink: [5, 1, 4],
  white: [5, 5, 5],
  silver: [4, 4, 4],
  gray: [2, 2, 2],
  coal: [1, 1, 1],
  black: [0, 0, 0],
}

if (!process.stdout.isTTY) {
  var noop = (msg) => msg
}

Object.keys(colors).forEach(name => {
  if (noop) return huey[name] = noop
  let color = ansi.fg.getRgb(...colors[name])
  huey[name] = (msg) => color + msg + ansi.reset
})

huey.log = function(log) {
  if (!process.stdout.isTTY) {
    var noop = log
  }
  Object.keys(colors).forEach(name => {
    log[name] = noop || function(label, ...args) {
      log(huey[name](label), ...args)
    }
  })
  return log
}


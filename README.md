
# huey v1.0.0 

Available colors:
- `red`
- `blue`
- `green`
- `yellow`
- `cyan`
- `pink`
- `white`
- `silver`
- `gray`
- `coal`
- `black`

Pale variants exist for non-monochrome colors.

```js
const huey = require('huey')

// Create a tinted string.
let str = huey.red('Hello red world!')
console.log(str, 'Hello untinted world!')

// Augment a log function.
let {log} = console
huey.log(log)

// Only the first argument is tinted.
log.pale_blue('info:', 'users online =>', 50)
```


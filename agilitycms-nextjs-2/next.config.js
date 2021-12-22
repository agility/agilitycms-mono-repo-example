const withTM = require("next-transpile-modules")([
  "agility-mono-example-design-system",
]); // pass the modules you would like to see transpiled

module.exports = withTM({});

[![Build Status](https://travis-ci.com/kcmr/babel-plugin-transform-block-scope-to-iife.svg?branch=master)](https://travis-ci.com/kcmr/babel-plugin-transform-block-scope-to-iife)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![codecov](https://codecov.io/gh/kcmr/babel-plugin-transform-block-scope-to-iife/branch/master/graph/badge.svg)](https://codecov.io/gh/kcmr/babel-plugin-transform-block-scope-to-iife)
![Dependency status](https://img.shields.io/david/kcmr/babel-plugin-transform-block-scope-to-iife.svg)

[![NPM](https://nodei.co/npm/babel-plugin-transform-block-scope-to-iife.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/babel-plugin-transform-block-scope-to-iife/)

# babel-plugin-transform-block-scope-to-iife

Replaces brackets used as scope in a file by an IIFE.   
This prevents exposing variables in `window` when `const` or `let` are transformed to `var` after transpiling to ES5.

**Input:**

```js
{
  const { Element } = Polymer;
}
```

**Output:**

```js
(function () {
  const {
    Element
  } = Polymer;
})();
```

## Install 

```
npm i babel-plugin-transform-block-scope-to-iife
```

## Usage 

### With a configuration file (`.babelrc`)

```json
{
  "plugins": [
    ["babel-plugin-transform-block-scope-to-iife"]
  ]
}
```

### Via Node API

```js
require("@babel/core").transform("code", {
  plugins: ["babel-plugin-transform-block-scope-to-iife"],
});
```

## License

This project is licensed under the [MIT License](LICENSE).

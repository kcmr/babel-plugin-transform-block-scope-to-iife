# babel-plugin-transform-block-scope-to-iife

Replaces brackets used as scope in a file by an IIFE.

Input:

```js
{
  const { Element } = Polymer;
}
```

Output: 

```js
(function () {
  const {
    Element
  } = window.Polymer;
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

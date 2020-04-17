const path = require('path');
const babel = require('@babel/core');
const plugin = require('.');

const transformFixture = (fixture, options = {}) => {
  const fixturePath = path.join(__dirname, '__fixtures__', fixture);
  const { code } = babel.transformFileSync(fixturePath, {
    plugins: [[plugin, options]],
  });

  return code;
};

describe('babel-plugin-transform-block-scope-to-iife', () => {
  it('transforms top level block scope by an IIFE', () => {
    expect(transformFixture('top-level-block-scope.js')).toMatchSnapshot();
  });
});

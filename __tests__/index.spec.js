const babel = require('@babel/core');
const plugin = require('..');

function transformFixture(fixture, options = {}) {
  const { code } = babel.transform(fixture, {
    plugins: [[plugin, options]],
  });

  return code;
}

it('transforms top level block scope by an IIFE', () => {
  const code = `
    {
      const { Element, html } = window.Polymer;

      class Component extends Element {
        static get is() {
          return 'tag-name';
        }
      }
    }

    class Component extends Element {
      static get is() {
        return 'tag-name';
      }
    }

    if (true) {
      // code
    }
  `;
  const result = transformFixture(code);

  expect(result).toMatchSnapshot();
});

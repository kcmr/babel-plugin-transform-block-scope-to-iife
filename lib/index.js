module.exports = function (babel) {
  const { types: t, template } = babel;

  const iife = template`
  (function() {
    'use strict';
    BODY
  }());
  `;

  return {
    name: 'transform-block-scope-to-iife',

    visitor: {
      BlockStatement: {
        exit(path) {
          if (t.isProgram(path.parentPath)) {
            path.replaceWith(
              iife({
                BODY: path.node.body,
              }),
            );
          }
        },
      },
    },
  };
};

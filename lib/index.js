module.exports = function (babel) {
  const t = babel.types;

  const isProgramChild = (path) => path.parentPath.type === 'Program';
  const iife = (path) =>
    t.expressionStatement(
      t.callExpression(
        t.functionExpression(null, [], t.blockStatement(path.node.body)),
        [],
      ),
    );

  return {
    name: 'transform-block-scope-to-iife',

    visitor: {
      BlockStatement: {
        exit(path) {
          if (isProgramChild(path)) {
            path.replaceWith(iife(path));
          }
        },
      },
    },
  };
};

const BrowserMap = {
  FunctionDeclaration: {
    type: "FunctionDeclaration",
    message: "Using async function is not allowed",
    browsers: {
      chrome: "55",
      firefox: "52",
      opera: "42",
      safari: "10.1",
      edge: "15",
      ios: "10.3",
      android: "55",
    },
  },
  ArrowFunctionExpression: {
    type: "ArrowFunctionExpression",
    message: "Using async arrow function is not allowed",
    browsers: {
      chrome: "55",
      firefox: "52",
      opera: "42",
      safari: "10.1",
      edge: "15",
      ios: "10.3",
      android: "55",
    },
  },
  AwaitExpression: {
    type: "AwaitExpression",
    message: "Using await xxx() is not allowed",
    browsers: {
      chrome: "55",
      firefox: "52",
      opera: "42",
      safari: "10.1",
      edge: "15",
      ios: "10.3",
      android: "55",
    },
  },
};

module.exports = function (usePlugin = new Map()) {
  return {
    meta: {
      docs: {
        description: "ecma2017 rules",
      },
    },
    create(context) {
      return {
        FunctionDeclaration(node) {
          if (node.async === true && usePlugin("async-to-generator")) {
            const { browsers, message } = BrowserMap["FunctionDeclaration"];
            context.report({
              type: 'FunctionDeclaration',
              node,
              browsers,
              message,
            });
          }
        },
        ArrowFunctionExpression(node) {
          if (node.async === true && usePlugin("async-to-generator")) {
            const { browsers, message } = BrowserMap["ArrowFunctionExpression"];
            context.report({
              type: 'ArrowFunctionExpression',
              node,
              browsers,
              message,
            });
          }
        },
        AwaitExpression(node) {
          if (
            node.argument.type === "CallExpression" &&
            usePlugin("async-to-generator")
          ) {
            const { browsers, message } = BrowserMap["AwaitExpression"];
            context.report({
              type: 'AwaitExpression',
              node,
              browsers,
              message,
            });
          }
        },
      };
    },
  };
};

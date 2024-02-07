const BrowserMap = {
  BinaryExpression: {
    browsers: {
      chrome: 52,
      firefox: 52,
      safari: 10.1,
      opera: 39,
      edge: 14,
      ie: 11,
      ios: 10.3,
      android: 52,
    },
    message: "Using BinaryExpression operator ** is not allowed",
  },
  AssignmentExpression: {
    browsers: {
      chrome: 52,
      firefox: 52,
      safari: 10.1,
      opera: 39,
      edge: 14,
      ie: 11,
      ios: 10.3,
      android: 52,
    },
    message: "Using AssignmentExpression operator **= is not allowed",
  },
};
module.exports = function (usePlugin) {
  return {
    meta: {
      docs: {
        description: "ecma2016 rules",
      },
    },
    create(context) {
      return {
        BinaryExpression(node) {
          if (node.operator === "**" && usePlugin("exponentiation-operator")) {
            const { browsers, message } = BrowserMap["BinaryExpression"];
            context.report({
              type: 'BinaryExpression',
              node,
              browsers,
              message,
            });
          }
        },
        AssignmentExpression(node) {
          if (node.operator === "**=" && usePlugin("exponentiation-operator")) {
            const { browsers, message } = BrowserMap["AssignmentExpression"];
            context.report({
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

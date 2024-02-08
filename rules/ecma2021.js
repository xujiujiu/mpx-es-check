const BrowserMap = {
  AssignmentExpression: {
    browsers: {
      chrome: "85",
      firefox: "85",
      opera: "71",
      safari: "14",
      edge: "85",
      ios: "14",
      android: "85",
    },
    message: "使用的赋值运算符 ${type} 浏览器暂不支持，需要走 babel 转译",
  },
};

module.exports = function (usePlugin) {
  return {
    meta: {
      docs: {
        description: "ecma2021 rules",
      },
    },
    create(context) {
      return {
        /**
         * AssignmentExpression node has short-circuiting behavior if the operator property is any of "||=","&&=", and "??=".
         * @param node
         * @constructor
         */
        AssignmentExpression(node) {
          if (
            node.operator === "||=" ||
            node.operator === "??=" ||
            node.operator === "&&="
          ) {
            if (usePlugin("logical-assignment-operators")) {
              const { browsers, message } = BrowserMap["AssignmentExpression"];
              context.report({
                type: 'AssignmentExpression',
                node,
                browsers,
                message: message.replace('${type}', node.operator),
              });
            }
          }
        },
      };
    },
  };
};

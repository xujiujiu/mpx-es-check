const BrowserMap = {
  CatchClause: {
    browsers: {
      chrome: "66",
      firefox: "58",
      opera: "53",
      safari: "11.1",
      edge: "79",
      ios: "11.3",
      android: "66",
    },
    message:
      "Using CatchClause param is null is not allowed, E.g., try { foo() } catch { bar() }",
  },
};

module.exports = function (usePlugin) {
  return {
    meta: {
      docs: {
        description: "ecma2019 rules",
      },
    },
    create(context) {
      return {
        CatchClause(node) {
          if (node.param === null && usePlugin("optional-catch-binding")) {
            const { browsers, message } = BrowserMap["CatchClause"];
            context.report({
              type: 'CatchClause',
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

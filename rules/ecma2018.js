const BrowserMap = {
  ForOfStatement: {
    browsers: {
      chrome: "63",
      firefox: "57",
      opera: "50",
      safari: "11.1",
      edge: "79",
      ios: "11.3",
      android: "63",
    },
    message: "Using for_await_of is not allowed",
  },
  hasSpreadElement: {
    browsers: {
      chrome: "60",
      firefox: "55",
      opera: "47",
      safari: "11.1",
      edge: "79",
      ios: "11.3",
      android: "60",
    },
    message: "Using hasSpreadElement in ObjectExpression is not allowed",
  },
  TemplateElement: {
    browsers: {
      chrome: "62",
      firefox: "53",
      opera: "49",
      safari: "11",
      edge: "79",
      ios: "11",
      android: "62",
    },
    message: "Using TemplateElement has cooked null is not allowed",
  },
  hasRestElement: {
    browsers: {
      chrome: "60",
      firefox: "55",
      opera: "47",
      safari: "11.1",
      edge: "79",
      ios: "11.3",
      android: "60",
    },
    message: "Using RestElement in ObjectPattern is not allowed",
  },
};

module.exports = function (usePlugin) {
  return {
    meta: {
      docs: {
        description: "ecma2018 rules",
      },
    },
    create(context) {
      return {
        ForOfStatement(node) {
          if (node.await === true && usePlugin("async-generator-functions")) {
            const { browsers, message } = BrowserMap["ForOfStatement"];
            context.report({
              type: 'ForOfStatement',
              node,
              browsers,
              message,
            });
          }
        },
        // {a: 1, ...obj, b: 2}
        ObjectExpression(node) {
          /**
           * extend interface ObjectExpression {
              properties: [ Property | SpreadElement ];
          }
           */
          if (node.properties && node.properties.length) {
            let hasSpreadElement = false;
            for (const property of node.properties) {
              if (property.type === "SpreadElement") {
                hasSpreadElement = true;
              }
            }
            if (hasSpreadElement && usePlugin("object-rest-spread")) {
              const { browsers, message } = BrowserMap["hasSpreadElement"];
              context.report({
                type: 'hasSpreadElement',
                node,
                browsers,
                message,
              });
            }
          }
        },
        TemplateElement(node) {
          if (
            node.value &&
            node.value.cooked === null &&
            usePlugin("template-literals")
          ) {
            const { browsers, message } = BrowserMap["TemplateElement"];
            context.report({
              type: 'TemplateElement',
              node,
              browsers,
              message,
            });
          }
        },
        // {a, ...rest} = obj
        ObjectPattern(node) {
          if (node.properties && node.properties.length) {
            let hasRestElement = false;
            for (const property of node.properties) {
              if (property.type === "hasRestElement") {
                hasRestElement = true;
              }
            }
            if (hasRestElement && usePlugin("destructuring")) {
              const { browsers, message } = BrowserMap["hasRestElement"];
              context.report({
                type: 'hasRestElement',
                node,
                browsers,
                message,
              });
            }
          }
        },
      };
    },
  };
};

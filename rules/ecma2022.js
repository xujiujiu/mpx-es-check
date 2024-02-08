const BrowserMap = {
  PropertyDefinition: {
    browsers: {
      chrome: "91",
      firefox: "90",
      opera: "77",
      safari: "15",
      edge: "91",
      ios: "15",
      android: "91",
    },
    message: "using private variable in class is not allow",
  },
  MethodDefinition: {
    browsers: {
      chrome: "94",
      firefox: "93",
      opera: "80",
      safari: "16.4",
      edge: "94",
      ios: "16.4",
      android: "94",
    },
    message: "using ${type} in class is not allow",
  },
  AwaitExpression: {
    browsers: {
      chrome: "89",
      firefox: "89",
      opera: "75",
      safari: "15",
      edge: "89",
      ios: "15",
      android: "89",
    },
    message: 'using await import("./xxx") is not allow',
  },
  regex: {
    browsers: {
      chrome: "90",
      firefox: "88",
      opera: "76",
      safari: "15",
      edge: "90",
      ios: "15",
      android: "90",
    },
    message: "using regex /d（匹配索引） is not allow",
  },
};

module.exports = function (usePlugin) {
  return {
    meta: {
      docs: {
        description:
          "ecma2022 rules https://github.com/estree/estree/blob/master/es2022.md",
      },
    },
    create(context) {
      return {
        // class 私有属性/方法
        PropertyDefinition(node) {
          if (node.key.type === "PrivateIdentifier") {
            if (usePlugin("class-properties") && usePlugin("classes")) {
              const { browsers, message } = BrowserMap["AssignmentExpression"];
              context.report({
                type: 'AssignmentExpression',
                node,
                browsers,
                message
              });
            }
          }
        },
        MethodDefinition(node) {
          if (!usePlugin("class-properties") || !usePlugin("classes")) return;
          const handle = [];
          if (node.kind === "get" || node.kind === "set") {
            handle.push(node.kind);
          }
          if (node.static === true && node.computed === false) {
            // class 静态方法
            handle.push("static");
          }
          if (node.key.type === "PrivateIdentifier") {
            // class 私有方法
            handle.push("private");
          }
          if (handle.length) {
            const { browsers, message } = BrowserMap["MethodDefinition"];
            context.report({
              type: 'MethodDefinition',
              node,
              browsers,
              message: message.replace('${type}', handle.join(" "))
            });
          }
        },
        AwaitExpression(node) {
          // await import ('/xxx')
          if (
            node.argument.type === "ImportExpression" &&
            usePlugin("modules-commonjs")
          ) {
            const { browsers, message } = BrowserMap["AwaitExpression"];
            context.report({
              type: 'AwaitExpression',
              node,
              browsers,
              message
            });
          }
        },
        regex(node) {
          if (node.flags === "d") {
            const { browsers, message } = BrowserMap["regex"];
            context.report({
              type: 'regex',
              node,
              browsers,
              message
            });
          }
        },
      };
    },
  };
};

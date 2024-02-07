const BrowserMap = {
  Literal: {
    browsers: {
      chrome: "67",
      firefox: "68",
      opera: "54",
      safari: "14",
      edge: "79",
      ios: "14",
      android: "67",
    },
    message: "Using Literal value to represent BigInt literals such as 100n",
  },
  BigIntLiteral: {
    browsers: {
      chrome: "67",
      firefox: "68",
      opera: "54",
      safari: "14",
      edge: "79",
      ios: "14",
      android: "67",
    },
    message: "there has BigIntLiteral",
  },
  OptionalMemberExpression: {
    browsers: {
      chrome: "80",
      firefox: "74",
      opera: "67",
      safari: "13.1",
      edge: "80",
      ios: "13.4",
      android: "81",
    },
    message:
      "there has OptionalMemberExpression node，such as a?.b || a?.b.c || a.b?.c || a?.b?.c",
  },
  ChainExpression: {
    browsers: {
      chrome: "80",
      firefox: "74",
      opera: "67",
      safari: "13.1",
      edge: "80",
      ios: "13.4",
      android: "81",
    },
    message:
      "there has ChainExpression node，such as a?.b || a?.b.c || a.b?.c || a?.b?.c",
  },
  ImportExpression: {
    browsers: {
      chrome: "66",
      firefox: "67",
      opera: "50",
      safari: "11.1",
      edge: "79",
      ios: "11.3",
      android: "66",
    },
    message: 'there has ImportExpression node，such as var a = import("b")',
  },
  LogicalExpression: {
    browsers: {
      chrome: "80",
      firefox: "74",
      opera: "67",
      safari: "13.1",
      edge: "80",
      ios: "13.4",
      android: "81",
    },
    message:
      'The operator property of the LogicalExpression node can be "??", such as var a = "1 ?? 2"',
  },
  MetaProperty: {
    browsers: {
      chrome: "67",
      firefox: "68",
      opera: "54",
      safari: "11.1",
      edge: "79",
      ios: "11.3",
      android: "67",
    },
    message:
      "Existing MetaProperty node represents import.meta meta property as well.",
  },
  ExportAllDeclaration: {
    browsers: {
      chrome: "72",
      firefox: "80",
      opera: "60",
      safari: "14.1",
      edge: "79",
      ios: "14.5",
      android: "72",
    },
    message:
      'The exported property contains an Identifier when a different exported name is specified using as, e.g., export * as foo from "mod"',
  },
};

module.exports = function (usePlugin) {
  return {
    meta: {
      docs: {
        description: "ecma2020 rules",
      },
    },
    create(context) {
      return {
        /**
         * 赋值的value 为 bigint 类型
         * @param node
         * @constructor
         */
        Literal(node) {
          if (node.bigint) {
            const { browsers, message } = BrowserMap["Literal"];
            context.report({
              type: 'Literal',
              node,
              browsers,
              message,
            });
          }
        },
        BigIntLiteral(node) {
          const { browsers, message } = BrowserMap["BigIntLiteral"];
          context.report({
            type: 'BigIntLiteral',
            node,
            browsers,
            message,
          });
        },
        /**
         * 当出现 optional 语法时，例如：a?.b || a?.b.c || a.b?.c || a?.b?.c
         * @param node
         * @constructor
         */
        OptionalMemberExpression(node) {
          if (usePlugin("optional-chaining")) {
            const { browsers, message } = BrowserMap["OptionalMemberExpression"];
            context.report({
              type: 'OptionalMemberExpression',
              node,
              browsers,
              message,
            });
          }
        },
        ChainExpression(node) {
          // plugin模式，使用的acorn解析，可选链结构类型是 ChainExpression
          if (usePlugin("optional-chaining")) {
            const { browsers, message } = BrowserMap["ChainExpression"];
            context.report({
              type: 'ChainExpression',
              node,
              browsers,
              message,
            });
          }
        },
        /**
         * import 表达式 例如：var a = import('b')
         * @param node
         * @constructor
         */
        ImportExpression(node) {
          if (usePlugin("modules-commonjs")) {
            const { browsers, message } = BrowserMap["ImportExpression"];
            // && arrow-functions
            context.report({
              type: 'ImportExpression',
              node,
              browsers,
              message,
            });
          }
        },
        /**
         * The operator property of the LogicalExpression node can be "??" to represent Nullish Coalescing syntax.
         * @param node
         * @constructor
         */
        LogicalExpression(node) {
          if (
            node.operator === "??" &&
            usePlugin("nullish-coalescing-operator")
          ) {
            const { browsers, message } = BrowserMap["LogicalExpression"];
            context.report({
              type: 'LogicalExpression',
              node,
              browsers,
              message,
            });
          }
        },
        /**
         * Existing MetaProperty node represents import.meta meta property as well.
         * @param node
         * @constructor
         */
        MetaProperty(node) {
          const { browsers, message } = BrowserMap["MetaProperty"];
          context.report({
            type: 'MetaProperty',
            node,
            browsers,
            message,
          });
        },
        /**
         * The exported property contains an Identifier when a different exported name is specified using as, e.g., export * as foo from "mod"
         * @param node
         * @constructor
         */
        ExportAllDeclaration(node) {
          if (usePlugin("modules-commonjs")) {
            const { browsers, message } = BrowserMap["ExportAllDeclaration"];
            context.report({
              type: 'ExportAllDeclaration',
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

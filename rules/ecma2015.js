const BrowserMap = {
  let: {
    message: "Using let is not allowed",
    browsers: {
      chrome: "49",
      firefox: "44",
      edge: "14",
      safari: "10",
      opera: "17",
      ios: "10",
      android: "49",
    },
  },
  const: {
    message: "Using const is not allowed",
    browsers: {
      chrome: "21",
      firefox: "36",
      edge: "12",
      safari: "5.1",
      opera: "9",
      ios: "5",
      android: "4.4",
    },
  },
  generator: {
    message: "Using generator function is not allowed",
    browsers: {
      chrome: "39",
      firefox: "26",
      edge: "13",
      safari: "10",
      opera: "26",
      ios: "10",
      android: "39",
    },
  },
  "for...of": {
    message: "Using for...of is not allowed",
    browsers: {
      chrome: "38",
      firefox: "13",
      edge: "12",
      safari: "7",
      opera: "25",
      ios: "7",
      android: "38",
    },
  },
  Super: {
    message: "Using Super is not allowed",
    browsers: {
      chrome: "42",
      firefox: "45",
      edge: "13",
      safari: "7",
      opera: "29",
      ios: "7",
      android: "42",
    },
  },
  SpreadElement: {
    message: "Using SpreadElement(解构语法) is not allowed",
    browsers: {
      chrome: "46",
      firefox: "27",
      edge: "12",
      safari: "8",
      opera: "37",
      ios: "10",
      android: "46",
    },
  },
  ArrowFunction: {
    message: "Using ArrowFunction(箭头函数) is not allowed",
    browsers: {
      chrome: "45",
      firefox: "22",
      edge: "12",
      safari: "10",
      opera: "32",
      ios: "10",
      android: "45",
    },
  },
  YieldExpression: {
    message: "Using YieldExpression is not allowed",
    browsers: {
      chrome: "39",
      firefox: "26",
      edge: "12",
      safari: "10",
      opera: "26",
      ios: "10",
      android: "39",
    },
  },
  TemplateLiteral: {
    message: "Using TemplateLiteral(模版语法) is not allowed",
    browsers: {
      chrome: "41",
      firefox: "34",
      edge: "12",
      safari: "9",
      opera: "28",
      ios: "9.3",
      android: "41",
    },
  },
  TaggedTemplateExpression: {
    message: "Using TaggedTemplateExpression(标签模版字符串) is not allowed",
    browsers: {
      chrome: "41",
      firefox: "34",
      edge: "12",
      safari: "9",
      opera: "28",
      ios: "9.3",
      android: "41",
    },
  },
  ObjectPattern: {
    message: "Using ObjectPattern(初始化赋值) is not allowed",
    browsers: {
      chrome: "49",
      firefox: "45",
      edge: "14",
      safari: "10",
      opera: "36",
      ios: "10",
      android: "49",
    },
  },
  ArrayPattern: {
    message: "Using ArrayPattern(初始化赋值) is not allowed",
    browsers: {
      chrome: "49",
      firefox: "45",
      edge: "14",
      safari: "10",
      opera: "36",
      ios: "10",
      android: "49",
    },
  },
  RestElement: {
    message: "Using RestElement(解构初始化赋值) is not allowed",
    browsers: {
      chrome: "47",
      firefox: "15",
      edge: "12",
      safari: "10",
      opera: "34",
      ios: "10",
      android: "47",
    },
  },
  AssignmentPattern: {
    message:
      "Using AssignmentPattern(表达式初始化赋值) function a(b = 1) {} is not allowed",
    browsers: {
      chrome: "49",
      firefox: "45",
      edge: "14",
      safari: "10",
      opera: "36",
      ios: "10",
      android: "49",
    },
  },
  ClassBody: {
    message: "Using ClassBody is not allowed",
    browsers: {
      chrome: "49",
      firefox: "45",
      edge: "12",
      safari: "10",
      opera: "36",
      ios: "10",
      android: "49",
    },
  },
  MethodDefinition: {
    message: "Using MethodDefinition(class 方法) is not allowed",
    browsers: {
      chrome: "39",
      firefox: "34",
      edge: "12",
      safari: "10",
      opera: "26",
      ios: "10",
      android: "39",
    },
  },
  ClassDeclaration: {
    message: "Using class 声明 is not allowed",
    browsers: {
      chrome: "49",
      firefox: "45",
      edge: "13",
      safari: "10.1",
      opera: "36",
      ios: "10.3",
      android: "49",
    },
  },
  ClassExpression: {
    message: "Using class 表达式 is not allowed",
    browsers: {
      chrome: "42",
      firefox: "45",
      edge: "13",
      safari: "7",
      opera: "29",
      ios: "7",
      android: "42",
    },
  },
  "MetaProperty(new.target())": {
    message: "Using MetaProperty(new.target()) is not allowed",
    browsers: {
      chrome: "46",
      firefox: "44",
      edge: "13",
      safari: "11",
      opera: "36",
      ios: "11",
      android: "46",
    },
  },
  ImportDeclaration: {
    message: "Using ImportDeclaration is not allowed",
    browsers: {
      chrome: "61",
      firefox: "60",
      edge: "18",
      safari: "10.1",
      opera: "48",
      ios: "10.3",
      android: "61",
    },
  },
  ExportNamedDeclaration: {
    message: "Using ExportNamedDeclaration is not allowed",
    browsers: {
      chrome: "61",
      firefox: "60",
      edge: "18",
      safari: "10.1",
      opera: "48",
      ios: "10.3",
      android: "61",
    },
  },
  ExportDefaultDeclaration: {
    message: "Using ExportDefaultDeclaration is not allowed",
    browsers: {
      chrome: "61",
      firefox: "60",
      edge: "18",
      safari: "10.1",
      opera: "48",
      ios: "10.3",
      android: "61",
    },
  },
  ExportAllDeclaration: {
    message: "Using ExportAllDeclaration is not allowed",
    browsers: {
      chrome: "72",
      firefox: "80",
      edge: "79",
      safari: "14.1",
      opera: "60",
      ios: "14.5",
      android: "72",
    },
  },
};
module.exports = function (usePlugin) {
  return {
    meta: {
      docs: {
        description: "ecma2015 rules",
      },
    },
    create(context) {
      return {
        VariableDeclaration(node) {
          if (node.kind === "let" || node.kind === "const") {
            if (usePlugin("block-scoping")) {
              const { browsers, message } = BrowserMap[node.kind];
              context.report({
                type: node.kind,
                node,
                loc: { start: node.start, end: node.end },
                browsers,
                message,
              });
            }
          }
        },
        FunctionDeclaration(node) {
          if (node.generator === true) {
            if (usePlugin("regenerator-transform")) {
              const { browsers, message } = BrowserMap["generator"];
              context.report({
                type: "generator",
                node,
                browsers,
                message,
              });
            }
          }
        },
        ForOfStatement(node) {
          if (node.type === "ForOfStatement") {
            if (usePlugin("for-of")) {
              const { browsers, message } = BrowserMap["for...of"];
              context.report({
                type: "for...of",
                node,
                browsers,
                message,
              });
            }
          }
        },
        // class 中 Super 的使用
        Super(node, path) {
          if (node.type === "Super") {
            if (
              (path.parent.type === "CallExpression" ||
                path.parent.type === "MemberExpression") &&
              usePlugin("classes")
            ) {
              const { browsers, message } = BrowserMap["Super"];
              context.report({
                type: "Super",
                node,
                browsers,
                message,
              });
            }
          }
        },
        // 解构赋值
        SpreadElement(node, path) {
          const parentType = path.parent.type;
          if (
            (parentType === "ArrayExpression" ||
              parentType === "CallExpression" ||
              parentType === "NewExpression") &&
            usePlugin("spread")
          ) {
            const { browsers, message } = BrowserMap["SpreadElement"];
            context.report({
              type: "SpreadElement",
              node,
              browsers,
              message,
            });
          }
        },
        // 箭头函数
        ArrowFunctionExpression(node) {
          if (usePlugin("arrow-functions")) {
            const { browsers, message } = BrowserMap["ArrowFunction"];
            context.report({
              type: "ArrowFunction",
              node,
              browsers,
              message,
            });
          }
        },
        // yield 表达式
        YieldExpression(node) {
          if (usePlugin("async-generator-functions")) {
            const { browsers, message } = BrowserMap["YieldExpression"];
            context.report({
              type: "YieldExpression",
              node,
              browsers,
              message,
            });
          }
        },
        // 模版文字
        TemplateLiteral(node) {
          if (usePlugin("template-literals")) {
            const { browsers, message } = BrowserMap["TemplateLiteral"];
            context.report({
              type: "TemplateLiteral",
              node,
              browsers,
              message,
            });
          }
        },
        // 标签模版语法字符串 flag
        TaggedTemplateExpression(node) {
          if (usePlugin("template-literals")) {
            const { browsers, message } = BrowserMap["TaggedTemplateExpression"];
            context.report({
              type: "TaggedTemplateExpression",
              node,
              browsers,
              message,
            });
          }
        },
        // 对象赋值模式
        ObjectPattern(node, path) {
          if (path.parent.kind === "init" && usePlugin("object-rest-spread")) {
            const { browsers, message } = BrowserMap["ObjectPattern"];
            context.report({
              type: "ObjectPattern",
              node,
              browsers,
              message,
            });
          }
        },
        // 数组赋值模式
        ArrayPattern(node, path) {
          if (path.parent.kind === "init" && usePlugin("spread")) {
            const { browsers, message } = BrowserMap["ArrayPattern"];
            context.report({
              type: "ArrayPattern",
              node,
              browsers,
              message,
            });
          }
        },
        // 解构初始化赋值 [a, ...rest] = [10, 20, 30, 40, 50]
        RestElement(node) {
          if (usePlugin("destructuring")) {
            const { browsers, message } = BrowserMap["RestElement"];
            context.report({
              type: "RestElement",
              node,
              browsers,
              message,
            });
          }
        },
        // 表达式初始化赋值 function a(b = 1) {}
        AssignmentPattern(node) {
          if (usePlugin("parameters")) {
            const { browsers, message } = BrowserMap["AssignmentPattern"];
            context.report({
              type: "AssignmentPattern",
              node,
              browsers,
              message,
            });
          }
        },
        // class body 检测
        ClassBody(node) {
          if (usePlugin("classes")) {
            const { browsers, message } = BrowserMap["ClassBody"];
            context.report({
              type: "ClassBody",
              node,
              browsers,
              message,
            });
          }
        },
        // class body method
        MethodDefinition(node) {
          if (node.key.type === "Identifier" && usePlugin("classes")) {
            const { browsers, message } = BrowserMap["MethodDefinition"];
            context.report({
              type: "MethodDefinition",
              node,
              browsers,
              message,
            });
          }
        },
        ClassDeclaration(node) {
          if (usePlugin("classes")) {
            const { browsers, message } = BrowserMap["ClassDeclaration"];
            context.report({
              type: "ClassDeclaration",
              node,
              browsers,
              message,
            });
          }
        },
        ClassExpression(node) {
          if (usePlugin("classes")) {
            const { browsers, message } = BrowserMap["ClassExpression"];
            context.report({
              type: "ClassExpression",
              node,
              browsers,
              message,
            });
          }
        },
        MetaProperty(node) {
          if (usePlugin("new-target")) {
            const { browsers, message } = BrowserMap["MetaProperty(new.target())"];
            context.report({
              type: "MetaProperty(new.target())",
              node,
              browsers,
              message,
            });
          }
        },
        // ---Modules---
        ImportDeclaration(node) {
          if (usePlugin("modules-commonjs")) {
            const { browsers, message } = BrowserMap["ImportDeclaration"];
            context.report({
              type: "ImportDeclaration",
              node,
              browsers,
              message,
            });
          }
        },
        // export {foo, bar}
        ExportNamedDeclaration(node) {
          if (usePlugin("modules-commonjs")) {
            const { browsers, message } = BrowserMap["ExportNamedDeclaration"];
            context.report({
              type: "ExportNamedDeclaration",
              node,
              browsers,
              message,
            });
          }
        },
        // export default function () {}
        ExportDefaultDeclaration(node) {
          if (usePlugin("modules-commonjs")) {
            const { browsers, message } = BrowserMap["ExportDefaultDeclaration"];
            context.report({
              type: "ExportDefaultDeclaration",
              node,
              browsers,
              message,
            });
          }
        },
        // export * from "mod"
        ExportAllDeclaration(node) {
          if (usePlugin("modules-commonjs")) {
            const { browsers, message } = BrowserMap["ExportAllDeclaration"];
            context.report({
              type: "ExportAllDeclaration",
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

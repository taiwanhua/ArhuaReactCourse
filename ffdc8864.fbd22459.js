(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{136:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(1),a=t(6),o=(t(0),t(141)),i={id:"NewFeaturesSnippets",title:"\u64f4\u5145\u529f\u80fd\u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",sidebar_label:"\u64f4\u5145\u529f\u80fd\u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)"},c={id:"NewFeaturesSnippets",title:"\u64f4\u5145\u529f\u80fd\u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",description:"## rest\u53c3\u6578\r",source:"@site/docs\\NewFeaturesSnippets.md",permalink:"/ArhuaReactCourse/docs/NewFeaturesSnippets",sidebar_label:"\u64f4\u5145\u529f\u80fd\u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",sidebar:"someSidebar",previous:{title:"\u89e3\u69cb\u8ce6\u503c\u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",permalink:"/ArhuaReactCourse/docs/DestructuringSnippets"},next:{title:"Class(\u985e) \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",permalink:"/ArhuaReactCourse/docs/ClassSnippets"}},l=[{value:"rest\u53c3\u6578",id:"rest\u53c3\u6578",children:[]},{value:"\u7bad\u982d\u51fd\u6578",id:"\u7bad\u982d\u51fd\u6578",children:[]},{value:"\u9663\u5217\u7684\u64f4\u5c55\u904b\u7b97\u7b26",id:"\u9663\u5217\u7684\u64f4\u5c55\u904b\u7b97\u7b26",children:[]},{value:"find()\u3001findIndex()",id:"find\u3001findindex",children:[]},{value:"flat()\u3001flatMap()",id:"flat\u3001flatmap",children:[]},{value:"\u6a21\u677f\u5b57\u4e32",id:"\u6a21\u677f\u5b57\u4e32",children:[]},{value:"\u7269\u4ef6\u5167\u6210\u54e1\u7c21\u5beb",id:"\u7269\u4ef6\u5167\u6210\u54e1\u7c21\u5beb",children:[]},{value:"\u70ba\u7269\u4ef6\u8a2d\u5b9a\u3001\u53d6\u5f97\u6210\u54e1",id:"\u70ba\u7269\u4ef6\u8a2d\u5b9a\u3001\u53d6\u5f97\u6210\u54e1",children:[]},{value:"\u7269\u4ef6\u7684 this \u8207 super",id:"\u7269\u4ef6\u7684-this-\u8207-super",children:[]},{value:"\u7269\u4ef6\u7684\u64f4\u5c55\u904b\u7b97\u7b26",id:"\u7269\u4ef6\u7684\u64f4\u5c55\u904b\u7b97\u7b26",children:[]},{value:"\u93c8\u5224\u65b7\u904b\u7b97\u7b26",id:"\u93c8\u5224\u65b7\u904b\u7b97\u7b26",children:[]},{value:"Null\u5224\u65b7\u904b\u7b97\u7b26",id:"null\u5224\u65b7\u904b\u7b97\u7b26",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"rest\u53c3\u6578"},"rest\u53c3\u6578"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"rest\u53c3\u6578\uff0c\u5c07\u50b3\u5165\u7684\u53c3\u6578\u653e\u5165\u9663\u5217\u4e2d": {\n    "prefix": "$NewRest0001",\n    "body": [\n        "//rest\u53c3\u6578\uff0c\u5c07\u50b3\u5165\u7684\u53c3\u6578\u653e\u5165\u9663\u5217\u4e2d",\n        "//1.rest\u53c3\u6578\u5fc5\u9808\u662f\u6700\u5f8c\u4e00\u500b\u53c3\u6578\uff0c\u5426\u5247\u6703\u5831\u932f\u3002",\n        "const ${1:\u51fd\u6578\u540d} = (${2:\u53c3\u6578\u540d}...values) => {",\n        "    ${3:console.log(values);}",\n        "}"\n    ],\n    "description": "rest\u53c3\u6578\uff0c\u5c07\u50b3\u5165\u7684\u53c3\u6578\u653e\u5165\u9663\u5217\u4e2d"\n}\n')),Object(o.b)("h2",{id:"\u7bad\u982d\u51fd\u6578"},"\u7bad\u982d\u51fd\u6578"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"\u7bad\u982d\u51fd\u6578": {\n    "prefix": "$NewArrowFunction0001",\n    "body": [\n        "//\u7bad\u982d\u51fd\u6578",\n        "//1.\u76f4\u63a5\u8fd4\u56dereturn \\"=>\\" \u53f3\u65b9\u5167\u5bb9",\n        "//  const f = v => v ;  ",\n        "//  \u7b49\u540c",\n        "//  const f = (v) => (v) ; ",\n        "//2.\u76f4\u63a5\u8fd4\u56de\u7269\u4ef6\u5fc5\u52a0\u4e0a()",\n        "//  const f = (v) => ({ x: v }) ; ",\n        "const ${1:\u7bad\u982d\u51fd\u6578} = (${2:\u53c3\u65781}, ${3:\u53c3\u65782}) => {",\n        "    //\u505a\u4e00\u4e9b\u4e8b\u60c5",\n        "    return ${4:\u56de\u50b3\u503c};",\n        "}"\n    ],\n    "description": "\u7bad\u982d\u51fd\u6578"\n}\n')),Object(o.b)("h2",{id:"\u9663\u5217\u7684\u64f4\u5c55\u904b\u7b97\u7b26"},"\u9663\u5217\u7684\u64f4\u5c55\u904b\u7b97\u7b26"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"\u9663\u5217\u7684\u64f4\u5c55\u904b\u7b97\u7b26(...)": {\n    "prefix": "$NewArraySpread0001",\n    "body": [\n        "//\u9663\u5217\u7684\u64f4\u5c55\u904b\u7b97\u7b26(...)",\n        "//1.\u6703\u5c07\u4e00\u500b\u9663\u5217\u8f49\u70ba\u7528\u9017\u865f\u5206\u9694\u7684\u53c3\u6578\u5e8f\u5217\u3002 \u5982 ...[1,2,3] \u8f49\u70ba 1,2,3 ",\n        "//2.\u53ef\u7528\u5728\u9663\u5217\u8f49\u70ba\u53c3\u6578\u50b3\u5165\u51fd\u5165\uff0cadd(...[1,2,3]])",\n        "//3.\u53ef\u642d\u914d\u8868\u9054\u5f0f",\n        "//  const arr = [",\n        "//      ...( true ? [\'a\', \'b\'] : []),",\n        "//      \'c\'",\n        "//  ];",\n        "//4.(...)\u64f4\u5c55\u9663\u5217\u6642\u70ba\u6dfa\u62f7\u8c9d",\n        "//5.\u53ef\u642d\u914d\u89e3\u69cb\u8ce6\u503c\u4f7f\u7528",\n        "//  const [first, ...rest] = [1, 2, 3, 4, 5];",\n        "//6.\u642d\u914d\u5b57\u4e32\u4f7f\u7528\uff0c\u5982 [...\'hello\']\u3002",\n        "const ${1:\u8b8a\u6578\u540d} = [...${2:\u8981\u64f4\u5c55\u7684\u9663\u5217}];"\n    ],\n    "description": "\u9663\u5217\u7684\u64f4\u5c55\u904b\u7b97\u7b26(...)"\n}\n')),Object(o.b)("h2",{id:"find\u3001findindex"},"find()\u3001findIndex()"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"\u9663\u5217\u7684find()\u51fd\u6578": {\n    "prefix": "$NewArrayFind0001",\n    "body": [\n        // "//\u9663\u5217\u7684find()\u51fd\u6578",\n        // "//1.\u53ef\u63a5\u53d7\u4e09\u500b\u53c3\u6578\uff0c\u4f9d\u6b21\u70ba\u7576\u524d\u7684\u503c\u3001\u7576\u524d\u7684\u4f4d\u7f6e\u548c\u539f\u9663\u5217\uff1b",\n        // "//  \u8fd4\u56de\u7b2c\u4e00\u500b\u7b26\u5408\u689d\u4ef6\u7684\u9663\u5217\u6210\u54e1\u7684\u503c\uff0c\u5982\u679c\u6240\u6709\u6210\u54e1\u90fd\u4e0d\u7b26\u5408\u689d\u4ef6\uff0c\u5247\u8fd4\u56de undefined\u3002",\n        "${1:\u9663\u5217\u540d}.find(function(value, index, arr) {",\n        "    //\u505a\u4e00\u4e9b\u4e8b",\n        "    return ${2:\u56de\u50b3\u503c};",\n        "  })"\n    ],\n    "description": "\u9663\u5217\u7684find()\u51fd\u6578 \\n 1.\u53ef\u63a5\u53d7\u4e09\u500b\u53c3\u6578\uff0c\u4f9d\u6b21\u70ba\u7576\u524d\u7684\u503c\u3001\u7576\u524d\u7684\u4f4d\u7f6e\u548c\u539f\u9663\u5217\uff1b \\n\\t \u8fd4\u56de\u7b2c\u4e00\u500b\u7b26\u5408\u689d\u4ef6\u7684\u9663\u5217\u6210\u54e1\u7684\u503c\uff0c\u5982\u679c\u6240\u6709\u6210\u54e1\u90fd\u4e0d\u7b26\u5408\u689d\u4ef6\uff0c\u5247\u8fd4\u56de undefined\u3002"\n},\n"\u9663\u5217\u7684findIndex()\u51fd\u6578": {\n    "prefix": "$NewArrayFindIndex0001",\n    "body": [\n        // "//\u9663\u5217\u7684findIndex()\u51fd\u6578",\n        // "//1.\u53ef\u63a5\u53d7\u4e09\u500b\u53c3\u6578\uff0c\u4f9d\u6b21\u70ba\u7576\u524d\u7684\u503c\u3001\u7576\u524d\u7684\u4f4d\u7f6e\u548c\u539f\u9663\u5217\uff1b",\n        // "//  \u8fd4\u56de\u7b2c\u4e00\u500b\u7b26\u5408\u689d\u4ef6\u7684\u9663\u5217\u6210\u54e1\u7684\u4f4d\u7f6e\uff0c\u5982\u679c\u6240\u6709\u6210\u54e1\u90fd\u4e0d\u7b26\u5408\u689d\u4ef6\uff0c\u5247\u8fd4\u56de -1\u3002",\n        "${1:\u9663\u5217\u540d}.findIndex(function(value, index, arr) {",\n        "    //\u505a\u4e00\u4e9b\u4e8b",\n        "    return ${2:\u56de\u50b3\u503c};",\n        "  })"\n    ],\n    "description": "\u9663\u5217\u7684findIndex()\u51fd\u6578 \\n 1.\u53ef\u63a5\u53d7\u4e09\u500b\u53c3\u6578\uff0c\u4f9d\u6b21\u70ba\u7576\u524d\u7684\u503c\u3001\u7576\u524d\u7684\u4f4d\u7f6e\u548c\u539f\u9663\u5217\uff1b \\n\\t \u8fd4\u56de\u7b2c\u4e00\u500b\u7b26\u5408\u689d\u4ef6\u7684\u9663\u5217\u6210\u54e1\u7684\u4f4d\u7f6e\uff0c\u5982\u679c\u6240\u6709\u6210\u54e1\u90fd\u4e0d\u7b26\u5408\u689d\u4ef6\uff0c\u5247\u8fd4\u56de -1\u3002"\n}\n')),Object(o.b)("h2",{id:"flat\u3001flatmap"},"flat()\u3001flatMap()"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"\u9663\u5217\u7684flat()\u51fd\u6578": {\n    "prefix": "$NewArrayFlat0001",\n    "body": [\n        // "//\u9663\u5217\u7684flat()\u51fd\u6578",\n        // "\u628a\u9663\u5217\\"\u62c9\u5e73\\"\u6307\u5b9a\u5c64\u6578",\n        "${1:\u9663\u5217\u540d}.flat(${2:\u5e7e\u5c64\u6216Infinity}); "\n    ],\n    "description": "\u9663\u5217\u7684flat()\u51fd\u6578 \\n \u628a\u9663\u5217\\"\u62c9\u5e73\\"\u6307\u5b9a\u5c64\u6578"\n},\n"\u9663\u5217\u7684flatMap()\u51fd\u6578": {\n    "prefix": "$NewArrayFlatMap0001",\n    "body": [\n        // "//\u9663\u5217\u7684flatMap()\u51fd\u6578",\n        // "\u53ea\u628a\u9663\u5217\\"\u62c9\u5e73\\"\u4e00\u5c64\uff0c\u4f46\u80fd\u5c0d\u6bcf\u500b\u6210\u54e1\u57f7\u884c\u4e00\u500b\u51fd\u6578",\n        "${1:\u9663\u5217\u540d}.flatMap((x) => {${2:\u4e00\u4e9b\u4e8b\u60c5}}));"\n    ],\n    "description": "\u9663\u5217\u7684flatMap()\u51fd\u6578 \\n \u53ea\u628a\u9663\u5217\\"\u62c9\u5e73\\"\u4e00\u5c64\uff0c\u4f46\u80fd\u5c0d\u6bcf\u500b\u6210\u54e1\u57f7\u884c\u4e00\u500b\u51fd\u6578"\n}\n')),Object(o.b)("h2",{id:"\u6a21\u677f\u5b57\u4e32"},"\u6a21\u677f\u5b57\u4e32"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'\u6ce8\u610f ! \u8907\u88fd\u6b64\u7a0b\u5f0f\u78bc\u7247\u6bb5\u6642\uff0c\u8acb\u5c07\u4e0b\u9762 "\u53d6\u4ee3\u9019\u88e1" \u53d6\u4ee3\u6210\u5169\u500b\u53cd\u659c\u7dda "',"\\",'\\"')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"\u6a21\u677f\u5b57\u4e32": {\n    "prefix": "$NewStringTemplate0001",\n    "body": [\n        "//\u6a21\u677f\u5b57\u4e32",\n        "//\u5982 : `\u53d6\u4ee3\u9019\u88e1${x} + \u53d6\u4ee3\u9019\u88e1${y * 2} = \u53d6\u4ee3\u9019\u88e1${x + y * 2}`",\n        "`\u53d6\u4ee3\u9019\u88e1${${1:\u8b8a\u6578\u6216\u904b\u7b97\u7b49\u7b49}}`"\n    ],\n    "description": "\u6a21\u677f\u5b57\u4e32"\n}\n')),Object(o.b)("h2",{id:"\u7269\u4ef6\u5167\u6210\u54e1\u7c21\u5beb"},"\u7269\u4ef6\u5167\u6210\u54e1\u7c21\u5beb"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"\u7269\u4ef6\u5167\u6210\u54e1\u7c21\u5beb": {\n    "prefix": "$NewObjectAbbreviation0001",\n    "body": [\n        "//\u7269\u4ef6\u5167\u6210\u54e1\u7c21\u5beb",\n        "// let prop1 = \'\u5b57\u4e32\';",\n        "// const Person = {",\n        "//   name : \\"Arhua\\",",\n        "//   prop1,",\n        "//   hello() { console.log(this.name); }//\u6b64this\u6307\u5411\u7269\u4ef6\u672c\u8eab\uff0c\u6240\u4ee5this.name \u70ba Arhua",\n        "// };"\n    ],\n    "description": "\u7269\u4ef6\u5167\u6210\u54e1\u7c21\u5beb"\n}\n')),Object(o.b)("h2",{id:"\u70ba\u7269\u4ef6\u8a2d\u5b9a\u3001\u53d6\u5f97\u6210\u54e1"},"\u70ba\u7269\u4ef6\u8a2d\u5b9a\u3001\u53d6\u5f97\u6210\u54e1"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"\u70ba\u7269\u4ef6\u8a2d\u5b9a\u3001\u53d6\u5f97\u6210\u54e1": {\n    "prefix": "$NewObjectSetOrGetElement0001",\n    "body": [\n        "//\u70ba\u7269\u4ef6\u8a2d\u5b9a\u3001\u53d6\u5f97\u6210\u54e1",\n        "//1.\u5728\u7269\u4ef6\u5916\u8a2d\u5b9a\u6210\u54e1",\n        "//obj.a = true;",\n        "//obj[\'a\' + \'bc\'] = 123;",\n        "//2.\u5728\u7269\u4ef6\u5167\u8a2d\u5b9a\u6210\u54e1",\n        "//let obj = {",\n        "//    [\'a\' + \'bc\']: 123,",\n        "//    [\'h\' + \'ello\']() {...}",\n        "//};",\n        "//3.\u53d6\u7528\u6210\u54e1",\n        "//obj.foo);",\n        "//obj[\'foo\']);",\n        "//obj.hello());",\n        "//obj[\'hello\']());"\n    ],\n    "description": "\u70ba\u7269\u4ef6\u8a2d\u5b9a\u3001\u53d6\u5f97\u6210\u54e1"\n}\n')),Object(o.b)("h2",{id:"\u7269\u4ef6\u7684-this-\u8207-super"},"\u7269\u4ef6\u7684 this \u8207 super"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"\u7269\u4ef6\u7684 this \u8207 super": {\n    "prefix": "$NewObjectThisAndSuper0001",\n    "body": [\n        "//\u7269\u4ef6\u7684 this \u8207 super",\n        "//1.\u7269\u4ef6\u5167this\u6307\u5411\u51fd\u6578\u6240\u5728\u7684\u7269\u4ef6",\n        "//2.super\uff0c\u5b83\u662f\u6307\u5411\\"\u7269\u4ef6\u7684\u51fd\u6578\u6240\u5728\u7684\u7576\u524d\u7269\u4ef6\\"\u7684\u539f\u578b\u7269\u4ef6 ( proto )",\n        "//3.super\u53ea\u80fd\u7528\u5728\\"\u7269\u4ef6\u7684\u51fd\u6578\\"\u4e4b\u4e2d\uff0c\u5982",\n        "//  const proto = {",\n        "//      foo: \'hello\'",\n        "//  };",\n        "//  const obj = {",\n        "//    foo: \'world\',",\n        "//    [\'find\']() {",\n        "//      console.log(this.foo); //\u6307\u5411 obj.foo : \'world\'",\n        "//      return super.foo; //\u6307\u5411 obj.__proto__ \uff0c(\u53ea\u80fd\u7528\u5728\u9019\u88e1)",\n        "//    }",\n        "//  };",\n        "//  Object.setPrototypeOf(obj, proto);//\u5c07proto\u52a0\u5165\u81f3obj\u7684\u539f\u578b\u7269\u4ef6"\n    ],\n    "description": "\u7269\u4ef6\u7684 this \u8207 super"\n}\n')),Object(o.b)("h2",{id:"\u7269\u4ef6\u7684\u64f4\u5c55\u904b\u7b97\u7b26"},"\u7269\u4ef6\u7684\u64f4\u5c55\u904b\u7b97\u7b26"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"\u7269\u4ef6\u7684\u64f4\u5c55\u904b\u7b97\u7b26(...)": {\n    "prefix": "$NewObjectSpread0001",\n    "body": [\n        "//\u7269\u4ef6\u7684\u64f4\u5c55\u904b\u7b97\u7b26(...)",\n        "//1.\u642d\u914d\u89e3\u69cb\u8ce6\u503c\u4f7f\u7528\uff0c...\u5fc5\u9808\u5728\u6700\u5f8c\u4e00\u500b\u4f4d\u7f6e",\n        "//  let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };",\n        "//2.\u62f7\u8c9d\u6240\u6709\u6210\u54e1\uff0c\u6b64\u70ba\u6dfa\u62f7\u8c9d",\n        "//let z = { a: 3, b: 4 };",\n        "//let n = { f: 200, ...z, u: 100};// ... \u53ef\u4ee5\u653e\u5728\u4efb\u610f\u4f4d\u7f6e",\n        "//3.\u5c07\u9663\u5217\u3001\u5b57\u4e32\u8f49\u70ba\u7269\u4ef6",\n        "//let foo = { ...[\'a\', \'b\', \'c\'] };// {0: \\"a\\", 1: \\"b\\", 2: \\"c\\"}",\n        "//let foo = {...\'hello\'};// {0: \\"h\\", 1: \\"e\\", 2: \\"l\\", 3: \\"l\\", 4: \\"o\\"}"\n    ],\n    "description": "\u7269\u4ef6\u7684\u64f4\u5c55\u904b\u7b97\u7b26(...)"\n}\n')),Object(o.b)("h2",{id:"\u93c8\u5224\u65b7\u904b\u7b97\u7b26"},"\u93c8\u5224\u65b7\u904b\u7b97\u7b26"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"\u93c8\u5224\u65b7\u904b\u7b97\u7b26(?.)": {\n    "prefix": "$NewObjectOptionalChaining0001",\n    "body": [\n        "//\u93c8\u5224\u65b7\u904b\u7b97\u7b26(?.)",\n        "//1.\u93c8\u5224\u65b7\u904b\u7b97\u7b26 \\"?.\\" \u6703\u6aa2\u67e5\u5de6\u5074\u7684\u7269\u4ef6\u662f\u5426\u70banull\u6216undefined\u3002\u82e5\u662f\u7684\uff0c\u5c31\u8fd4\u56deundefined\uff0c\u5426\u5247\u63a5\u7e8c\u904b\u7b97\u53f3\u5074\u7684\u7269\u4ef6\u3002",\n        "//const firstName = (message && message.body && message.body[\'user\']) || \'default\';",\n        "//\u7b49\u540c",\n        "//const firstName = message?.body?.[\'user\'] || \'default\';",\n        "//2.\u82e5\u51fd\u6578\u6216\u7269\u4ef6\u7684\u65b9\u6cd5\u4e0d\u70banull\u6216undefined\uff0c\u8abf\u7528\u76f4\u63a5\u8a72\u51fd\u6578\u6216\u7269\u4ef6\u7684\u65b9\u6cd5",\n        "//  message?.functionName?.(\u50b3\u5165\u7684\u53c3\u6578...)"\n    ],\n    "description": "\u93c8\u5224\u65b7\u904b\u7b97\u7b26(?.)"\n}\n')),Object(o.b)("h2",{id:"null\u5224\u65b7\u904b\u7b97\u7b26"},"Null\u5224\u65b7\u904b\u7b97\u7b26"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"Null\u5224\u65b7\u904b\u7b97\u7b26(??)": {\n    "prefix": "$NewObjectDoubleQuestionMark0001",\n    "body": [\n        "//Null\u5224\u65b7\u904b\u7b97\u7b26(??)",\n        "//1.\u904b\u7b97\u7b26\u5de6\u5074\u7684\u503c\u70banull\u6216undefined\u6642\uff0c\u624d\u6703\u8fd4\u56de\u53f3\u5074\u7684\u503c\u3002",\n        "//  const headerText = response?.headerText ?? \'Hello, world!\';"\n    ],\n    "description": "Null\u5224\u65b7\u904b\u7b97\u7b26(??)"\n}\n')))}p.isMDXComponent=!0},141:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),u=r,f=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return t?a.a.createElement(f,c({ref:n},s,{components:t})):a.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);
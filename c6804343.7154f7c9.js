(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{137:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(1),s=t(6),a=(t(0),t(151)),o={id:"ClassSnippets",title:"Class(\u985e) \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",sidebar_label:"Class(\u985e) \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)"},i={id:"ClassSnippets",title:"Class(\u985e) \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",description:"## Class (\u985e)\r",source:"@site/docs\\ClassSnippets.md",permalink:"/ArhuaReactCourse/docs/ClassSnippets",sidebar_label:"Class(\u985e) \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",sidebar:"someSidebar",previous:{title:"\u64f4\u5145\u529f\u80fd\u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",permalink:"/ArhuaReactCourse/docs/NewFeaturesSnippets"},next:{title:"Promise \u7570\u6b65\u8655\u7406\u65b9\u6848 (Snippets)",permalink:"/ArhuaReactCourse/docs/PromiseSnippets"}},c=[{value:"Class (\u985e)",id:"class-\u985e",children:[]},{value:"Class(\u985e)\u7e7c\u627f (extends)",id:"class\u985e\u7e7c\u627f-extends",children:[]}],p={rightToc:c};function l(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"class-\u985e"},"Class (\u985e)"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"Class (\u985e)": {\n    "prefix": "$Class0001",\n    "body": [\n        "//Class (\u985e)",\n        "//1.Class\u7684\u6578\u64da\u985e\u578b\u662f\u51fd\u6578\uff0cClass\u672c\u8eab\u5c31\u6307\u5411\u69cb\u9020\u51fd\u6578",\n        "//2.constructor\u662fClass\u7684\u69cb\u9020\u51fd\u6578\uff0c\u7576\u4f7f\u7528new\u751f\u6210\u5be6\u4f8b\u7269\u4ef6\u6642\uff0c\u5b83\u6703\u88ab\u6703\u81ea\u52d5\u8abf\u7528\uff0c",\n        "//3.this\u5247\u6307\u5411\u7576\u524d\u5be6\u4f8b\u7269\u4ef6\u3002",\n        "//4.\u5b9a\u7fa9Class\u7684\u51fd\u6578\u7684\u6642\u5019\uff0c\u76f4\u63a5\u628a\u51fd\u6578\u5ba3\u544a\u653e\u9032\u53bb\u4e86\u5c31\u53ef\u4ee5\u4e86\u3002\u5982",\n        "//  toString() {return \'(\' + this.x + \', \' + this.y + \')\';}",\n        "//  \u6216",\n        "//  [\'toString1\']() {return \'(\' + this.x + \', \' + this.y + \')\';}",\n        "//5.Class\u5167\u51fd\u6578\u4e4b\u9593\u4e0d\u9700\u8981\u9017\u865f\u5206\u9694\uff0c\u52a0\u4e86\u6703\u5831\u932f",\n        "//6.\u53d6\u503c\u51fd\u6578\uff08getter\uff09\u548c\u5b58\u503c\u51fd\u6578\uff08setter\uff09\u4f9b\u53d6\u503c\u524d\u3001\u5b58\u503c\u524d\u53ef\u505a\u984d\u5916\u64cd\u4f5c",\n        "//7.\u52a0\u4e0astatic\u95dc\u9375\u5b57\uff0c\u5c31\u8868\u793a\u8a72\u51fd\u6578\u662f\u76f4\u63a5\u901a\u904eclass\u4f86\u8abf\u7528 (\u4e0d\u7528new)",\n        "//8.\u5982\u679c\u8abf\u7528\\"\u975c\u614b\u51fd\u6578\\"\u5176\u5167\u5305\u542bthis\u95dc\u9375\u5b57\uff0c\u9019\u500bthis\u6307\u5411\u985e\u4e0b\u5177static\u95dc\u9375\u5b57\u7684\u7269\u4ef6",\n        "//9.\u975c\u614b\u51fd\u6578\u53ef\u4ee5\u8207\u975e\u975c\u614b\u51fd\u6578\u91cd\u540d",\n        "// class Point {",\n        "//     constructor(x, y) {//\u69cb\u9020\u51fd\u6578",\n        "//         this.x = x;",\n        "//         this.y = y;",\n        "//     }",\n        "//     [\'toString1\']() {",\n        "//         return \'(\' + this.x + \', \' + this.y + \')\';",\n        "//     }",\n        "//     get prop() {//\u53d6\u503c\u51fd\u6578\uff08getter\uff09",\n        "//         return this._prop;",\n        "//     }",\n        "//     set prop(value) {//\u5b58\u503c\u51fd\u6578\uff08setter\uff09",\n        "//         console.log(\'setter: \' + value);",\n        "//         this._prop = value;",\n        "//     }",\n        "//     static staticpropbaz = \'static prop baz\';",\n        "//     static baz() {",\n        "//         console.log(\'static baz\');",\n        "//         console.log(this.staticpropbaz);",\n        "//     }",\n        "// }",\n        "// let p = new Point(1, 2);//\u4f7f\u7528\u7684\u6642\u5019\uff0c\u4e5f\u662f\u76f4\u63a5\u5c0dClass\u4f7f\u7528new",\n        "// console.log(p.toString())//\u8f38\u51fa : (1, 2) \uff0c\u8981\u4f7f\u7528\u4e5f\u662f\u76f4\u63a5\u8abf\u7528\u51fd\u6578",\n        "// p.prop = 1; //\u4f7f\u7528setter \u51fd\u6578 \uff0c\u6703\u5148\u8f38\u51fa:  setter: 1\uff0c\u4e26\u5c07 this._prop\u8ce6\u503c\u70ba 1",\n        "// p.bar();//\u8f38\u51fa : static baz \u8207 static prop baz",\n        "class ${1:\u985e\u540d} {",\n        "    constructor(${2:\u69cb\u9020\u51fd\u6578\u53c3\u6578}) {",\n        "        this.${3:\u5be6\u4f8b\u7269\u4ef6\u53c3\u6578} = ${4:};",\n        "    }",\n        "",\n        "    ${5:static} ${6:\u5be6\u4f8b\u7269\u4ef6\u53c3\u6578} = ${7:}",\n        "",\n        "    ${8:static} [\'${9:\u5be6\u4f8b\u7269\u4ef6\u51fd\u6578}\']() {",\n        "        //\u505a\u4e00\u4e9b\u4e8b\u60c5",\n        "        return ${10:\u5be6\u4f8b\u7269\u4ef6\u51fd\u6578\u56de\u50b3\u503c};",\n        "    }",\n        "    set ${11:\u5b58\u503c\u51fd\u6578}(value) {",\n        "        //\u505a\u4e00\u4e9b\u4e8b\u60c5",\n        "        this._${11:\u5b58\u503c\u51fd\u6578} = value;",\n        "    }",\n        "    get ${11:\u53d6\u503c\u51fd\u6578}() {",\n        "        return this._${11:\u53d6\u503c\u51fd\u6578\u56de\u50b3\u503c};",\n        "    }",\n        "}"\n    ],\n    "description": "Class (\u985e)"\n}\n')),Object(a.b)("h2",{id:"class\u985e\u7e7c\u627f-extends"},"Class(\u985e)\u7e7c\u627f (extends)"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"Class(\u985e)\u7e7c\u627f (extends)": {\n    "prefix": "$ClassExtends0001",\n    "body": [\n        "//Class(\u985e)\u7e7c\u627f (extends)",\n        "//1.\u5b50\u985e\u5fc5\u9808\u5728constructor\u51fd\u6578\u4e2d\u8abf\u7528super\u51fd\u6578\uff0c\u5426\u5247new\u7684\u6642\u5019\u6703\u5831\u932f",\n        "//2.super\u5b83\u5728\u9019\u88e1\u8868\u793a\u7236\u985e\u7684\u69cb\u9020\u51fd\u6578\uff0c\u7528\u4f86\u65b0\u5efa\u7236\u985e\u7684this\u7269\u4ef6",\n        "//3.\u7236\u985e\u7684\u975c\u614b\u51fd\u6578\uff0c\u4e5f\u6703\u88ab\u5b50\u985e\u7e7c\u627f",\n        "class ${1:\u5b50\u985e\u5225\u540d} extends ${2:\u7236\u985e\u5225\u540d} {",\n        "  constructor(${3:\u5b50\u985e\u5225\u5efa\u69cb\u51fd\u6578\u53c3\u6578}) {",\n        "    super(${4:\u7236\u985e\u5225\u5efa\u69cb\u51fd\u6578\u53c3\u6578});",\n        "    //\u505a\u4e00\u4e9b\u4e8b\u60c5",\n        "  }",\n        "  //\u5ba3\u544a\u5b50\u985e\u53c3\u6578\u7b49\u7b49...",\n        "}"\n    ],\n    "description": "Class(\u985e)\u7e7c\u627f (extends)"\n},\n')))}l.isMDXComponent=!0},151:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),s=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=s.a.createContext({}),l=function(e){var n=s.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},u=function(e){var n=l(e.components);return s.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return t?s.a.createElement(f,i({ref:n},p,{components:t})):s.a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
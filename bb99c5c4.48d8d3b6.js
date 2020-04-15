(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(6),a=(n(0),n(154)),c={id:"HooksSnippets",title:"React Hooks \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",sidebar_label:"React Hooks \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)"},s={id:"HooksSnippets",title:"React Hooks \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",description:"## \u4f7f\u7528useState\r",source:"@site/docs\\HooksSnippets.md",permalink:"/ArhuaReactCourse/docs/HooksSnippets",sidebar_label:"React Hooks \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",sidebar:"someSidebar",previous:{title:"PropTypes \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",permalink:"/ArhuaReactCourse/docs/PropTypesSnippets"},next:{title:"\u5176\u4ed6\u7a0b\u5f0f\u78bc\u7247\u6bb5\u6574\u7406 (Snippets)",permalink:"/ArhuaReactCourse/docs/OtherSnippets"}},i=[{value:"\u4f7f\u7528useState",id:"\u4f7f\u7528usestate",children:[]},{value:"\u4f7f\u7528useContext",id:"\u4f7f\u7528usecontext",children:[{value:"\u5275\u5efaContext",id:"\u5275\u5efacontext",children:[]}]}],p={rightToc:i};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u4f7f\u7528usestate"},"\u4f7f\u7528useState"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"\u4f7f\u7528useState": {\n    "prefix": "$useState0001",\n    "body": [\n        "const [${1:state\u540d}, set${1:state\u540d}] = useState(${2:state\u521d\u59cb\u503c});"\n    ],\n    "description": "\u4f7f\u7528useState"\n}\n')),Object(a.b)("h2",{id:"\u4f7f\u7528usecontext"},"\u4f7f\u7528useContext"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"\u4f7f\u7528useContext\u642d\u914duseState": {\n    "prefix": "$useContext0001",\n    "body": [\n        "//\u4f7f\u7528Context\u642d\u914duseState\u5be6\u73fe\u8de8\u7d44\u4ef6\u901a\u8a0a\u6b65\u9a5f :",\n        "//1. \u5275\u5efaContetx \uff0c const Context =createContext(\\"\u521d\u59cb\u503c\\");",\n        "//2. \u4f7f\u7528Context.Provider\u6a19\u7c64\u5305\u88f9\u9700\u8981\u4f7f\u7528Context\u7684\u5b50\u7d44\u4ef6",\n        "//3. \u4ee5useContext\u53d6\u4ee3Context.Consumer\u6a19\u7c64\uff0c\u4e26\u89e3\u69cb\u51faContetx\u5167\u5bb9\u4f9b\u76f4\u63a5\u4f7f\u7528",\n        "",\n        "const [${1:Context\u5167State\u540d}, set${1:Context\u5167State\u540d}] = useContext(${2:\u4f7f\u7528\u7684Context});"\n    ],\n    "description": "\u4f7f\u7528useContext\u642d\u914duseState"\n}\n')),Object(a.b)("h3",{id:"\u5275\u5efacontext"},"\u5275\u5efaContext"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"\u5275\u5efaContext": {\n    "prefix": "$Context0001",\n    "body": [\n        "//\u900f\u904ecreateContext\u5275\u5efaContext",\n        "export const ${1:Context\u540d} = createContext(${2:Context\u521d\u59cb\u503c});"\n    ],\n    "description": "\u5275\u5efaContext"\n}\n')))}u.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,f=l["".concat(c,".").concat(d)]||l[d]||b[d]||a;return n?o.a.createElement(f,s({ref:t},p,{components:n})):o.a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
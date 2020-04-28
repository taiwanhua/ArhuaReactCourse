(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{159:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s({},n,{},e)),r},u=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(r),f=t,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return r?o.a.createElement(d,s({ref:n},p,{components:r})):o.a.createElement(d,s({ref:n},p))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,c=new Array(i);c[0]=f;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:t,c[1]=s;for(var p=2;p<i;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return s})),r.d(n,"default",(function(){return p}));var t=r(1),o=(r(0),r(159));const i={id:"PromiseSnippets",title:"Promise \u7570\u6b65\u8655\u7406\u65b9\u6848 (Snippets)",sidebar_label:"Promise \u7570\u6b65\u8655\u7406\u65b9\u6848 (Snippets)"},c={id:"PromiseSnippets",title:"Promise \u7570\u6b65\u8655\u7406\u65b9\u6848 (Snippets)",description:"## \u5275\u5efaPromise\r",source:"@site/docs\\PromiseSnippets.md",permalink:"/ArhuaReactCourse/docs/PromiseSnippets",sidebar_label:"Promise \u7570\u6b65\u8655\u7406\u65b9\u6848 (Snippets)",sidebar:"someSidebar",previous:{title:"Class(\u985e) \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",permalink:"/ArhuaReactCourse/docs/ClassSnippets"},next:{title:"Fetch \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",permalink:"/ArhuaReactCourse/docs/FetchSnippets"}},s=[{value:"\u5275\u5efaPromise",id:"\u5275\u5efapromise",children:[]}],a={rightToc:s};function p({components:e,...n}){return Object(o.b)("wrapper",Object(t.a)({},a,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u5275\u5efapromise"},"\u5275\u5efaPromise"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'"\u5275\u5efaPromise": {\n    "prefix": "$Promise0001",\n    "body": [\n        "//\u5275\u5efaPromise",\n        "//1.\u4e00\u65e6\u65b0\u5efa\u5b83\u5c31\u6703 \\"\u7acb\u5373\u57f7\u884c\\"",\n        "const ${1:promise\u540d} = new Promise((resolve, reject) => {",\n        "    try {",\n        "        //\u505a\u4e00\u4e9b\u4e8b",\n        "        resolve(${2:\u6210\u529f\u6642\u56de\u50b3\u503c});",\n        "    } catch (Error) {",\n        "        reject(Error);",\n        "    }",\n        "})",\n        "    .then(Result => {",\n        "        ResultJson = Result.clone().json();//Response.clone()",\n        "        //\u505a\u4e00\u4e9b\u4e8b\u60c5",\n        "        console.log(ResultJson)",\n        "        return ResultJson;",\n        "    })",\n        "    .then((PreResult) => {",\n        "        //\u524d\u4e00\u500bthen()\u5167\u7684 return ResultJson \u5c07\u6210\u70ba PreResult",\n        "        //\u505a\u4e00\u4e9b\u4e8b\u60c5",\n        "    })",\n        "    .catch((Error) => {",\n        "        //catch\u51fd\u6578\u662f.then(null, rejection)\u6216.then(undefined, rejection)\u7684\u5225\u540d\uff0c\u7528\u65bc\u6355\u7372\u8655\u7406\u932f\u8aa4\u3002",\n        "        //\u5982\u679c\u524d\u9762\u7684\u7570\u6b65\u64cd\u4f5c\u62cb\u51fa\u932f\u8aa4\uff0c\u72c0\u614b\u5c31\u6703\u8b8a\u70barejected\uff0c\u5c31\u6703\u8abf\u7528catch\u51fd\u6578\u5167\u6307\u5b9a\u7684\u56de\u8abf\u51fd\u6578\uff0c\u8655\u7406\u9019\u500b\u932f\u8aa4\u3002",\n        "        //Promise\u7269\u4ef6\u7684\u932f\u8aa4\uff0c\u6703\u4e00\u76f4\u5411\u5f8c\u50b3\u905e\uff0c\u76f4\u5230\u88ab\u6355\u7372\u70ba\u6b62\u3002",\n        "        console.log(Error)",\n        "    })",\n        "    .finally(() => {",\n        "        //finally()\u7528\u65bc\u6307\u5b9a\u4e0d\u7ba1Promise\u7269\u4ef6\u6700\u5f8c\u72c0\u614b\u5982\u4f55\uff0c\u90fd\u6703\u57f7\u884c\u7684\u64cd\u4f5c\u3002",\n        "        //\u800cfinally()\u7684\u56de\u8abf\u51fd\u6578\u4e0d\u63a5\u53d7\u4efb\u4f55\u53c3\u6578\uff0c\u9019\u4ee3\u8868\u8457\u6c92\u6709\u8fa6\u6cd5\u77e5\u9053\uff0c\u524d\u9762\u7684Promise\u72c0\u614b\u5230\u5e95\u662fresolved\u9084\u662frejected\u3002",\n        "        //\u5373\u662f\u8aaa\uff0cfinally()\u88e1\u9762\u7684\u64cd\u4f5c\uff0c\u61c9\u8a72\u662f\u8207\u72c0\u614b\u7121\u95dc\u7684\uff0c\u4e0d\u4f9d\u8cf4\u65bcPromise\u7684\u57f7\u884c\u7d50\u679c\u3002",\n        "    });"\n    ],\n    "description": "\u5275\u5efaPromise"\n}\n')))}p.isMDXComponent=!0}}]);
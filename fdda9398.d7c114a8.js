(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(1),c=(n(0),n(140));const o={id:"Fetch",title:"Fetch \u767c\u9001\u8acb\u6c42(request)",sidebar_label:"Fetch \u767c\u9001\u8acb\u6c42(request)"},a={id:"Fetch",title:"Fetch \u767c\u9001\u8acb\u6c42(request)",description:"## \u57fa\u672c\u4ecb\u7d39\r",source:"@site/docs\\Fetch.md",permalink:"/ArhuaReactCourse/docs/Fetch",sidebar_label:"Fetch \u767c\u9001\u8acb\u6c42(request)",sidebar:"someSidebar",previous:{title:"Promise (\u7570\u6b65\u8655\u7406\u65b9\u6848)",permalink:"/ArhuaReactCourse/docs/Promise"},next:{title:"async / await (\u7a76\u6975\u7570\u6b65\u8655\u7406\u65b9\u6848)",permalink:"/ArhuaReactCourse/docs/Asyncawait"}},i=[{value:"\u57fa\u672c\u4ecb\u7d39",id:"\u57fa\u672c\u4ecb\u7d39",children:[]},{value:"Fetch\u8acb\u6c42\u7bc4\u4f8b",id:"fetch\u8acb\u6c42\u7bc4\u4f8b",children:[]},{value:"Get \u8acb\u6c42",id:"get-\u8acb\u6c42",children:[]},{value:"POST \u8acb\u6c42",id:"post-\u8acb\u6c42",children:[]},{value:"Fetch \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)\u9023\u7d50",id:"fetch-\u7a0b\u5f0f\u78bc\u7247\u6bb5-snippets\u9023\u7d50",children:[]}],s={rightToc:i};function p({components:e,...t}){return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u57fa\u672c\u4ecb\u7d39"},"\u57fa\u672c\u4ecb\u7d39"),Object(c.b)("p",null,"Fetch API\u63d0\u4f9b\u4e86\u4e00\u500b\u80fd\u7372\u53d6\u5305\u542b\u8de8\u7db2\u8def\u8cc7\u6599\u5728\u7684\u8cc7\u6599\u4ecb\u9762\u3002\u5b83\u6709\u9ede\u50cf\u6211\u5011\u6240\u719f\u6089\u7684 XMLHttpRequest \u53c8\u6216\u8005\u50cf ajax\uff0c\u4f46\u9019\u500b\u65b0\u7684 API \u63d0\u4f9b\u4e86\u66f4\u5f37\u66f4\u5f48\u6027\u7684\u529f\u80fd\u3002\n\u6b64\u5916\uff0c\u56e0\u70baReact\u4ee5\u524d\u5f8c\u7aef\u5206\u96e2\u7684\u65b9\u5f0f\u958b\u767c\uff0c\u524d\u7aef\u9700\u8981\u767c\u8d77\u8acb\u6c42\u4e26\u5f9e\u5f8c\u7aef(Server)\u50b3\u9001\u8cc7\u6599\u56de\u524d\u7aef\uff0c\u518d\u7531\u700f\u89bd\u5668\u66f4\u65b0\u6e32\u67d3\u8cc7\u6599\u81f3\u756b\u9762\uff0c\u6240\u4ee5\u6bcf\u7576\u9700\u8981\u81ea\u5f8c\u7aef(Server)\u66f4\u65b0\u8cc7\u6599\u6642\uff0c\u90fd\u53ef\u80fd\u6703\u4f7f\u7528 Fetch\u3002"),Object(c.b)("p",null,"\u800cfetch() \u51fd\u6578\u88e1\u7b2c\u4e00\u500b\u53c3\u6578\uff0c\u5c31\u662f\u8981\u53d6\u5f97\u8cc7\u6599\u7684\u7db2\u5740\u3002\u8a72\u65b9\u6cd5\u6703\u56de\u50b3\u4e00\u500b resolve \u7684 promise \u56de\u61c9\u3002\u4f60\u4e5f\u80fd\u9078\u64c7\u6027\u5730\u4f7f\u7528\u7b2c\u4e8c\u500b\u7269\u4ef6\u53c3\u6578\u4f86\u8a2d\u7f6e request \u53c3\u6578\u3002"),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/ArhuaReactCourse/img/fetch.png",alt:"\u524d\u5f8c\u7aef\u5206\u96e2"}))),Object(c.b)("h2",{id:"fetch\u8acb\u6c42\u7bc4\u4f8b"},"Fetch\u8acb\u6c42\u7bc4\u4f8b"),Object(c.b)("p",null,'\u4ee5\u4e0b\u5c07\u4ee5\u958b\u6e90\u7684API "',Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://jsonplaceholder.typicode.com/"}),"https://jsonplaceholder.typicode.com/"),'" \u4f5c\u70baFetch\u8acb\u6c42\u7684\u7db2\u5740'),Object(c.b)("h2",{id:"get-\u8acb\u6c42"},"Get \u8acb\u6c42"),Object(c.b)("p",null,"\u4ee5\u4e0b\u900f\u904eGet\u65b9\u6cd5\u767c\u9001\u8acb\u6c42 :"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'fetch(\'https://my-json-server.typicode.com/taiwanhua/demo/posts\',\n    { methods: \'GET\' })\n    .then(response => response.json())\n    .then(json => console.log(json)) //\u8fd4\u56de (3)\xa0[{\u2026}, {\u2026}, {\u2026}]0: {id: 1, title: "Post 1"}1: {id: 2, title: "Post 2"}2: {id: 3, title: "Post 3"}\n\n')),Object(c.b)("h2",{id:"post-\u8acb\u6c42"},"POST \u8acb\u6c42"),Object(c.b)("p",null,"\u4ee5\u4e0b\u900f\u904ePOST\u65b9\u6cd5\u767c\u9001\u8acb\u6c42 :"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"fetch('https://my-json-server.typicode.com/taiwanhua/demo/posts', {\n    method: 'POST',\n    body: JSON.stringify({\n      title: '\u65b0\u589e\u6a19\u984c',\n      body: '\u65b0\u589e\u5167\u6587',\n      userId: 1\n    }),\n    headers: {\n      \"Content-type\": \"application/json; charset=UTF-8\"\n    }\n  })\n  .then(response => response.json())\n  .then(json => console.log(json)) // \u8fd4\u56de {title: \"\u65b0\u589e\u6a19\u984c\", body: \"\u65b0\u589e\u5167\u6587\", userId: 1, id: 4}\n\n")),Object(c.b)("h2",{id:"fetch-\u7a0b\u5f0f\u78bc\u7247\u6bb5-snippets\u9023\u7d50"},Object(c.b)("a",Object(r.a)({parentName:"h2"},{href:"./FetchSnippets"}),"Fetch \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)\u9023\u7d50")))}p.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),l=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=l(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(a,".").concat(d)]||u[d]||b[d]||o;return n?c.a.createElement(h,i({ref:t},p,{components:n})):c.a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
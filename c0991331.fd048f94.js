(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{144:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(1),c=t(6),a=(t(0),t(164)),o={id:"FetchSnippets",title:"Fetch \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",sidebar_label:"Fetch \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)"},i={id:"FetchSnippets",title:"Fetch \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",description:"## Fetch Params\u8655\u7406\r",source:"@site/docs\\FetchSnippets.md",permalink:"/ArhuaReactCourse/docs/FetchSnippets",sidebar_label:"Fetch \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",sidebar:"someSidebar",previous:{title:"Promise \u7570\u6b65\u8655\u7406\u65b9\u6848 (Snippets)",permalink:"/ArhuaReactCourse/docs/PromiseSnippets"},next:{title:"Async \u51fd\u6578\u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",permalink:"/ArhuaReactCourse/docs/AsyncSnippets"}},l=[{value:"Fetch Params\u8655\u7406",id:"fetch-params\u8655\u7406",children:[]},{value:"\u55ae\u7d14\u7684fetch",id:"\u55ae\u7d14\u7684fetch",children:[]},{value:"fetch\u7b2c\u4e8c\u500b\u53c3\u6578",id:"fetch\u7b2c\u4e8c\u500b\u53c3\u6578",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"fetch-params\u8655\u7406"},"Fetch Params\u8655\u7406"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'\u6ce8\u610f ! \u8907\u88fd\u6b64\u7a0b\u5f0f\u78bc\u7247\u6bb5\u6642\uff0c\u8acb\u5c07\u4e0b\u9762 "\u53d6\u4ee3\u9019\u88e1" \u53d6\u4ee3\u6210\u5169\u500b\u53cd\u659c\u7dda "',"\\",'\\"')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"Fetch Params\u8655\u7406": {\n    "prefix": "$fetchParam0001",\n    "body": [\n        "//Fetch Params\u8655\u7406",\n        "//let ${2:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d} = ${1:\u5916\u90e8\u51fd\u6578\u53c3\u6578\u540d} ?? {};//\u5916\u90e8\u51fd\u6578\u82e5\u672a\u8a2d\u7f6e\u9810\u8a2d\u503c\u70ba {}\uff0c\u5247\u9700\u8981\u6b64\u884c",\n        "if (${2:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d}?.Params) {",\n        "    let method = ${2:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d}?.method || \\"GET\\";",\n        "    switch (method) {",\n        "        case \\"GET\\":",\n        "            let count = 0;",\n        "            for (let [key, value] of Object.entries(${2:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d}.Params)) {",\n        "                ${3:fetch\u7b2c\u4e00\u500b\u53c3\u6578\u540d url} = (count == 0) ? `\u53d6\u4ee3\u9019\u88e1${${3:fetch\u7b2c\u4e00\u500b\u53c3\u6578\u540d url}}?\u53d6\u4ee3\u9019\u88e1${key}=\u53d6\u4ee3\u9019\u88e1${value}` : `\u53d6\u4ee3\u9019\u88e1${${3:fetch\u7b2c\u4e00\u500b\u53c3\u6578\u540d url}}&\u53d6\u4ee3\u9019\u88e1${key}=\u53d6\u4ee3\u9019\u88e1${value}`",\n        "                count++;",\n        "            }",\n        "            break;",\n        "        default:",\n        "            let ParamForm = new FormData();",\n        "            for (let [key, value] of Object.entries(${2:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d}.Params)) {",\n        "                ParamForm.append(`\u53d6\u4ee3\u9019\u88e1${key}`, `\u53d6\u4ee3\u9019\u88e1${value}`);",\n        "            }",\n        "            ${2:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d}[\\"body\\"] = ParamForm;",\n        "            break;",\n        "    }",\n        "}"\n    ],\n    "description": "Fetch Params\u8655\u7406"\n}\n')),Object(a.b)("h2",{id:"\u55ae\u7d14\u7684fetch"},"\u55ae\u7d14\u7684fetch"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"\u55ae\u7d14\u7684fetch": {\n    "prefix": "$fetch001",\n    "body": [\n        "//\u55ae\u7d14\u7684fetch",\n        "fetch(${1:Urls_}, ${2:Params_ (\u63a5\u7e8c\u4f7f\u7528fetchSecondParam001)})",\n        "    .then(Result => {",\n        "        const ResultJson = Result.clone().json();//Respone.clone()",\n        "        //\u505a\u4e00\u4e9b\u4e8b\u60c5",\n        "        console.log(ResultJson)",\n        "        return ResultJson;",\n        "    })",\n        "    .then((PreResult) => {",\n        "        //\u524d\u4e00\u500bthen()\u5167\u7684 return ResultJson \u5c07\u6210\u70ba PreResult",\n        "        //\u505a\u4e00\u4e9b\u4e8b\u60c5",\n        "        return PreResult;",\n        "    })",\n        "    .catch((Error) => {",\n        "        //catch\u51fd\u6578\u662f.then(null, rejection)\u6216.then(undefined, rejection)\u7684\u5225\u540d\uff0c\u7528\u65bc\u6355\u7372\u8655\u7406\u932f\u8aa4\u3002",\n        "        //\u5982\u679c\u524d\u9762\u7684\u7570\u6b65\u64cd\u4f5c\u62cb\u51fa\u932f\u8aa4\uff0c\u72c0\u614b\u5c31\u6703\u8b8a\u70barejected\uff0c\u5c31\u6703\u8abf\u7528catch\u51fd\u6578\u5167\u6307\u5b9a\u7684\u56de\u8abf\u51fd\u6578\uff0c\u8655\u7406\u9019\u500b\u932f\u8aa4\u3002",\n        "        //Promise\u7269\u4ef6\u7684\u932f\u8aa4\uff0c\u6703\u4e00\u76f4\u5411\u5f8c\u50b3\u905e\uff0c\u76f4\u5230\u88ab\u6355\u7372\u70ba\u6b62\u3002",\n        "        console.log(Error)",\n        "    })",\n        "    .finally(() => {",\n        "        //finally()\u7528\u65bc\u6307\u5b9a\u4e0d\u7ba1Promise\u7269\u4ef6\u6700\u5f8c\u72c0\u614b\u5982\u4f55\uff0c\u90fd\u6703\u57f7\u884c\u7684\u64cd\u4f5c\u3002",\n        "        //\u800cfinally()\u7684\u56de\u8abf\u51fd\u6578\u4e0d\u63a5\u53d7\u4efb\u4f55\u53c3\u6578\uff0c\u9019\u4ee3\u8868\u8457\u6c92\u6709\u8fa6\u6cd5\u77e5\u9053\uff0c\u524d\u9762\u7684Promise\u72c0\u614b\u5230\u5e95\u662fresolved\u9084\u662frejected\u3002",\n        "        //\u5373\u662f\u8aaa\uff0cfinally()\u88e1\u9762\u7684\u64cd\u4f5c\uff0c\u61c9\u8a72\u662f\u8207\u72c0\u614b\u7121\u95dc\u7684\uff0c\u4e0d\u4f9d\u8cf4\u65bcPromise\u7684\u57f7\u884c\u7d50\u679c\u3002",\n        "    });"\n    ],\n    "description": "\u55ae\u7d14\u7684fetch"\n}\n')),Object(a.b)("h2",{id:"fetch\u7b2c\u4e8c\u500b\u53c3\u6578"},"fetch\u7b2c\u4e8c\u500b\u53c3\u6578"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"fetch\u7b2c\u4e8c\u500b\u53c3\u6578": {\n    "prefix": "$fetchSecondParam001",\n    "body": [\n        "//fetch\u7b2c\u4e8c\u500b\u53c3\u6578",\n        "{",\n        "    // \u9810\u8a2d\u9078\u9805\u4ee5 * \u6a19\u8a18",\n        "    method: \'${1:\u53ef\u9078\u53c3\u6578 *GET\u3001POST\u3001PUT\u3001DELETE\u3001\u7b49\u7b49}\',",\n        "    headers: {",\n        "        \'content-type\': \'application/json\'",\n        "    },",\n        "    body: ${2:body\u53c3\u6578\u7269\u4ef6\uff0c\u8981\u7b26\u5408 header \u5167\u7684 \'Content-Type\' }, ",\n        "    cache: \'${3:\u53ef\u9078\u53c3\u6578 : *default, no-cache, reload, force-cache, only-if-cached}\', ",\n        "    credentials: \'${4:\u53ef\u9078\u53c3\u6578 : include, same-origin, *omit}\', ",\n        "    mode: \'${5:\u53ef\u9078\u53c3\u6578 : no-cors, cors, *same-origin}\', ",\n        "    redirect: \'${6:\u53ef\u9078\u53c3\u6578 : manual, *follow, error}\', ",\n        "    referrer: \'${7:\u53ef\u9078\u53c3\u6578 : *client, no-referrer}\', ",\n        "}"\n    ],\n    "description": "fetch\u7b2c\u4e8c\u500b\u53c3\u6578"\n}\n')))}p.isMDXComponent=!0},164:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),c=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=c.a.createContext({}),p=function(e){var n=c.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},u=function(e){var n=p(e.components);return c.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},h=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=r,d=u["".concat(o,".").concat(h)]||u[h]||f[h]||a;return t?c.a.createElement(d,i({ref:n},s,{components:t})):c.a.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=h;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);
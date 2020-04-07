(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{108:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(1),a=t(6),c=(t(0),t(146)),o={id:"ReactBasicCSS",title:"\u4f7f\u7528\u57fa\u672cCSS\u6a23\u5f0f",sidebar_label:"\u4f7f\u7528\u57fa\u672cCSS\u6a23\u5f0f"},l={id:"ReactBasicCSS",title:"\u4f7f\u7528\u57fa\u672cCSS\u6a23\u5f0f",description:"## JSX\u7684\u884c\u5167\u6a23\u5f0f(Inline style)\r",source:"@site/docs\\ReactBasicCSS.md",permalink:"/ArhuaReactCourse/docs/ReactBasicCSS",sidebar_label:"\u4f7f\u7528\u57fa\u672cCSS\u6a23\u5f0f",sidebar:"someSidebar",previous:{title:"JSX\u8a9e\u6cd5",permalink:"/ArhuaReactCourse/docs/JSX"},next:{title:"\u4f7f\u7528\u4e8b\u4ef6\u3001\u66f4\u591a\u5c6c\u6027\u8207\u50b3\u905e\u5c6c\u6027",permalink:"/ArhuaReactCourse/docs/ReactUseEvents"}},i=[{value:"JSX\u7684\u884c\u5167\u6a23\u5f0f(Inline style)",id:"jsx\u7684\u884c\u5167\u6a23\u5f0finline-style",children:[]},{value:"\u4f7f\u7528\u5916\u90e8\u6a23\u5f0f(External style)",id:"\u4f7f\u7528\u5916\u90e8\u6a23\u5f0fexternal-style",children:[]}],p={rightToc:i};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"jsx\u7684\u884c\u5167\u6a23\u5f0finline-style"},"JSX\u7684\u884c\u5167\u6a23\u5f0f(Inline style)"),Object(c.b)("p",null,"\u60f3\u4f7f\u7528JSX\u7684\u884c\u5167\u6a23\u5f0f\uff0c\u53ea\u9700\u8981\u900f\u904estyle\u5c6c\u6027\u7de8\u5beb\u884c\u5167\u6a23\u5f0f\uff0c\u4e26\u4e14\u5c07CSS\u5c6c\u6027\u4ee5\u7269\u4ef6\u8868\u9054\uff0c\n\u552f\u4e00\u8981\u6ce8\u610f\u51e1\u662f\u9047\u5230\u9023\u5b57\u865f ( - ) \uff0c\u90fd\u8981\u6539\u6210\u5927\u5beb\u5b57\u6bcd(\u99dd\u5cf0\u547d\u540d\u6cd5)\uff0c\u5982font-size \u6539\u70ba fontSize \u3001background-color\u6539\u70babackgroundColor\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'\nimport React from \'react\';\nimport \'./App.css\'\n\nconst App = () => {\n\n  return (\n    <>\n      <p style={{ backgroundColor: "red", fontSize: "36px", color: "green" }}>\u9019\u662f\u6211\u7b2c\u4e00\u500b\u51fd\u6578\u7d44\u4ef6App</p>\n\n    </>\n  )\n}\n\nexport default App;\n\n')),Object(c.b)("h2",{id:"\u4f7f\u7528\u5916\u90e8\u6a23\u5f0fexternal-style"},"\u4f7f\u7528\u5916\u90e8\u6a23\u5f0f(External style)"),Object(c.b)("p",null,"\u4f7f\u7528\u5916\u90e8\u6a23\u5f0f\u7684\u8a71\uff0c\u5728\u7d44\u4ef6\u5167\u53ef\u4ee5import\u5f15\u5165CSS\u6a94\u6848\uff0c\u800cCSS\u6a94\u6848\u5167\u4ee5\u4e00\u822cCSS\u5beb\u6cd5\u5373\u53ef\uff0c\n\u552f\u4e00\u6ce8\u610f\uff0c\u5728\u4f7f\u7528CSS\u7684Class\u7684\u6642\u5019\uff0c\u8a18\u5f97\u8981\u4f7f\u7528ClassName\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nimport React from 'react';\nimport './App.css'  //\u76f4\u63a5\u4ee5import\u5f15\u5165\n\nconst App = () => {\n\n  return (\n    <>\n      <p id=\"myapp\" className={\"myclass myclass2\"}>\u9019\u662f\u6211\u7b2c\u4e00\u500b\u51fd\u6578\u7d44\u4ef6App</p>\n\n    </>\n  )\n}\n\nexport default App;\n\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),"\n#myapp{\n  color:green\n}\n\n.myclass{\n  font-size: 36px;\n  background-color: red;\n  margin-top: 10px;\n}\n\n.myclass2{\n  border: 1px solid black;\n}\n\n")))}s.isMDXComponent=!0},146:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},u=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||c;return t?a.a.createElement(d,l({ref:n},p,{components:t})):a.a.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<c;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{134:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return s})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return u}));var p=r(1),t=r(6),o=(r(0),r(164)),a={id:"FatherToSon",title:"\u7236\u7d44\u4ef6\u5411\u5b50\u7d44\u4ef6\u50b3\u905e\u8cc7\u6599\u8207PropTypes",sidebar_label:"\u7236\u7d44\u4ef6\u5411\u5b50\u7d44\u4ef6\u50b3\u905e\u8cc7\u6599\u8207PropTypes"},s={id:"FatherToSon",title:"\u7236\u7d44\u4ef6\u5411\u5b50\u7d44\u4ef6\u50b3\u905e\u8cc7\u6599\u8207PropTypes",description:"## props\r",source:"@site/docs\\FatherToSon.md",permalink:"/ArhuaReactCourse/docs/FatherToSon",sidebar_label:"\u7236\u7d44\u4ef6\u5411\u5b50\u7d44\u4ef6\u50b3\u905e\u8cc7\u6599\u8207PropTypes",sidebar:"someSidebar",previous:{title:"React Hooks\u7c21\u4ecb",permalink:"/ArhuaReactCourse/docs/Hooks"},next:{title:"state \u72c0\u614b",permalink:"/ArhuaReactCourse/docs/State"}},c=[{value:"props",id:"props",children:[]},{value:"PropTypes",id:"proptypes",children:[]},{value:"PropTypes \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)\u9023\u7d50",id:"proptypes-\u7a0b\u5f0f\u78bc\u7247\u6bb5-snippets\u9023\u7d50",children:[]}],l={rightToc:c};function u(e){var n=e.components,r=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(p.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"props"},"props"),Object(o.b)("p",null,"\u7236\u7d44\u4ef6\u5411\u5b50\u7d44\u4ef6\u50b3\u905e\u8cc7\u6599\u53ef\u4ee5\u900f\u904eJSX\u50b3\u5165\u81ea\u8a02\u5c6c\u6027 ( props )\u5be6\u73fe\uff0c\n\u5047\u8a2d\u6211\u5011\u5728App\u7d44\u4ef6\u7684\u5b50\u7d44\u4ef6Buttonone\u50b3\u5165\u81ea\u8a02\u5c6c\u6027p1\u3001p2\u8207div\u6a19\u7c64\u5982\u4e0b :"),Object(o.b)("pre",null,Object(o.b)("code",Object(p.a)({parentName:"pre"},{className:"language-javascript"}),"const App = () => {\n\n  return (\n    <Buttonone p1={{ b: 2 }} p2={{ c: 3 }}>\n        <div>\u6211\u6703\u5728children\u88e1</div>\n    </Buttonone>\n  )\n}\n")),Object(o.b)("p",null,"\u5247\u5728Buttonone\u7d44\u4ef6\u5167\u53ef\u4ee5\u900f\u904e\u63a5\u6536\u5b57\u7236\u7d44\u4ef6\u50b3\u5165\u7684\u81ea\u8a02\u5c6c\u6027\uff0c\u4e26\u89e3\u69cb\u8ce6\u503c\u7d66props\uff0c\u9019\u5c31\u662f\u7236\u7d44\u4ef6\u5411\u5b50\u7d44\u4ef6\u50b3\u905e\u8cc7\u6599\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(p.a)({parentName:"pre"},{className:"language-javascript"}),"const Buttonone = (props) => {\n    console.log(props);\n\n    return (\n        <button>\u6309\u9215 </button>\n    )\n}\n\n//\u8f38\u51fa : {p1: {\u2026}, p2: {\u2026}, children: Array(1)}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u50b3\u5165\u81ea\u8a02\u5c6c\u6027\u89e3\u69cb\u8ce6\u503c\u81f3props"),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(p.a)({parentName:"pre"},{className:"language-javascript"}),"props = {p1: {\u2026}, p2: {\u2026}, children: Array(1)}\n"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u8acb\u6ce8\u610fApp\u7d44\u4ef6\u5167Buttonone\u6a19\u7c64\u4e4b\u9593\u7684div\u6a19\u7c64\u6703\u88ab\u653e\u5230props \u7684 children\u88e1\uff0c\n\u4f7f\u7528\u6642\u53ea\u9700\u8981\u4f7f\u7528 {props.children} \u5c31\u53ef\u4ee5\u4e86\u3002")),Object(o.b)("p",null,"\u89e3\u69cb\u8ce6\u503c\u66f4\u660e\u986f\u7684\u4f8b\u5b50\uff0c\u82e5\u5c07\u63a5\u6536\u7684\u53c3\u6578props\u6539\u70ba\u7269\u4ef6 {p1 ,p2, ...other} \uff0c\n\u6703\u767c\u73fe\u4e2d\u9593\u4e5f\u662f\u7d93\u904e\u89e3\u69cb\u8ce6\u503c : "),Object(o.b)("pre",null,Object(o.b)("code",Object(p.a)({parentName:"pre"},{className:"language-javascript"}),"const Buttonone = ({p1 ,p2, ...other}) => {\n    console.log(p1);\n    console.log(p2);\n    console.log(other);\n\n    return (\n        <button>\u6309\u9215 </button>\n    )\n}\n\n//\u8f38\u51fap1\u70ba : { b: 2 },\n//\u8f38\u51fap2\u70ba : { c: 3 }\n//\u8f38\u51fapother\u70ba: children: Array(2)\n")),Object(o.b)("h2",{id:"proptypes"},"PropTypes"),Object(o.b)("p",null,"\u7531\u65bcprops\u53ef\u4ee5\u50b3\u5165\u4efb\u610f\u985e\u578b\u4e4b\u8cc7\u6599\uff0c\u6240\u4ee5\u6211\u5011\u6216\u8a31\u6703\u9700\u8981\u6aa2\u67e5props\u7684\u8cc7\u6599\u985e\u578b\uff0c\n\u800cPropTypes\u6b63\u597d\u53ef\u4ee5\u8b93\u66ff\u6211\u5011\u6aa2\u67e5\u81ea\u7236\u7956\u4ef6\u50b3\u5165\u7684props\u985e\u578b\u3002"),Object(o.b)("p",null,"\u4f8b\u5982\u73fe\u5728\u5f9e\u7236\u7d44\u4ef6\u50b3\u5165\u7684\u6709p1\u3001p2\u8207children\uff0c"),Object(o.b)("pre",null,Object(o.b)("code",Object(p.a)({parentName:"pre"},{className:"language-javascript"}),"const App = () => {\n\n  return (\n    <Buttonone p1={{ b: 2 }} p2={{ c: 3 }}>\n        <div>\u6211\u6703\u5728children\u88e1</div>\n    </Buttonone>\n  )\n}\n")),Object(o.b)("p",null,"\u60f3\u91dd\u5c0dButtonone\u7684props\u505a\u6aa2\u67e5\uff0c\n\u5148\u5f15\u5165PropTypes\u5c31\u53ef\u4ee5\u91dd\u5c0d\u7d44\u4ef6\u50b3\u5165\u7684props\u505a\u985e\u578b\u6aa2\u67e5\uff0c\n\u5e0c\u671b\u5b83\u70ba\u5b57\u4e32\u5247\u4f7f\u7528PropTypes.string\u6aa2\u67e5\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(p.a)({parentName:"pre"},{className:"language-javascript"}),"import PropTypes from 'prop-types';\n\nconst Buttonone = (props)) => {\n    return (\n        <button>\u6309\u9215 </button>\n    )\n}\n\nButtonone.propTypes = {\n    p1: PropTypes.string\n}\n\n")),Object(o.b)("p",null,"\u66f4\u591a\u80fd\u4f7f\u7528\u7684\u6aa2\u67e5\uff0c\u6574\u7406\u5982\u4e0b : "),Object(o.b)("pre",null,Object(o.b)("code",Object(p.a)({parentName:"pre"},{className:"language-javascript"}),"\nimport PropTypes from 'prop-types';\n\nMyComponent.propTypes = {\n  //    \u540d\u7a31       |     \u985e\u578b\n  \u60f3\u6aa2\u67e5\u7684props\u540d\u7a31: PropTypes.array,\n  \u60f3\u6aa2\u67e5\u7684props\u540d\u7a31: PropTypes.bool,\n  \u60f3\u6aa2\u67e5\u7684props\u540d\u7a31: PropTypes.func,\n  \u60f3\u6aa2\u67e5\u7684props\u540d\u7a31: PropTypes.number,\n  \u60f3\u6aa2\u67e5\u7684props\u540d\u7a31: PropTypes.object,\n  \u60f3\u6aa2\u67e5\u7684props\u540d\u7a31: PropTypes.string,\n  \u60f3\u6aa2\u67e5\u7684props\u540d\u7a31: PropTypes.symbol,\n  \u60f3\u6aa2\u67e5\u7684props\u540d\u7a31: PropTypes.node,\n  \u60f3\u6aa2\u67e5\u7684props\u540d\u7a31: PropTypes.element,\n  \u60f3\u6aa2\u67e5\u7684props\u540d\u7a31: PropTypes.elementType,\n  \n  // \u6aa2\u67e5\u662f\u5426\u70ba\u9663\u5217\u5167\u5176\u4e2d\u4e00\u7a2e\u985e\u578b\n  \u60f3\u6aa2\u67e5\u7684props\u540d\u7a31: PropTypes.oneOfType([\n    PropTypes.string,\n    PropTypes.number\n  ]),\n\n  // \u6aa2\u67e5\u9663\u5217\u662f\u5426\u70ba\u67d0\u7a2e\u985e\u578b\n  \u60f3\u6aa2\u67e5\u7684props\u540d\u7a31: PropTypes.arrayOf(PropTypes.number),\n\n  // \u6aa2\u67e5\u7269\u4ef6\u5176\u5167 value \u503c\u662f\u5426\u70ba\u67d0\u7a2e\u985e\u578b\n  \u60f3\u6aa2\u67e5\u7684props\u540d\u7a31: PropTypes.objectOf(PropTypes.number),\n\n  // \u6aa2\u67e5\u7269\u4ef6\u5176\u5167 \"\u6307\u5b9a\" value \u503c\u662f\u5426\u70ba\u67d0\u7a2e\u985e\u578b   (color\u3001fontSize\u70ba\u8209\u4f8b\u7684 Key \u540d)\n  \u60f3\u6aa2\u67e5\u7684props\u540d\u7a31: PropTypes.shape({\n    color: PropTypes.string,\n    fontSize: PropTypes.number\n  }),\n\n  // \u6aa2\u67e5\u67d0\u6307\u5b9a\u985e\u578b\u7684props\u662f\u5426\u50b3\u5165\uff0c( isRequired\u8a2d\u5b9a\u5176\u70ba\u5fc5\u50b3 )\n  \u60f3\u6aa2\u67e5\u7684props\u540d\u7a31: PropTypes.func.isRequired,\n\n  // \u6aa2\u67e5\u67d0\u4efb\u610f\u985e\u578b\u7684props\u662f\u5426\u50b3\u5165\uff0c( isRequired\u8a2d\u5b9a\u5176\u70ba\u5fc5\u50b3 )\n  \u60f3\u6aa2\u67e5\u7684props\u540d\u7a31: PropTypes.any.isRequired\n}\n\n")),Object(o.b)("h2",{id:"proptypes-\u7a0b\u5f0f\u78bc\u7247\u6bb5-snippets\u9023\u7d50"},Object(o.b)("a",Object(p.a)({parentName:"h2"},{href:"./PropTypesSnippets"}),"PropTypes \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)\u9023\u7d50")))}u.isMDXComponent=!0},164:function(e,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return d}));var p=r(0),t=r.n(p);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);n&&(p=p.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,p)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,p,t=function(e,n){if(null==e)return{};var r,p,t={},o=Object.keys(e);for(p=0;p<o.length;p++)r=o[p],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(p=0;p<o.length;p++)r=o[p],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=t.a.createContext({}),u=function(e){var n=t.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s({},n,{},e)),r},i=function(e){var n=u(e.components);return t.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},y=Object(p.forwardRef)((function(e,n){var r=e.components,p=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),i=u(r),y=p,d=i["".concat(a,".").concat(y)]||i[y]||b[y]||o;return r?t.a.createElement(d,s({ref:n},l,{components:r})):t.a.createElement(d,s({ref:n},l))}));function d(e,n){var r=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=y;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:p,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return t.a.createElement.apply(null,a)}return t.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);
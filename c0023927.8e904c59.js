(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{126:function(t,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return a})),e.d(n,"metadata",(function(){return c})),e.d(n,"rightToc",(function(){return l})),e.d(n,"default",(function(){return p}));var r=e(1),o=e(6),s=(e(0),e(141)),a={id:"Class",title:"Class (\u985e)",sidebar_label:"Class (\u985e)"},c={id:"Class",title:"Class (\u985e)",description:"## Class(\u985e)\u4ecb\u7d39\u8207\u57fa\u672c\u5beb\u6cd5\r",source:"@site/docs\\Class.md",permalink:"/ArhuaReactCourse/docs/Class",sidebar_label:"Class (\u985e)",sidebar:"someSidebar",previous:{title:"\u64f4\u5145\u529f\u80fd(New Features)",permalink:"/ArhuaReactCourse/docs/NewFeatures"},next:{title:"Promise (\u7570\u6b65\u8655\u7406\u65b9\u6848)",permalink:"/ArhuaReactCourse/docs/Promise"}},l=[{value:"Class(\u985e)\u4ecb\u7d39\u8207\u57fa\u672c\u5beb\u6cd5",id:"class\u985e\u4ecb\u7d39\u8207\u57fa\u672c\u5beb\u6cd5",children:[]},{value:"\u53d6\u503c\u51fd\u6578\uff08getter\uff09\u548c\u5b58\u503c\u51fd\u6578\uff08setter\uff09",id:"\u53d6\u503c\u51fd\u6578\uff08getter\uff09\u548c\u5b58\u503c\u51fd\u6578\uff08setter\uff09",children:[]},{value:"\u975c\u614b(static) \u51fd\u6578\u3001\u5c6c\u6027",id:"\u975c\u614bstatic-\u51fd\u6578\u3001\u5c6c\u6027",children:[]},{value:"Class(\u985e)\u7e7c\u627f",id:"class\u985e\u7e7c\u627f",children:[]},{value:"Class(\u985e) \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)\u9023\u7d50",id:"class\u985e-\u7a0b\u5f0f\u78bc\u7247\u6bb5-snippets\u9023\u7d50",children:[]}],i={rightToc:l};function p(t){var n=t.components,e=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(r.a)({},i,e,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"class\u985e\u4ecb\u7d39\u8207\u57fa\u672c\u5beb\u6cd5"},"Class(\u985e)\u4ecb\u7d39\u8207\u57fa\u672c\u5beb\u6cd5"),Object(s.b)("p",null,"JavaScript \u8a9e\u8a00\u4e2d\uff0c\u5728ES6\u4ee5\u524d\u751f\u6210\u5be6\u4f8b\u7269\u4ef6\u662f\u901a\u904e\u69cb\u9020\u51fd\u6578\u3002ES6\u5f15\u5165\u4e86Class\uff08\u985e\uff09\u9019\u500b\u6982\u5ff5\uff0c\u4f5c\u70ba\u7269\u4ef6\u7684\u6a21\u677f\u3002\n\u57fa\u672c\u4e0a\uff0cES6\u7684class\u53ef\u4ee5\u770b\u4f5c\u662f\u4e00\u500b\u8a9e\u6cd5\u7cd6\uff0c\u5b83\u7684\u7d55\u5927\u90e8\u5206\u529f\u80fd\uff0cES5\u90fd\u53ef\u4ee5\u505a\u5230\uff0c\u65b0\u7684class\u5beb\u6cd5\u53ea\u662f\u8b93\u7269\u4ef6\u539f\u578b\u7684\u5beb\u6cd5\u66f4\u52a0\u6e05\u6670\u3001\u66f4\u50cf\u9762\u5411\u7269\u4ef6\u5c0e\u5411\u7684\u8a9e\u6cd5\u800c\u5df2\u3002\n\u4e0b\u9762\u8207ES6\u4ee5\u524d\u7684\u5beb\u6cd5\u505a\u6bd4\u8f03 :"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"//ES6\u4ee5\u524d\u5beb\u6cd5\nfunction Point(x, y) {\n  this.x = x;\n  this.y = y;\n}\n\nPoint.prototype.toString = function () {\n  return '(' + this.x + ', ' + this.y + ')';\n};\n\nvar p = new Point(1, 2);//\u7279\u5225\u6ce8\u610f\uff0cnew\u4e86\u4e4b\u5f8cPoint\u5167this\u6307\u5411\u5be6\u4f8b\u7269\u4ef6\u800c\u4e0d\u662fwindos\n\nconsole.log(p.toString())//\u8f38\u51fa : (1, 2)\n\nconsole.log(typeof Point) //\u8f38\u51fa : \"function\"\nconsole.log(Point === Point.prototype.constructor) //\u8f38\u51fa : true\n")),Object(s.b)("p",null,"\u7b49\u540c"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"//ES6 Class\u5beb\u6cd5\nclass Point {  \n  constructor(x, y) {//\u69cb\u9020\u51fd\u6578\n    this.x = x;\n    this.y = y;\n  }\n\n  toString() {\n    return '(' + this.x + ', ' + this.y + ')';\n  }\n\n  ['toString1']() {\n    return '(' + this.x + ', ' + this.y + ')';\n  }\n}\n\nlet p = new Point(1, 2);//\u4f7f\u7528\u7684\u6642\u5019\uff0c\u4e5f\u662f\u76f4\u63a5\u5c0dClass\u4f7f\u7528new\n\nconsole.log(p.toString())//\u8f38\u51fa : (1, 2) \uff0c\u8981\u4f7f\u7528\u4e5f\u662f\u76f4\u63a5\u8abf\u7528\u51fd\u6578\nconsole.log(p['toString1']())//\u8f38\u51fa : (1, 2) \uff0c\u4ea6\u53ef\u4ee5['toString1']\u8abf\u7528\u51fd\u6578\u8207\u547d\u540d\n\n//Class\u7684\u6578\u64da\u985e\u578b\u5c31\u662f\u51fd\u6578\uff0cClass\u672c\u8eab\u5c31\u6307\u5411\u69cb\u9020\u51fd\u6578\u3002\nconsole.log(typeof Point) //\u8f38\u51fa : \"function\"\nconsole.log(Point === Point.prototype.constructor) //\u8f38\u51fa : true\n")),Object(s.b)("p",null,'\u4e0a\u9762Class\u5beb\u6cd5\u5b9a\u7fa9\u4e86\u4e00\u500b"Class"\uff0c\u53ef\u4ee5\u770b\u5230\u88e1\u9762\u6709\u4e00\u500bconstructor\u51fd\u6578\uff0c\u5b83\u662fClass\u7684\u69cb\u9020\u51fd\u6578\uff0c\u7576\u4f7f\u7528new\u751f\u6210\u5be6\u4f8b\u7269\u4ef6\u6642\uff0cconstructor\u51fd\u6578\u6703\u81ea\u52d5\u8abf\u7528\uff0c\u800cthis\u5247\u6307\u5411\u7576\u524d\u5be6\u4f8b\u7269\u4ef6\u3002\u6240\u4ee5\u5b8c\u5168\u53ef\u4ee5\u770b\u4f5c\u662f\u53e6\u4e00\u7a2e\u5beb\u6cd5\u3002'),Object(s.b)("p",null,"\u6ce8\u610f\uff0c\u5b9a\u7fa9Class\u7684\u51fd\u6578\u7684\u6642\u5019\uff0c\u524d\u9762\u4e0d\u9700\u8981\u52a0\u4e0afunction\u9019\u500b\u95dc\u9375\u5b57\uff0c\u76f4\u63a5\u628a\u51fd\u6578\u5ba3\u544a\u653e\u9032\u53bb\u4e86\u5c31\u53ef\u4ee5\u4e86\u3002\u53e6\u5916\uff0c\u4e0a\u9762Point Class\u9664\u4e86\u69cb\u9020\u51fd\u6578(constructor)\uff0c\u9084\u5b9a\u7fa9\u4e86\u4e00\u500btoString\u51fd\u6578\u3002\u800c\u51fd\u6578\u4e4b\u9593\u4e0d\u9700\u8981\u9017\u865f\u5206\u9694\uff0c\u52a0\u4e86\u6703\u5831\u932f\u3002"),Object(s.b)("h2",{id:"\u53d6\u503c\u51fd\u6578\uff08getter\uff09\u548c\u5b58\u503c\u51fd\u6578\uff08setter\uff09"},"\u53d6\u503c\u51fd\u6578\uff08getter\uff09\u548c\u5b58\u503c\u51fd\u6578\uff08setter\uff09"),Object(s.b)("p",null,"\u5728Class\u5167\u4ea6\u958b\u653e\u53d6\u503c\u51fd\u6578\uff08getter\uff09\u548c\u5b58\u503c\u51fd\u6578\uff08setter\uff09\u4f9b\u53d6\u503c\u524d\u3001\u5b58\u503c\u524d\u53ef\u505a\u984d\u5916\u64cd\u4f5c\u3002\u4ee5\u4e0b\u662f\u4e00\u500b\u4f8b\u5b50\uff0c"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"class MyClass {\n\n  constructor() {\n    //...\n  }\n  get prop() {//\u53d6\u503c\u51fd\u6578\uff08getter\uff09\n    return this._prop;\n  }\n  set prop(value) {//\u5b58\u503c\u51fd\u6578\uff08setter\uff09\n    console.log('setter: '+ value );\n    this._prop = value;\n  }\n}\n\nlet inst = new MyClass();\n\ninst.prop=1; //\u4f7f\u7528setter \u51fd\u6578 \uff0c\u6703\u5148\u8f38\u51fa:  setter: 1\uff0c\u4e26\u5c07 this._prop\u8ce6\u503c\u70ba 1\n\nconsole.log(inst.prop);//\u4f7f\u7528getter \u51fd\u6578 \uff0c\u53d6\u5f97\u8fd4\u56de\u503c this._prop\uff0c\u8f38\u51fa: 1\n")),Object(s.b)("h2",{id:"\u975c\u614bstatic-\u51fd\u6578\u3001\u5c6c\u6027"},"\u975c\u614b(static) \u51fd\u6578\u3001\u5c6c\u6027"),Object(s.b)("p",null,'\u5982\u679c\u5728\u4e00\u500bClass\u4e2d\u7684\u51fd\u6578\u524d\uff0c\u52a0\u4e0astatic\u95dc\u9375\u5b57\uff0c\u5c31\u8868\u793a\u8a72\u51fd\u6578\u662f\u76f4\u63a5\u901a\u904eclass\u4f86\u8abf\u7528\uff0c\u9019\u5c31\u7a31\u70ba"\u975c\u614b\u51fd\u6578"\u3002\u4e0b\u9762\u5c55\u793a\u8abf\u7528"\u975c\u614b\u51fd\u6578"\u7684\u4f8b\u5b50\u3002(\u975c\u614b\u5c6c\u6027\u4ea6\u7136)'),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"class Foo {\n  static classMethod() {//\u975c\u614b\u51fd\u6578\n    return 'hello';\n  }\n\n  static i = 0;//\u975c\u614b\u5c6c\u6027\n}\n\nconsole.log(Foo.classMethod()); // \u8f38\u51fa : hello\nconsole.log(Foo.i); // \u8f38\u51fa : 0\n\nvar foo = new Foo();\nfoo.classMethod();// TypeError: foo.classMethod is not a function\uff0c\u56e0\u70ba\u8a72\u51fd\u6578\u662f\u76f4\u63a5\u901a\u904eclass\u4f86\u8abf\u7528\uff0c\u5426\u5247\u6703\u62cb\u51fa\u932f\u8aa4\n")),Object(s.b)("p",null,'\u6ce8\u610f\uff0c\u5982\u4e0b\u4f8b\u5982\u679c\u8abf\u7528"\u975c\u614b\u51fd\u6578"\u5176\u5167\u5305\u542bthis\u95dc\u9375\u5b57\uff0c\u5982this.baz()\uff0c\u9019\u500bthis\u6307\u5411\u985e\u4e0b\u975c\u614b\u51fd\u6578baz()\uff1b\u5c6c\u6027\u4ea6\u7136\u3002\u53e6\u5916\uff0c\u5f9e\u9019\u500b\u4f8b\u5b50\u9084\u53ef\u4ee5\u770b\u51fa\uff0c\u975c\u614b\u51fd\u6578\u53ef\u4ee5\u8207\u975e\u975c\u614b\u51fd\u6578\u91cd\u540d\u3002'),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"class Foo {\n  static bar() {\n    this.baz();//\u6307\u5411static baz(){...}\n  }\n  \n  static staticpropbaz= 'static prop baz';\n\n  static baz() {\n    console.log('static baz');\n    console.log(this.staticpropbaz);\n  }\n  \n  bar(){\n    this.baz();\n  }\n  \n  staticbaz = 'prop baz';\n\n  baz() {\n    console.log('baz');\n    console.log(this.staticbaz);\n  }\n}\n\nFoo.bar();//\u8f38\u51fa : static baz \u8207 static prop baz\n\nlet nFoo =new Foo();\nnFoo.bar();//\u8f38\u51fa :\u3000baz \u8207 prop baz\n")),Object(s.b)("h2",{id:"class\u985e\u7e7c\u627f"},"Class(\u985e)\u7e7c\u627f"),Object(s.b)("p",null,'class\u7684\u7e7c\u627f\u9700\u8981\u4f7f\u7528 "extends" \u95dc\u9375\u5b57\uff0c\u800c\u88ab\u7e7c\u627f\u5c31\u76f8\u5c0d\u6210\u4e86\u7236\u985e\uff1b\u7e7c\u627f\u5c31\u76f8\u5c0d\u6210\u4e86\u5b50\u985e\uff0c\u4f8b\u5982 :'),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"class Point {\n    constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n    .\n    .\n    .\n}\n\nclass ColorPoint extends Point {//\u8a72ColorPoint\u985e\u901a\u904e \"extends\"\uff0c\u7e7c\u627f\u4e86Point\u985e\u7684\u6240\u6709\u5c6c\u6027\u548c\u51fd\u6578\u3002\n    constructor(x, y, color) {\n    super(x, y); // \u4e00\u5b9a\u8981\u8abf\u7528\u7236\u985e\u7684constructor(x, y)!!!\n    this.color = color;\n  }\n\n  toString() {\n    return this.color + ' ' + super.toString(); // \u8abf\u7528\u7236\u985e\u7684toString()\n  }\n}\n\nlet CP = new ColorPoint(1, 2, 3);\n")),Object(s.b)("p",null,'\u4e0a\u9762constructor\u51fd\u6578\u548ctoString\u51fd\u6578\u4e4b\u4e2d\uff0c\u90fd\u51fa\u73fe\u4e86"super"\uff0c\u5b83\u5728\u9019\u88e1\u8868\u793a\u7236\u985e\u7684\u69cb\u9020\u51fd\u6578\uff0c\u7528\u4f86\u65b0\u5efa\u7236\u985e\u7684this\u7269\u4ef6\u3002'),Object(s.b)("p",null,"\u5b50\u985e\u5fc5\u9808\u5728constructor\u51fd\u6578\u4e2d\u8abf\u7528super\u51fd\u6578\uff0c\u5426\u5247new\u7684\u6642\u5019\u6703\u5831\u932f\u3002\u9019\u662f\u56e0\u70ba\u5b50\u985e\u81ea\u5df1\u7684this\u7269\u4ef6\uff0c\u5fc5\u9808\u5148\u901a\u904e\u7236\u985e\u7684\u69cb\u9020\u51fd\u6578\u5b8c\u6210\u5851\u9020\uff0c\u5f97\u5230\u8207\u7236\u985e\u540c\u6a23\u7684\u5c6c\u6027\u548c\u51fd\u6578\uff0c\u7136\u5f8c\u518d\u5c0d\u5176\u9032\u884c\u52a0\u5de5\uff0c\u52a0\u4e0a\u5b50\u985e\u81ea\u5df1\u7684\u5be6\u4f8b\u5c6c\u6027\u548c\u51fd\u6578\u3002\u4e5f\u5c31\u662f\u8aaa\u5982\u679c\u4e0d\u8abf\u7528super\u51fd\u6578\uff0c\u5b50\u985e\u5c31\u5f97\u4e0d\u5230this\u7269\u4ef6\u3002\u4f8b\u5982\u4e0b\u9762\u4f8b\u5b50 :"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"class Point {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\nclass ColorPoint extends Point {\n  constructor(x, y, color) {\n    this.color = color; // ReferenceError\uff0c\u4e0d\u80fd\u5728super\u4e4b\u524d\u4f7f\u7528this\uff0c\u5b50\u985e\u6b64\u6642\u9084\u6c92\u6709this\u7269\u4ef6\n    super(x, y);\n    this.color = color; // \u6b63\u78ba\n  }\n}\n\nlet CP = new ColorPoint(1, 2, 3);\n")),Object(s.b)("p",null,"\u6700\u5f8c\uff0c\u7236\u985e\u7684\u975c\u614b\u51fd\u6578\uff0c\u4e5f\u6703\u88ab\u5b50\u985e\u7e7c\u627f\u3002"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"class A {\n  static hello() {\n    console.log('hello world');\n  }\n}\n\nclass B extends A {\n}\n\nB.hello()  //\u8f38\u51fa :  hello world\n")),Object(s.b)("p",null,"\u4e0a\u9762\u7a0b\u5f0f\u78bc\u4e2d\uff0chello()\u662fA\u985e\u7684\u975c\u614b\u51fd\u6578\uff0cB\u7e7c\u627fA\uff0c\u4e5f\u7e7c\u627f\u4e86A\u7684\u975c\u614b\u51fd\u6578\u3002"),Object(s.b)("h2",{id:"class\u985e-\u7a0b\u5f0f\u78bc\u7247\u6bb5-snippets\u9023\u7d50"},Object(s.b)("a",Object(r.a)({parentName:"h2"},{href:"./ClassSnippets"}),"Class(\u985e) \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)\u9023\u7d50")))}p.isMDXComponent=!0},141:function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return d}));var r=e(0),o=e.n(r);function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){s(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)e=s[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)e=s[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var i=o.a.createContext({}),p=function(t){var n=o.a.useContext(i),e=n;return t&&(e="function"==typeof t?t(n):c({},n,{},t)),e},u=function(t){var n=p(t.components);return o.a.createElement(i.Provider,{value:n},t.children)},b={inlineCode:"code",wrapper:function(t){var n=t.children;return o.a.createElement(o.a.Fragment,{},n)}},h=Object(r.forwardRef)((function(t,n){var e=t.components,r=t.mdxType,s=t.originalType,a=t.parentName,i=l(t,["components","mdxType","originalType","parentName"]),u=p(e),h=r,d=u["".concat(a,".").concat(h)]||u[h]||b[h]||s;return e?o.a.createElement(d,c({ref:n},i,{components:e})):o.a.createElement(d,c({ref:n},i))}));function d(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var s=e.length,a=new Array(s);a[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var i=2;i<s;i++)a[i]=e[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,e)}h.displayName="MDXCreateElement"}}]);
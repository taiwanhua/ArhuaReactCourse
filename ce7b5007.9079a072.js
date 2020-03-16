(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{129:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var l=t(1),a=t(6),o=(t(0),t(139)),c={id:"Destructuring",title:"\u89e3\u69cb\u8ce6\u503c(Destructuring)",sidesays_label:"\u89e3\u69cb\u8ce6\u503c(Destructuring)"},r={id:"Destructuring",title:"\u89e3\u69cb\u8ce6\u503c(Destructuring)",description:"## \u89e3\u69cb\u8ce6\u503c\r",source:"@site/docs\\Destructuring.md",permalink:"/ArhuaReactCourse/docs/Destructuring",sidebar:"someSidebar",previous:{title:"module(\u6a21\u7d44\u5316) import\u3001export",permalink:"/ArhuaReactCourse/docs/module"},next:{title:"\u64f4\u5145\u529f\u80fd(New Features)",permalink:"/ArhuaReactCourse/docs/NewFeatures"}},s=[{value:"\u89e3\u69cb\u8ce6\u503c",id:"\u89e3\u69cb\u8ce6\u503c",children:[{value:"\u9663\u5217\u7684\u89e3\u69cb\u8ce6\u503c",id:"\u9663\u5217\u7684\u89e3\u69cb\u8ce6\u503c",children:[]},{value:"\u7269\u4ef6\u7684\u89e3\u69cb\u8ce6\u503c",id:"\u7269\u4ef6\u7684\u89e3\u69cb\u8ce6\u503c",children:[]},{value:"\u5b57\u4e32\u7684\u89e3\u69cb\u8ce6\u503c",id:"\u5b57\u4e32\u7684\u89e3\u69cb\u8ce6\u503c",children:[]},{value:"\u53c3\u6578\u7684\u89e3\u69cb\u8ce6\u503c",id:"\u53c3\u6578\u7684\u89e3\u69cb\u8ce6\u503c",children:[]}]},{value:"\u89e3\u69cb\u8ce6\u503c\u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)\u9023\u7d50",id:"\u89e3\u69cb\u8ce6\u503c\u7a0b\u5f0f\u78bc\u7247\u6bb5-snippets\u9023\u7d50",children:[]}],b={rightToc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(l.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u89e3\u69cb\u8ce6\u503c"},"\u89e3\u69cb\u8ce6\u503c"),Object(o.b)("p",null,"ES6 \u5141\u8a31\u6309\u7167\u4e00\u5b9a\u6a21\u5f0f\uff0c\u5f9e\u9663\u5217\u548c\u7269\u4ef6\u4e2d\u63d0\u53d6\u503c\uff0c\u5c0d\u8b8a\u6578\u9032\u884c\u8ce6\u503c\uff0c\u9019\u88ab\u7a31\u70ba\u89e3\u69cb\uff08Destructuring\uff09\u3002"),Object(o.b)("h3",{id:"\u9663\u5217\u7684\u89e3\u69cb\u8ce6\u503c"},"\u9663\u5217\u7684\u89e3\u69cb\u8ce6\u503c"),Object(o.b)("p",null,"\u53ea\u8981\u7b49\u865f\u5169\u908a\u6a21\u5f0f\u76f8\u540c\uff0c\u5de6\u908a\u8b8a\u6578\u5c31\u6703\u88ab\u8ce6\u4e0a\u5c0d\u61c9\u7684\u503c\uff0c\u4f7f\u7528\u4f8b\u5b50\u5982\u4e0b:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),'//\u4ee5\u524dES5\u53ea\u80fd\u9019\u6a23\u7d66\u8b8a\u6578\u8ce6\u503c\nlet a = 1;\nlet b = 2;\nlet c = 3;\n\n//\u73fe\u5728\u80fd\u5920\u9019\u6a23\u5beb\uff0c\u6548\u679c\u7b49\u540c\u4e0a\u9762\u4e00\u500b\u500b\u8ce6\u503c\nlet [a, b, c] = [1, 2, 3];\n\n//\u53c8\u5982 :\nlet [name, [[says], baz]] = [1, [[2], 3]];\nconsole.log(name); // 1\nconsole.log(says); // 2\nconsole.log(baz); // 3\n\nlet [ , , third] = ["name", "says", "baz"];\nconsole.log(third); // "baz"\n\nlet [x, , y] = [1, 2, 3];\nconsole.log(x); // 1\nconsole.log(y); // 3\n\nlet [head, ...tail] = [1, 2, 3, 4];\nconsole.log(head); // 1\nconsole.log(tail); // [2, 3, 4]\n\n')),Object(o.b)("p",null,"\u5982\u679c\u89e3\u69cb\u4e0d\u6210\u529f\uff0c\u8b8a\u6578\u7684\u503c\u5c31\u7b49\u65bcundefined"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),"let [x, y, ...z] = ['a'];\nconsole.log(x); // \"a\"\nconsole.log(y); // undefined\nconsole.log(z); // []\n\nlet [name] = [];//name=undefined\nlet [says, name] = [1];//name=undefined\n\n")),Object(o.b)("p",null,"\u4e0d\u5b8c\u5168\u89e3\u69cb\u7684\u60c5\u6cc1(\u5de6\u908a\u5143\u7d20\u5c11\u65bc\u53f3\u908a\u5143\u7d20)\uff0c\u53ef\u4ee5\u6210\u529f:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),"let [x, y] = [1, 2, 3];\nconsole.log(x); // 1\nconsole.log(y); // 2\n\nlet [a, [b], d] = [1, [2, 3], 4];\nconsole.log(a); // 1\nconsole.log(b); // 2\nconsole.log(d); // 4\n\n")),Object(o.b)("p",null,"\u9663\u5217\u89e3\u69cb\u6642\u5982\u679c\u53f3\u908a\u4e26\u975e\u9663\u5217\uff0c\u5c31\u6703\u5831\u932f"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),"let [name] = 1;//\u5831\u932f\nlet [name] = false;//\u5831\u932f\nlet [name] = NaN;//\u5831\u932f\nlet [name] = undefined;//\u5831\u932f\nlet [name] = null;//\u5831\u932f\nlet [name] = {};//\u5831\u932f\n")),Object(o.b)("p",null,"\u89e3\u69cb\u8ce6\u503c\u5141\u8a31\u6307\u5b9a\u9ed8\u8a8d\u503c\uff0c\u800cES6\u5167\u90e8\u4f7f\u7528\u56b4\u683c\u76f8\u7b49\u904b\u7b97\u7b26(===)\uff0c\u5224\u65b7\u4e00\u500b\u4f4d\u7f6e\u662f\u5426\u6709\u503c\u3002\u6240\u4ee5\uff0c\u53ea\u6709\u7576\u4e00\u500b ",Object(o.b)("strong",{parentName:"p"},"\u9663\u5217\u5143\u7d20\u7b49\u65bcundefined\uff0c\u9ed8\u8a8d\u503c\u624d\u6703\u751f\u6548")," \uff0c\u5305\u542bnull\u503c\u4e5f\u4e0d\u6703\u751f\u6548\u56e0\u70banull\u4e26\u4e0d\u56b4\u683c\u7b49\u65bcundefined\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),"let [name = true] = [];\nconsole.log(name); // true\n\nlet [x, y = 'b'] = ['a']; // x='a', y='b'\nlet [x, y = 'b'] = ['a', undefined]; // x='a', y='b'\n\nlet [x = 1] = [undefined];\nconsole.log(x); // 1\n\nlet [x = 1] = [null];\nconsole.log(x); // null\n\n//\u7d66\u51fd\u6578\u4f5c\u70ba\u9ed8\u8a8d\u503c\nfunction f() {\n  console.log('aaa');\n}\n\nlet [x = f()] = [1];//x=1\uff0c\u56e0\u70bax\u80fd\u89e3\u69cb\u8ce6\u503c\u7684\u52301\uff0cf()\u6839\u672c\u4e0d\u6703\u88ab\u8abf\u7528\n\n")),Object(o.b)("p",null,"\u9ed8\u8a8d\u503c\u53ef\u4ee5\u5f15\u7528\u89e3\u69cb\u8ce6\u503c\u7684\u5176\u4ed6\u8b8a\u6578\uff0c\u4f46\u8a72\u8b8a\u6578\u5fc5\u9808\u662f\u5df2\u5b9a\u7fa9\u7684"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),"let [x = 1, y = x] = [];     // x=1; y=1\nlet [x = 1, y = x] = [2];    // x=2; y=2\nlet [x = 1, y = x] = [1, 2]; // x=1; y=2\nlet [x = y, y = 1] = [];     // ReferenceError: y is not defined\n\n")),Object(o.b)("h3",{id:"\u7269\u4ef6\u7684\u89e3\u69cb\u8ce6\u503c"},"\u7269\u4ef6\u7684\u89e3\u69cb\u8ce6\u503c"),Object(o.b)("p",null,"\u89e3\u69cb\u8ce6\u503c\u4e0d\u53ea\u7528\u65bc\u9663\u5217\uff0c\u7269\u4ef6\u4ea6\u7136\uff0c\u4f46\u6709\u4e00\u4e0d\u540c\u9ede\uff0c\u7269\u4ef6\u7684\u89e3\u69cb\u8ce6\u503c\u4e0d\u9700\u8981\u6392\u5217\u9806\u5e8f\u4e00\u81f4\uff0c\u4f46\u9700\u8981Key\u540d\u76f8\u540c\uff1b\u800c\u9663\u5217\u4e0d\u5b58\u5728Key\u540d\uff0c\u6240\u4ee5\u5de6\u53f3\u908a\u6392\u5217\u9806\u5e8f\u9808\u4e00\u81f4\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),"let { name, says } = { name: 'aaa', says: 'bbb' };\nconsole.log(name); // \"aaa\"\nconsole.log(says); // \"bbb\"\n\n\nlet { says, name } = { name: 'aaa', says: 'bbb' };\nconsole.log(name); // \"aaa\"\nconsole.log(says); // \"bbb\"\n\nlet { baz } = { name: 'aaa', says: 'bbb' };\nconsole.log(baz); // \u53f3\u908a\u4e26\u6c92\u6709Key\u540d\u70babaz\uff0c\u6240\u4ee5\u662fundefined\n\n//\u7269\u4ef6Math\u5167\u6709log\u3001sin\u3001cos\uff0c\u900f\u904e\u89e3\u69cb\u8ce6\u503c\u5c31\u80fd\u5920\u76f4\u63a5\u7372\u5f97\u503c\nlet Math = {log: 10, sin: 0.5 ,cos: 0.333};\nlet { log, sin, cos } = Math;\nconsole.log(log);//10\nconsole.log(sin);//0.5\nconsole.log(cos);//0.333\n")),Object(o.b)("p",null,"\u7269\u4ef6\u7684\u89e3\u69cb\u8ce6\u503c\u6709\u4e00\u9ede\u8981\u6ce8\u610f\uff0c\u4e8b\u5be6\u4e0a\u7269\u4ef6\u7684\u89e3\u69cb\u8ce6\u503c\u662f\u4e0b\u9762\u7a0b\u5f0f\u78bc\u7684\u7c21\u5beb\uff0c\u4e5f\u5c31\u662f\u8aaa\u7269\u4ef6\u7684\u89e3\u69cb\u8ce6\u503c\u662f\u5148\u627e\u5230\u540c\u540dKey\u540d\uff0c\u7136\u5f8c\u518d\u8ce6\u7d66\u5c0d\u61c9\u7684\u8b8a\u6578\u503c\uff0c\n\u82e5\u7121\u50cf\u4f8b3\u90a3\u6a23\u6307\u5b9a\u5f8c\u9762\u7684\u8b8a\u6578Key\u540d\uff0c\u5247\u8b8a\u6578\u7684Key\u540d\u9ed8\u8a8d\u8207\u540c\u540dKey\u540d\u76f8\u540c(\u5982\u4f8b2)\u3002\u63db\u53e5\u8a71\u8aaa\uff0c\u9019\u53ef\u4ee5\u7528\u5728\u89e3\u69cb\u5f8c\u60f3\u91cd\u65b0\u547d\u540d\u7684\u60c5\u6cc1\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),"//\u4f8b1:\nlet { name: name, says: says } = { name: 'aaa', says: 'bbb' };//\n\n//1\u7b49\u540c2\n//\u4f8b2:\nlet { name, says } = { name: 'aaa', says: 'bbb' };//(\u89e3\u69cb\u8ce6\u503c\u7c21\u5beb)\n\n//\u4f8b3:\nlet { name: baz } = { name: 'aaa', says: 'bbb' };//\nconsole.log(baz) // \"aaa\"\n\n//\u4f8b4:\nlet obj = { first: 'hello', last: 'world' };\nlet { first: f, last: l } = obj;\nconsole.log(f); // 'hello'\nconsole.log(l); // 'world'\n")),Object(o.b)("p",null,"\u8207\u9663\u5217\u4e00\u6a23\uff0c\u89e3\u69cb\u8ce6\u503c\u4e5f\u53ef\u4ee5\u7528\u65bc\u5d4c\u5957\u7d50\u69cb\u7684\u7269\u4ef6"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),'let obj = {\n  p: [\n    \'Hello\',\n    { y: \'World\' }\n  ]\n};\n\nlet { p: [x, { y }] } = obj;\nconsole.log(x); // "Hello"\nconsole.log(y); // "World"\n\n//\u503c\u5f97\u6ce8\u610f\u7684\u662f\u4e0a\u9762\u7a0b\u5f0f\u78bc\uff0c\u6b64\u6642p\u662f\u5339\u914d\u7684Key\u540d\uff0c\u6240\u4ee5\u4e0d\u6703\u88ab\u8ce6\u503c\uff0c\u82e5p\u4e5f\u8981\u4f5c\u70ba\u8b8a\u6578\u8ce6\u503c\uff0c\u53ef\u4ee5\u5beb\u6210\u4e0b\u9762\u9019\u6a23:\nlet obj = {\n  p: [\n    \'Hello\',\n    { y: \'World\' }\n  ]\n};\n\nlet { p, p: [x, { y }] } = obj;\nconsole.log(x); // "Hello"\nconsole.log(y); // "World"\nconsole.log(p); // ["Hello", {y: "World"}]\n')),Object(o.b)("p",null,"\u4e0b\u9762\u662f\u53e6\u4e00\u4e2a\u4f8b\u5b50\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),"const node = {\n  loc: {\n    start: {\n      line: 1,\n      column: 5\n    }\n  }\n};\n\nlet { loc, loc: { start }, loc: { start: { line }} } = node;\nconsole.log(line) // 1  \u7b49\u540c let { loc, loc: { start }, loc: { start: { line:line }} } = node;(\u7e2e\u5beb)\nconsole.log(loc)  // Object {start: Object} \u7b49\u540c let { loc:loc, loc: { start }, loc: { start: { line:line }} } = node;\nconsole.log(start) // Object {line: 1, column: 5} \u7b49\u540c let { loc, loc: { start:start }, loc: { start: { line }} } = node;\n")),Object(o.b)("p",null,'\u4e0a\u9762\u89e3\u69cb\u8ce6\u503c\u4e2d\uff0cloc\u662f loc : loc \u7e2e\u5beb\u65b9\u5f0f\uff0c\u5148\u627e\u76f8\u540cKey\u518d\u8ce6\u503c\u7d66\u540c\u540d\u8b8a\u6578\u3002\n\u4e0b\u9762\u662f"\u5d4c\u5957\u8ce6\u503c"\u7684\u4f8b\u5b50\uff0c\u662f\u4e00\u975e\u5e38\u5be6\u7528\u7684\u529f\u80fd:'),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),"let obj = {};\nlet arr = [];\n\n({ name: obj.prop, says: arr[0] } = { name: 123, says: true });\n\nconsole.log(obj); // {prop:123}\nconsole.log(arr); // [true]  \n\n//\u5982\u679c\u89e3\u69cb\u6a21\u5f0f\u662f\u5d4c\u5957\u7684\u7269\u4ef6\u800c\u4e14\u5b50\u7269\u4ef6\u7684\u7236\u7269\u4ef6\u4e0d\u5b58\u5728\uff0c\u90a3\u5c07\u6703\u5831\u932f\n//\u5982\u4e0bname\u89e3\u69cb\u6642\u89e3\u69cb\u4e0d\u6210\u529f\u7b49\u65bcundefined\uff0c\u6b64\u6642\u4e0d\u62b1\u932f\uff0c\u518d\u5f80\u4e0b\u53d6\u5b50\u7269\u4ef6\u5c31\u6703\u5831\u932f\uff0c\u56e0\u70ba\u76f8\u7576\u65bc\u53d6undefined\u7684\u5b50\u7269\u4ef6\nlet {name: {says}} = {baz: 'baz'};//\u5831\u932f\n")),Object(o.b)("p",null,"\u9700\u8981\u6ce8\u610f\u4e00\u9ede\uff0c\u89e3\u69cb\u8ce6\u503c\u662f\u53ef\u4ee5\u53d6\u5f97\u5b50\u5c6c\u6027\u7684:"),Object(o.b)("p",null,Object(o.b)("img",Object(l.a)({parentName:"p"},{src:"/ArhuaReactCourse/img/img00001.jpg",alt:"\u6253\u5370\u7d50\u679c"}))),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),"const obj1 = {};\nconst obj2 = { foo: 'bar' };\nObject.setPrototypeOf(obj1, obj2);//\u5982\u4e0a\u5716\u6253\u5370obj1\n\nconst { foo } = obj1;\nconsole.log(foo); // \"bar\"\n//foo \u4e26\u4e0d\u662fodj1\u81ea\u8eab\u7684\u5c6c\u6027\uff0c\u800c\u662f\u7e7c\u627f\u81eaobj2\u7684\u5c6c\u6027\uff0c\u4f46\u662f\u89e3\u69cb\u8ce6\u503c\u53ef\u4ee5\u53d6\u5230\u6b64\u5c6c\u6027\n")),Object(o.b)("p",null,'\u7269\u4ef6\u7684\u89e3\u69cb\u8ce6\u503c\u4e5f\u53ef\u4ee5\u50cf\u9663\u5217\u4e00\u6a23\u6307\u5b9a\u9ed8\u8a8d\u503c\uff0c\u751f\u6548\u689d\u4ef6\u4e00\u6a23\u4e5f\u662f"\u5c6c\u6027\u503c\u56b4\u683c\u7b49\u65bcundefined"'),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),'let {x = 3} = {};\nconsole.log(x); // 3\n\nlet {x, y = 5} = {x: 1};\nconsole.log(x); // 1\nconsole.log(y); // 5\n\nlet {x: y = 3} = {};\nconsole.log(y); // 3\n\nlet {x: y = 3} = {x: 5};\nconsole.log(y); // 5\n\nlet { message: msg = \'Something went wrong\' } = {};\nconsole.log(msg); // "Something went wrong"\n\n//\u751f\u6548\u689d\u4ef6\u662f"\u5c6c\u6027\u503c\u56b4\u683c\u7b49\u65bcundefined"\nlet {x = 3} = {x: undefined};\nconsole.log(x); // 3\n\nlet {x = 3} = {x: null};\nconsole.log(x); // null \uff0c\u56e0\u70banull\u8207undefined\u4e0d\u56b4\u683c\u76f8\u7b49\u6240\u4ee5\u4e0d\u555f\u7528\u9ed8\u8a8d\u503c\n')),Object(o.b)("p",null,"\u4e0b\u9762\u5c07\u5e7e\u7a2e\u9700\u8981\u6ce8\u610f\u7684\u932f\u8aa4\u5217\u51fa\u4f86:"),Object(o.b)("p",null,'\uff081\uff09\u5982\u679c\u8981\u5c07\u4e00\u500b\u5df2\u5b9a\u7fa9\u7684\u8b8a\u6578\u7528\u65bc\u89e3\u69cb\u8ce6\u503c\uff0c\u4e0d\u80fd\u5c07 " { " \u7f6e\u65bc\u884c\u9996\uff0c\u56e0\u70bajavascript\u5f15\u64ce\u6703\u5c07{x}\u89e3\u6790\u6210\u4e00\u4ee3\u78bc\u584a\uff0c\u5f9e\u800c\u767c\u751f\u4ee3\u78bc\u932f\u8aa4\uff0c \u907f\u514djavascript\u89e3\u6790\u70ba\u4ee3\u78bc\u584a\u624d\u80fd\u89e3\u6c7a\u6b64\u554f\u984c\uff0c'),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),"//\u932f\u8aa4\u5beb\u6cd5\nlet x;\n{x} = {x: 1};// SyntaxError: syntax error\n\n//\u6b63\u78ba\u5beb\u6cd5\nlet x;\n({x} = {x: 1});//\u653e\u5728\u4e00\u500b\u5713\u62ec\u865f\u88e1\u53ef\u4ee5\u6b63\u5e38\u57f7\u884c \u4f46\u7121\u6cd5\u5beb\u6210 ({x:c} = {x: 1}) \u6703\u5831\u932f\n")),Object(o.b)("p",null,"\uff082\uff09\u89e3\u69cb\u8ce6\u503c\u5141\u8a31\u7b49\u865f\u5de6\u908a\u4e0d\u653e\u7f6e\u4efb\u4f55\u8b8a\u6578\u540d\uff0c\u56e0\u6b64\u96d6\u7136\u7121\u610f\u7fa9\u4f46\u8a9e\u6cd5\u5408\u6cd5\u53ef\u57f7\u884c\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),"({} = [true, false]);\n({} = 'abc');\n({} = []);\n")),Object(o.b)("p",null,"\uff083\uff09\u7531\u65bc\u9663\u5217\u5176\u5be6\u662f\u7279\u6b8a\u7684\u7269\u4ef6\uff0c\u56e0\u6b64\u53ef\u4ee5\u5c0d\u9663\u5217\u9032\u884c\u7269\u4ef6\u5c6c\u6027\u7684\u89e3\u69cb\u3002\u9019\u5728\u9663\u5217\u8f49\u7269\u4ef6\u6642\u5f88\u597d\u7528\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),"let arr = [1, 2, 3];\nlet {0 : first, [arr.length - 1] : last} = arr;//\u5c6c\u6027\u540d\u8868\u9054\u5f0f\nconsole.log(first); // 1\nconsole.log(last); // 3\n")),Object(o.b)("h3",{id:"\u5b57\u4e32\u7684\u89e3\u69cb\u8ce6\u503c"},"\u5b57\u4e32\u7684\u89e3\u69cb\u8ce6\u503c"),Object(o.b)("p",null,"\u5b57\u4e32\u4e5f\u53ef\u4ee5\u89e3\u69cb\u8ce6\u503c\uff0c\u56e0\u70ba\u5b57\u4e32\u6b64\u6642\u88ab\u8f49\u6210\u4e86\u985e\u4f3c\u9663\u5217\u7684\u7269\u4ef6\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),'const [a, b, c, d, e] = \'hello\';\nconsole.log(a); // "h"\nconsole.log(b); // "e"\nconsole.log(c); // "l"\nconsole.log(d); // "l"\nconsole.log(e); // "o"\n')),Object(o.b)("p",null,"\u800c\u985e\u4f3c\u65bc\u9663\u5217\u7684\u7269\u4ef6\u90fd\u6709\u4e00\u500blength\u5c6c\u6027\uff0c\u56e0\u6b64\u4ea6\u53ef\u4ee5\u5c0d\u6b64\u5c6c\u6027\u9032\u884c\u89e3\u69cb\u8ce6\u503c\u3002(\u5982 Object.setPrototypeOf \u7684\u90a3\u500b\u5c6c\u6027)"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),"let {length : len} = 'hello';//\u5c6c\u6027length\nconsole.log(len); // 5\n")),Object(o.b)("h3",{id:"\u53c3\u6578\u7684\u89e3\u69cb\u8ce6\u503c"},"\u53c3\u6578\u7684\u89e3\u69cb\u8ce6\u503c"),Object(o.b)("p",null,"\u51fd\u6578\u7684\u53c3\u6578\u4e5f\u53ef\u4ee5\u4f7f\u7528\u89e3\u69cb\u8ce6\u503c\uff0c\u5982\u4e0b\u7d66\u51fd\u6578add\u50b3\u5165\u53c3\u6578\uff0c\u7d93\u904e\u89e3\u69cb\u8ce6\u503c\u5f8c\u6210\u4e86\u8b8a\u6578x\u8207y\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),"function add([x, y]){\n  return x + y;\n}\n\nadd([1, 2]); // \u56de\u50b3 : 3\n\n//\u4f7f\u7528map()\u4ea6\u7136\n\n[[1, 2], [3, 4]].map(([a, b]) => a + b);\n// \u5f97\u65b0\u9663\u5217 : [ 3, 7 ]\n\n[1, undefined, 3].map((x = 'yes') => x);\n// \u5f97\u65b0\u9663\u5217 : [ 1, 'yes', 3 ]\n")),Object(o.b)("p",null,"\u7576\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8a8d\u503c\uff0c\u82e5\u50b3\u5165\u503c\u70baundefined\u5c31\u6703\u89f8\u767c\u4f7f\u7528\u51fd\u6578\u53c3\u6578\u7684\u9ed8\u8a8d\u503c\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),"function move({x = 0, y = 0} = {}) {\n  return [x, y];\n}\n\n//\u6ce8\u610f\u4ee5\u4e0bmove({x = 0, y = 0} = {})\u6703\u5148\u6aa2\u67e5\u53c3\u6578\u662f\u5426\u70baundefined\nmove({x: 3, y: 8}); // \u56de\u50b3 : [3, 8]\nmove({x: 3}); // \u56de\u50b3 : [3, 0] \uff0c {x = 0, y = 0} = {x: 3} \u89e3\u69cb\u767c\u73fe y \u70baundefined\uff0c\u89f8\u767cy\u7684\u9ed8\u8a8d\u503c0\nmove({}); // \u56de\u50b3 : [0, 0] \uff0c{x = 0, y = 0} = {} \u89e3\u69cb\u767c\u73fe x , y \u70baundefined\uff0c\u89f8\u767cx\u3001y\u7684\u9ed8\u8a8d\u503c0\nmove(); // \u56de\u50b3 : [0, 0] \uff0cmove(\u7269\u4ef6\u53c3\u6578 = {})\u4e2d\u7269\u4ef6\u53c3\u6578\u50b3\u5165undefined\uff0c\u89f8\u767cmove\u51fd\u6578\u7684\u9ed8\u8a8d\u503c{}\uff0c\u518d\u89e3\u69cb\u89f8\u767cx\u3001y\u7684\u9ed8\u8a8d\u503c0\n\n//\u82e5\u5c07move\u51fd\u6578\u6539\u5beb\u5982\nfunction move({x = 0, y = 0} = {x: 1}) {\n  return [x, y];\n}\n\nmove(); // \u56de\u50b3 : [1, 0]\uff0cmove(\u7269\u4ef6\u53c3\u6578 = {})\u4e2d\u7269\u4ef6\u53c3\u6578\u50b3\u5165undefined\uff0c\u89f8\u767cmove\u51fd\u6578\u7684\u9ed8\u8a8d\u503c{x: 1}\uff0c\u518d\u89e3\u69cbx\u70ba1\u3001\u89f8\u767cy\u7684\u9ed8\u8a8d\u503c0\n\n//\u4e0b\u65b9\u66f4\u9032\u4e00\u6b65\u6539\u5beb\uff0c\u53ef\u4ee5\u66f4\u6e05\u695a\u7684\u7406\u89e3\u5176\u904e\u7a0b\nfunction move({x, y} = { x: 0, y: 0 }) {//\u662f\u70ba\u51fd\u6578move\u7684\u53c3\u6578\u6307\u5b9a\u9ed8\u8a8d\u503c\uff0c\u800c\u4e0d\u662f\u70ba\u8b8a\u6578x\u548cy\u6307\u5b9a\u9ed8\u8a8d\u503c\n  return [x, y];\n}\n\nmove({x: 3, y: 8}); // \u56de\u50b3 : [3, 8]\nmove({x: 3}); // \u56de\u50b3 : [3, undefined]\nmove({}); // \u56de\u50b3 : [undefined, undefined]\nmove(); // \u56de\u50b3 : [0, 0]\n")),Object(o.b)("h2",{id:"\u89e3\u69cb\u8ce6\u503c\u7a0b\u5f0f\u78bc\u7247\u6bb5-snippets\u9023\u7d50"},Object(o.b)("a",Object(l.a)({parentName:"h2"},{href:"./DestructuringSnippets"}),"\u89e3\u69cb\u8ce6\u503c\u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)\u9023\u7d50")))}u.isMDXComponent=!0},139:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return j}));var l=t(0),a=t.n(l);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),u=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):r({},n,{},e)),t},p=function(e){var n=u(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(l.forwardRef)((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=l,j=p["".concat(c,".").concat(d)]||p[d]||i[d]||o;return t?a.a.createElement(j,r({ref:n},b,{components:t})):a.a.createElement(j,r({ref:n},b))}));function j(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,c=new Array(o);c[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,c[1]=r;for(var b=2;b<o;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
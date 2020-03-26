(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{110:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return i})),r.d(n,"default",(function(){return a}));var t=r(1),o=(r(0),r(141));const c={id:"Promise",title:"Promise (\u7570\u6b65\u8655\u7406\u65b9\u6848)",sidebar_label:"Promise (\u7570\u6b65\u8655\u7406\u65b9\u6848)"},l={id:"Promise",title:"Promise (\u7570\u6b65\u8655\u7406\u65b9\u6848)",description:"## \u7570\u6b65\r",source:"@site/docs\\Promise.md",permalink:"/ArhuaReactCourse/docs/Promise",sidebar_label:"Promise (\u7570\u6b65\u8655\u7406\u65b9\u6848)",sidebar:"someSidebar",previous:{title:"Class (\u985e)",permalink:"/ArhuaReactCourse/docs/Class"},next:{title:"Fetch \u767c\u9001\u8acb\u6c42(request)",permalink:"/ArhuaReactCourse/docs/Fetch"}},i=[{value:"\u7570\u6b65",id:"\u7570\u6b65",children:[]},{value:"Promise (\u7570\u6b65\u8655\u7406\u65b9\u6848)\u7c21\u4ecb",id:"promise-\u7570\u6b65\u8655\u7406\u65b9\u6848\u7c21\u4ecb",children:[]},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",children:[{value:"\u5275\u5efaPromise",id:"\u5275\u5efapromise",children:[]},{value:"Promise.prototype.then()",id:"promiseprototypethen",children:[]},{value:"Promise.prototype.catch()",id:"promiseprototypecatch",children:[]},{value:"Promise.prototype.finally()",id:"promiseprototypefinally",children:[]},{value:"Promise.all()",id:"promiseall",children:[]}]},{value:"Promise \u7570\u6b65\u8655\u7406\u65b9\u6848 (Snippets)\u9023\u7d50",id:"promise-\u7570\u6b65\u8655\u7406\u65b9\u6848-snippets\u9023\u7d50",children:[]}],s={rightToc:i};function a({components:e,...n}){return Object(o.b)("wrapper",Object(t.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u7570\u6b65"},"\u7570\u6b65"),Object(o.b)("p",null,'\u6240\u8b02"\u7570\u6b65"\uff0c\u7c21\u55ae\u8aaa\u5c31\u662f\u4e00\u500b\u4efb\u52d9\u4e0d\u662f\u9023\u7e8c\u5b8c\u6210\u7684\uff0c\u53ef\u4ee5\u7406\u89e3\u6210\u4e00\u500b\u4efb\u52d9\u88ab\u5206\u6210\u5169\u6bb5\uff0c\u5148\u57f7\u884c\u7b2c\u4e00\u6bb5\uff0c\u7136\u5f8c\u8f49\u800c\u57f7\u884c\u5176\u4ed6\u4efb\u52d9\uff0c\u7b49\u505a\u597d\u4e86\u6e96\u5099\uff0c\u518d\u56de\u904e\u982d\u57f7\u884c\u7b2c\u4e8c\u6bb5\u3002\n\u6bd4\u5982\uff0c\u6709\u4e00\u500b\u4efb\u52d9\u662f\u8b80\u53d6\u6587\u4ef6\u9032\u884c\u8655\u7406\uff0c\u4efb\u52d9\u7684\u7b2c\u4e00\u6bb5\u662f\u5411\u64cd\u4f5c\u7cfb\u7d71\u767c\u51fa\u8acb\u6c42\uff0c\u8981\u6c42\u8b80\u53d6\u6587\u4ef6\u3002\u7136\u5f8c\uff0c\u7a0b\u5e8f\u57f7\u884c\u5176\u4ed6\u4efb\u52d9\uff0c\u7b49\u5230\u64cd\u4f5c\u7cfb\u7d71\u8fd4\u56de\u6587\u4ef6\uff0c\u518d\u63a5\u8457\u57f7\u884c\u4efb\u52d9\u7684\u7b2c\u4e8c\u6bb5\uff08\u8655\u7406\u6587\u4ef6\uff09\u3002\u9019\u7a2e\u4e0d\u9023\u7e8c\u7684\u57f7\u884c\uff0c\u5c31\u53eb\u505a\u7570\u6b65\u3002\n\u76f8\u53cd\u5730\uff0c\u9023\u7e8c\u7684\u57f7\u884c\u5c31\u53eb\u505a ',Object(o.b)("strong",{parentName:"p"},"\u540c\u6b65"),"\u3002\u7531\u65bc\u662f\u9023\u7e8c\u57f7\u884c\uff0c\u4e0d\u80fd\u63d2\u5165\u5176\u4ed6\u4efb\u52d9\uff0c\u6240\u4ee5\u64cd\u4f5c\u7cfb\u7d71\u5f9e\u786c\u789f\u8b80\u53d6\u6587\u4ef6\u7684\u9019\u6bb5\u6642\u9593\uff0c\u7a0b\u5e8f\u53ea\u80fd\u7b49\u5230\u8b80\u53d6\u5b8c\u7562\u624d\u80fd\u7e7c\u7e8c\u57f7\u884c\u3002"),Object(o.b)("h2",{id:"promise-\u7570\u6b65\u8655\u7406\u65b9\u6848\u7c21\u4ecb"},"Promise (\u7570\u6b65\u8655\u7406\u65b9\u6848)\u7c21\u4ecb"),Object(o.b)("p",null,"\u6240\u8b02Promise\uff0c\u7c21\u55ae\u8aaa\u5c31\u662f\u4e00\u500b\u5bb9\u5668\uff0c\u88e1\u9762\u4fdd\u5b58\u8457\u67d0\u500b\u672a\u4f86\u624d\u6703\u7d50\u675f\u7684\u4e8b\u4ef6\uff08\u901a\u5e38\u662f\u4e00\u500b\u7570\u6b65\u8655\u7406\uff0c\u5982\u53d6\u5f97\u5f8c\u7aef\u6578\u64da\uff09\u7684\u7d50\u679c\u3002"),Object(o.b)("p",null,"Promise\u7269\u4ef6\u6709\u4ee5\u4e0b\u5e7e\u500b\u7279\u9ede\u3002"),Object(o.b)("p",null,"\uff081\uff09\u7269\u4ef6\u7684\u72c0\u614b\u4e0d\u53d7\u5916\u754c\u5f71\u97ff\u3002Promise\u7269\u4ef6\u4ee3\u8868\u4e00\u500b\u7570\u6b65\u8655\u7406\uff0c\u6709\u4e09\u7a2e\u72c0\u614b\uff1apending\uff08\u9032\u884c\u4e2d\uff09\u3001fulfilled\uff08\u5df2\u6210\u529f\uff09\u548crejected\uff08\u5df2\u5931\u6557\uff09\u3002\u53ea\u6709\u7570\u6b65\u8655\u7406\u7684\u7d50\u679c\uff0c\u53ef\u4ee5\u6c7a\u5b9a\u7576\u524d\u662f\u54ea\u4e00\u7a2e\u72c0\u614b\uff0c\u4efb\u4f55\u5176\u4ed6\u64cd\u4f5c\u90fd\u7121\u6cd5\u6539\u8b8a\u9019\u500b\u72c0\u614b\u3002\u9019\u4e5f\u662fPromise\u9019\u500b\u540d\u5b57\u7684\u7531\u4f86\uff0c\u5b83\u7684\u82f1\u8a9e\u610f\u601d\u5c31\u662f\u201c\u627f\u8afe\u201d\uff0c\u8868\u793a\u5176\u4ed6\u624b\u6bb5\u7121\u6cd5\u6539\u8b8a\u3002"),Object(o.b)("p",null,"\uff082\uff09\u4e00\u65e6\u72c0\u614b\u6539\u8b8a\uff0c\u5c31\u4e0d\u6703\u518d\u8b8a\uff0c\u4efb\u4f55\u6642\u5019\u90fd\u53ef\u4ee5\u5f97\u5230\u9019\u500b\u7d50\u679c\u3002Promise\u7269\u4ef6\u7684\u72c0\u614b\u6539\u8b8a\uff0c\u53ea\u6709\u5169\u7a2e\u53ef\u80fd\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"a. \u5f9epending\u8b8a\u70bafulfilled  \uff08\u9032\u884c\u4e2d\uff09--\x3e\uff08\u5df2\u6210\u529f\uff09\nb. \u5f9epending\u8b8a\u70barejected   \uff08\u9032\u884c\u4e2d\uff09--\x3e\uff08\u5df2\u5931\u6557\uff09\n")),Object(o.b)("p",null,"\u53ea\u8981\u8b8a\u6210fulfilled\uff08\u5df2\u6210\u529f\uff09\u6216rejected\uff08\u5df2\u5931\u6557\uff09\uff0c\u72c0\u614b\u5c31\u4e0d\u6703\u518d\u8b8a\u4e86\uff0c\u9019\u6642\u5c31\u7a31\u70ba resolved\uff08\u5df2\u5b9a\u578b\uff09\u3002\u5982\u679c\u6539\u8b8a\u5df2\u7d93\u767c\u751f\u4e86\uff0c\u4f60\u518d\u5c0dPromise\u7269\u4ef6\u6dfb\u52a0\u56de\u8abf\u51fd\u6578\uff0c\u4e5f\u6703\u7acb\u5373\u5f97\u5230\u9019\u500b\u7d50\u679c\u3002\u9019\u8207\u4e8b\u4ef6\uff08Event\uff09\u5b8c\u5168\u4e0d\u540c\uff0c\u4e8b\u4ef6\u7684\u7279\u9ede\u662f\uff0c\u5982\u679c\u4f60\u932f\u904e\u4e86\u5b83\uff0c\u518d\u53bb\u76e3\u807d\uff0c\u662f\u5f97\u4e0d\u5230\u7d50\u679c\u7684\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u5f8c\u9762\u7684resolved\u7d71\u4e00\u6307fulfilled\u72c0\u614b\uff0c\u4e0d\u5305\u542brejected\u72c0\u614b\u3002")),Object(o.b)("p",null,'\uff083\uff09Promise\u7121\u6cd5\u53d6\u6d88\uff0c\u4e00\u65e6\u65b0\u5efa\u5b83\u5c31\u6703 "\u7acb\u5373\u57f7\u884c" \uff0c\u7121\u6cd5\u4e2d\u9014\u53d6\u6d88'),Object(o.b)("p",null,"\uff084\uff09\u5982\u679c\u4e0d\u8a2d\u7f6e\u56de\u8abf\u51fd\u6578\uff0cPromise\u5167\u90e8\u62cb\u51fa\u7684\u932f\u8aa4\uff0c\u4e0d\u6703\u53cd\u61c9\u5230\u5916\u90e8"),Object(o.b)("p",null,"\uff085\uff09\u7576\u8655\u65bcpending\u72c0\u614b\u6642\uff0c\u7121\u6cd5\u5f97\u77e5\u76ee\u524d\u9032\u5c55\u5230\u54ea\u4e00\u500b\u968e\u6bb5\uff08\u525b\u525b\u958b\u59cb\u9084\u662f\u5373\u5c07\u5b8c\u6210\uff09\u3002"),Object(o.b)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),Object(o.b)("h3",{id:"\u5275\u5efapromise"},"\u5275\u5efaPromise"),Object(o.b)("p",null,"\u4e0b\u9762\u793a\u7bc4\u5275\u5efa\u4e86\u4e00\u500bPromise\uff0c"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),'const promise = new Promise(function(resolve, reject) {//Promise\u69cb\u9020\u51fd\u6578\u63a5\u53d7\u4e00\u500b\u51fd\u6578\u4f5c\u70ba\u53c3\u6578\uff0c\u8a72\u51fd\u6578\u7684\u5169\u500b\u53c3\u6578\u56fa\u5b9a\u5206\u5225\u662fresolve\u548creject\u3002\n\n  // ... some code\n  console.log("\u7acb\u5373\u57f7\u884c");//\u8f38\u51fa : \u7acb\u5373\u57f7\u884c \uff0c\u4e00\u65e6\u65b0\u5efa\u5b83\u5c31\u6703 "\u7acb\u5373\u57f7\u884c"\n\n  if (/* \u7570\u6b65\u8655\u7406\u6210\u529f */){\n    resolve("\u900f\u904eresolve\u56de\u50b3\u503c");//\u5c07Promise\u7269\u4ef6\u7684\u72c0\u614b\u5f9e\u201c\u672a\u5b8c\u6210\u201d\u8b8a\u70ba\u201c\u6210\u529f\u201d\uff08\u5373\u5f9epending\u8b8a\u70baresolved\uff09\n  } else {\n    reject("\u900f\u904ereject\u62cb\u51fa\u6b64\u932f\u8aa4\u8a0a\u606f");//\u5c07Promise\u7269\u4ef6\u7684\u72c0\u614b\u5f9e\u201c\u672a\u5b8c\u6210\u201d\u8b8a\u70ba\u201c\u5931\u6557\u201d\uff08\u5373\u5f9epending\u8b8a\u70barejected\uff09\n  }\n});\n\n')),Object(o.b)("p",null,"\u9996\u5148\uff0cPromise\u69cb\u9020\u51fd\u6578\u63a5\u53d7\u4e00\u500b\u51fd\u6578\u4f5c\u70ba\u53c3\u6578\uff0c\u8a72\u51fd\u6578\u7684\u5169\u500b\u53c3\u6578\u56fa\u5b9a\u5206\u5225\u662fresolve\u548creject\u3002\u5b83\u5011\u662f\u5169\u500b\u51fd\u6578\uff0c\u7531JavaScript\u63d0\u4f9b\uff0c\u4e0d\u7528\u81ea\u5df1\u90e8\u7f72\u3002"),Object(o.b)("p",null,"resolve\u51fd\u6578\u7684\u4f5c\u7528\u662f\uff0c\u5c07Promise\u7269\u4ef6\u7684\u72c0\u614b\u5f9e\u201c\u672a\u5b8c\u6210\u201d\u8b8a\u70ba\u201c\u6210\u529f\u201d\uff08\u5373\u5f9epending\u8b8a\u70baresolved\uff09\uff0c\u5728\u7570\u6b65\u8655\u7406\u6210\u529f\u6642\u8abf\u7528\uff0c\u4e26\u5c07\u7570\u6b65\u8655\u7406\u7684\u7d50\u679c\uff0c\u4f5c\u70ba\u53c3\u6578\u50b3\u905e\u51fa\u53bb\uff1b"),Object(o.b)("p",null,"reject\u51fd\u6578\u7684\u4f5c\u7528\u662f\uff0c\u5c07Promise\u7269\u4ef6\u7684\u72c0\u614b\u5f9e\u201c\u672a\u5b8c\u6210\u201d\u8b8a\u70ba\u201c\u5931\u6557\u201d\uff08\u5373\u5f9epending\u8b8a\u70barejected\uff09\uff0c\u5728\u7570\u6b65\u8655\u7406\u5931\u6557\u6642\u8abf\u7528\uff0c\u4e26\u5c07\u7570\u6b65\u8655\u7406\u5831\u51fa\u7684\u932f\u8aa4\uff0c\u4f5c\u70ba\u53c3\u6578\u50b3\u905e\u51fa\u53bb\u3002"),Object(o.b)("h3",{id:"promiseprototypethen"},"Promise.prototype.then()"),Object(o.b)("p",null,"Promise\u5177\u6709then\u51fd\u6578\uff0c\u5176\u5b9a\u7fa9\u5728\u539f\u578b\u7269\u4ef6Promise.prototype\u4e0a\u7684\u3002\u5b83\u4f5c\u70baPromise\u72c0\u614b\u6539\u8b8a\u6642\u7684\u56de\u8abf\u51fd\u6578\u3002then\u51fd\u6578\u7684\u7b2c\u4e00\u500b\u53c3\u6578\u662fresolved\u72c0\u614b\u7684\u56de\u8abf\u51fd\u6578\uff0c\u7b2c\u4e8c\u500b\u53c3\u6578\uff08\u53ef\u9078\uff09\u662frejected\u72c0\u614b\u7684\u56de\u8abf\u51fd\u6578\u3002\u9019\u5169\u500b\u51fd\u6578\u90fd\u63a5\u53d7Promise\u7269\u4ef6\u50b3\u51fa\u7684\u503c\u4f5c\u70ba\u53c3\u6578\u3002\u4e14\u82e5\u72c0\u614b\u4e0d\u70barejected\u5247\u4e0d\u6703\u8abf\u7528\u7b2c\u4e8c\u500b\u53c3\u6578\u7684\u56de\u8abf\u51fd\u6578\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"promise.then(function(value) {// value\u70baPromise\u7269\u4ef6\u50b3\u51fa\u7684\u503c\u4f5c\u70ba\u53c3\u6578\n                              // \u7b2c\u4e00\u500b\u53c3\u6578function(value){...}\u662fresolved\u72c0\u614b\u7684\u56de\u8abf\u51fd\u6578\n}, function(error) {// error\u70baPromise\u7269\u4ef6\u50b3\u51fa\u7684\u503c\u4f5c\u70ba\u53c3\u6578\n                    // \u7b2c\u4e8c\u500b\u53c3\u6578function(error){...}\u662frejected\u72c0\u614b\u7684\u56de\u8abf\u51fd\u6578\n});\n")),Object(o.b)("p",null,"\u4e0b\u9762\u662f\u5169\u500b\u4f7f\u7528 then() \u7684\u7c21\u55ae\u4f8b\u5b50\u3002timeout\u51fd\u6578\u8fd4\u56de\u4e00\u500bPromise\uff0c\u8868\u793a\u4e00\u6bb5\u6642\u9593\u4ee5\u5f8c\u624d\u6703\u767c\u751f\u7684\u7d50\u679c\u3002\u904e\u4e86\u6307\u5b9a\u7684\u6642\u9593\uff08ms\uff09\u4ee5\u5f8c\uff0cPromise\u5be6\u4f8b\u7684\u72c0\u614b\u8b8a\u70baresolved\uff0c\u5c31\u6703\u89f8\u767cthen\u51fd\u6578\u7d81\u5b9a\u7684\u56de\u8abf\u51fd\u6578\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"function timeout(ms) {\n  return new Promise((resolve, reject) => {\n    setTimeout(resolve, ms, 'done');\n  });\n}\n\ntimeout(100).then((value) => {\n  console.log(value);\n});\n")),Object(o.b)("p",null,'\u4e0b\u9762Promise\u65b0\u5efa\u5f8c\u7acb\u5373\u57f7\u884c\uff0c\u6240\u4ee5\u9996\u5148\u8f38\u51fa\u7684\u662fPromise\u3002\u7136\u5f8c\uff0cthen\u51fd\u6578\u6307\u5b9a\u7684\u56de\u8abf\u51fd\u6578\uff0c " \u5c07\u5728\u7576\u524d\u8173\u672c\u6240\u6709\u540c\u6b65\u4efb\u52d9\u57f7\u884c\u5b8c\u624d\u6703\u57f7\u884c "\uff0c\u6240\u4ee5resolved\u6700\u5f8c\u8f38\u51fa\u3002'),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"let promise = new Promise(function(resolve, reject) {\n  console.log('Promise'); // \u65b0\u5efa\u5f8c\u7acb\u5373\u57f7\u884c\n  resolve();\n});\n\npromise.then(function() {\n  console.log('resolved.'); // \u5c07\u5728\u7576\u524d\u8173\u672c\u6240\u6709\u540c\u6b65\u4efb\u52d9\u57f7\u884c\u5b8c\u624d\u6703\u57f7\u884c\n});\n\nconsole.log('Hi!');\nconsole.log('\u540c\u6b65!');\nconsole.log('\u4efb\u52d9!');\n\n// \u4f9d\u5e8f\u8f38\u51fa :\n// Promise\n// Hi!\n// \u540c\u6b65!\n// \u4efb\u52d9!\n// resolved\n")),Object(o.b)("p",null,"then\u51fd\u6578\u8fd4\u56de\u7684\u662f\u4e00\u500b\u65b0\u7684Promise\uff08\u6ce8\u610f\uff0c\u4e0d\u662f\u539f\u4f86\u90a3\u500bPromise\uff09\u3002\u56e0\u6b64\u53ef\u4ee5\u63a1\u7528\u934a\u5f0f\u5beb\u6cd5\uff0c\u5373then\u51fd\u6578\u5f8c\u9762\u518d\u8abf\u7528\u53e6\u4e00\u500bthen\u51fd\u6578\u3002\u5982\u4e0b\u4f9d\u6b21\u6307\u5b9a\u4e86\u5169\u500b\u56de\u8abf\u51fd\u6578\u3002\u7b2c\u4e00\u500b\u56de\u8abf\u51fd\u6578\u5b8c\u6210\u4ee5\u5f8c\uff0c\u6703\u5c07\u8fd4\u56de\u7d50\u679c\u4f5c\u70ba\u53c3\u6578\uff0c\u50b3\u5165\u7b2c\u4e8c\u500b\u56de\u8abf\u51fd\u6578\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),'let promise = new Promise(function(resolve, reject) {\n  resolve({post:"123"});\n});\n\npromise.then((result) => {\n    return result.post;\n}).then((post) => {\n    console.log(post); //\u8f38\u51fa : 123\n});\n')),Object(o.b)("h3",{id:"promiseprototypecatch"},"Promise.prototype.catch()"),Object(o.b)("p",null,"catch\u51fd\u6578\u662f.then(null, rejection)\u6216.then(undefined, rejection)\u7684\u5225\u540d\uff0c\u7528\u65bc\u6355\u7372\u8655\u7406\u932f\u8aa4\u3002"),Object(o.b)("p",null,"\u4e0b\u9762\u5169\u500b\u4f8b\u5b50\u4e2d\uff0c\u7b2c\u4e00\u500b\u4f8b\u5b50\u8aaa\u660e : PromiseFunction\u51fd\u6578\u8fd4\u56de\u4e00\u500bPromise\u7269\u4ef6\uff0c\u5982\u679c\u8a72Promise\u7269\u4ef6\u72c0\u614b\u8b8a\u70baresolved\uff0c\u5247\u6703\u8abf\u7528then\u51fd\u6578\u6307\u5b9a\u7684\u56de\u8abf\u51fd\u6578\uff0c\u53e6\u5916\uff0cthen\u51fd\u6578\u6307\u5b9a\u7684\u56de\u8abf\u51fd\u6578\uff0c\u5982\u679c\u904b\u884c\u4e2d\u62cb\u51fa\u932f\u8aa4\uff0c\u4e5f\u6703\u88abcatch\u51fd\u6578\u6355\u7372\uff1b",Object(o.b)("br",null),"\n\u7b2c\u4e8c\u500b\u4f8b\u5b50\u8aaa\u660e : \u5982\u679c\u7570\u6b65\u64cd\u4f5c\u62cb\u51fa\u932f\u8aa4\uff0c\u72c0\u614b\u5c31\u6703\u8b8a\u70barejected\uff0c\u5c31\u6703\u8abf\u7528catch\u51fd\u6578\u6307\u5b9a\u7684\u56de\u8abf\u51fd\u6578\uff0c\u8655\u7406\u9019\u500b\u932f\u8aa4\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"//\u7b2c\u4e00\u500b\u4f8b\u5b50\nconst PromiseFunction = () => {\n  return new Promise((resolve, reject) => {\n    resolve('\u6210\u529f'); \n    //reject('\u932f\u8aa4');\n  });\n}\n\nPromiseFunction().then((posts) => {\n  console.log('\u6210\u529f\u5f8c\u57f7\u884c\u7684then\u51fd\u6578') //\u8f38\u51fa : '\u6210\u529f\u5f8c\u57f7\u884c\u7684then\u51fd\u6578'\n  throw new Error(\"\u62cb\u51fa\u932f\u8aa4\"); \n}).catch((error) => {\n  // \u8655\u7406PromiseFunction \u548c \u524d\u4e00\u500b\u56de\u8abf\u51fd\u6578 \u57f7\u884c\u6642\u767c\u751f\u7684\u932f\u8aa4\n  console.log('\u767c\u751f\u932f\u8aa4\u5f8c\u57f7\u884ccatch\u51fd\u6578\uff01', error);  //\u8f38\u51fa : '\u767c\u751f\u932f\u8aa4\u5f8c\u57f7\u884ccatch\u51fd\u6578\uff01 Error: \u62cb\u51fa\u932f\u8aa4'\n});\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"//\u7b2c\u4e8c\u500b\u4f8b\u5b50\nconst PromiseFunction = () => {\n  return new Promise((resolve, reject) => {\n    //resolve('\u6210\u529f'); \n    reject('\u932f\u8aa4');\n  });\n}\n\nPromiseFunction().then((posts) => {\n  console.log('\u6210\u529f\u5f8c\u57f7\u884c\u7684then\u51fd\u6578')\n  //throw new Error(\"\u62cb\u51fa\u932f\u8aa4\"); \n}).catch((error) => {\n  // \u8655\u7406PromiseFunction \u548c \u524d\u4e00\u500b\u56de\u8abf\u51fd\u6578 \u57f7\u884c\u6642\u767c\u751f\u7684\u932f\u8aa4\n  console.log('\u767c\u751f\u932f\u8aa4\u5f8c\u57f7\u884ccatch\u51fd\u6578\uff01', error);  //\u8f38\u51fa : '\u767c\u751f\u932f\u8aa4\u5f8c\u57f7\u884ccatch\u51fd\u6578\uff01 \u932f\u8aa4'\n});\n")),Object(o.b)("p",null,"Promise\u7269\u4ef6\u7684\u932f\u8aa4\uff0c\u6703\u4e00\u76f4\u5411\u5f8c\u50b3\u905e\uff0c\u76f4\u5230\u88ab\u6355\u7372\u70ba\u6b62\u3002\u4e5f\u5c31\u662f\u8aaa\uff0c\u932f\u8aa4\u7e3d\u662f\u6703\u88ab\u4e0b\u4e00\u500bcatch\u8a9e\u53e5\u6355\u7372\u3002\u4e0b\u9762\u4f8b\u5b50\u4e2d\u4e00\u5171\u6709\u4e09\u500bPromise\u7269\u4ef6\uff1a\u4e00\u500b\u7531PromiseFunction()\u7522\u751f\uff0c\u5169\u500b\u7531then\u7522\u751f\u3002\u5b83\u5011\u4e4b\u4e2d\u4efb\u4f55\u4e00\u500b\u62cb\u51fa\u7684\u932f\u8aa4\uff0c\u90fd\u6703\u88ab\u6700\u5f8c\u4e00\u500bcatch\u6355\u7372\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"const PromiseFunction = () => {\n  return new Promise((resolve, reject) => {\n    resolve({result:'\u6210\u529f'}); \n    //reject('\u932f\u8aa4');\n  });\n}\n\nPromiseFunction().then((res) => {\n  return res.result;\n}).then((res1) => {\n  //\u4e00\u4e9b\u7a0b\u5f0f\u78bc\n  // .\n  // .\n  // .\n}).catch((error) => {\n  // \u8655\u7406\u524d\u9762\u4e09\u500bPromise (PromiseFunction()\u8fd4\u56de\u7684\u3001then((res) => {...})\u8fd4\u56de\u7684\u3001then((res1) => {...})\u8fd4\u56de\u7684Promise) \u7522\u751f\u7684\u932f\u8aa4\n});\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u4e00\u822c\u4f86\u8aaa\uff0c\u5efa\u8b70\u4e0d\u8981\u5728then\u51fd\u6578\u88e1\u9762\u5b9a\u7fa9Reject\u72c0\u614b\u7684\u56de\u8abf\u51fd\u6578\uff08\u5373\u4e0d\u8981\u5bebthen\u7684\u7b2c\u4e8c\u500b\u53c3\u6578\uff09\uff0c\u7e3d\u662f\u4f7f\u7528catch\u51fd\u6578\u3002\u5982\u4e0b : ")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"// \u4e0d\u8981\u9019\u6a23\u5beb\npromise\n  .then((data) => {\n    // success\n  }, (err) => {\n    // error\n  });\n\n// \u8acb\u9019\u6a23\u5beb\npromise\n  .then((data) => { \n    // success\n  })\n  .catch((err) => {\n    // error\n  });\n")),Object(o.b)("p",null,'\u4e0b\u9762\u4f8b\u5b50\u4e2d\uff0csomeAsyncThing\u51fd\u6578\u7522\u751f\u7684Promise\u7269\u4ef6\uff0c\u5167\u90e8\u6709\u8a9e\u6cd5\u932f\u8aa4\u3002\u700f\u89bd\u5668\u904b\u884c\u5230\u9019\u4e00\u884c\uff0c\u6703\u6253\u5370\u51fa\u932f\u8aa4\u63d0\u793aReferenceError: x is not defined\uff0c\u4f46\u662f\u4e0d\u6703\u9000\u51fa\u9032\u7a0b\u3001\u7d42\u6b62\u8173\u672c\u57f7\u884c\uff0c2\u79d2\u4e4b\u5f8c\u9084\u662f\u6703\u8f38\u51fa123\u3002\u9019\u5c31\u662f\u8aaa\uff0cPromise\u5167\u90e8\u7684\u932f\u8aa4\u4e0d\u6703\u5f71\u97ff\u5230Promise\u5916\u90e8\u7684\u4ee3\u78bc\uff0c\u901a\u4fd7\u7684\u8aaa\u6cd5\u5c31\u662f "Promise\u6703\u5403\u6389\u932f\u8aa4" \u3002'),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"const someAsyncThing = () => {\n  return new Promise((resolve, reject) => {\n    // \u4e0b\u4e00\u884c\u6703\u5831\u932f\uff0c\u56e0\u70ba\u672a\u5ba3\u544a x\n    resolve(x + 2);\n  });\n};\n\nsomeAsyncThing().then(function() {\n  console.log('everything is great');\n});\n\nsetTimeout(() => { console.log(123) }, 2000);\n// \u4f9d\u5e8f\u8f38\u51fa : \n// Uncaught (in promise) ReferenceError: x is not defined\n// 123\n")),Object(o.b)("h3",{id:"promiseprototypefinally"},"Promise.prototype.finally()"),Object(o.b)("p",null,"finally()\u7528\u65bc\u6307\u5b9a\u4e0d\u7ba1Promise\u7269\u4ef6\u6700\u5f8c\u72c0\u614b\u5982\u4f55\uff0c\u90fd\u6703\u57f7\u884c\u7684\u64cd\u4f5c\u3002\u800cfinally()\u7684\u56de\u8abf\u51fd\u6578\u4e0d\u63a5\u53d7\u4efb\u4f55\u53c3\u6578\uff0c\u9019\u4ee3\u8868\u8457\u6c92\u6709\u8fa6\u6cd5\u77e5\u9053\uff0c\u524d\u9762\u7684Promise\u72c0\u614b\u5230\u5e95\u662fresolved\u9084\u662frejected\u3002\u5373\u662f\u8aaa\uff0cfinally()\u88e1\u9762\u7684\u64cd\u4f5c\uff0c\u61c9\u8a72\u662f\u8207\u72c0\u614b\u7121\u95dc\u7684\uff0c\u4e0d\u4f9d\u8cf4\u65bcPromise\u7684\u57f7\u884c\u7d50\u679c\u3002\n\u4f8b\u5982 : "),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"promise\n.then((result) => {\xb7\xb7\xb7})\n.catch((error) => {\xb7\xb7\xb7})\n.finally(() => {\xb7\xb7\xb7});\n")),Object(o.b)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u4e0d\u7ba1promise\u6700\u5f8c\u7684\u72c0\u614b\uff0c\u5728\u57f7\u884c\u5b8cthen\u6216catch\u6307\u5b9a\u7684\u56de\u8abf\u51fd\u6578\u4ee5\u5f8c\uff0c\u90fd\u6703\u57f7\u884cfinally\u51fd\u6578\u6307\u5b9a\u7684\u56de\u8abf\u51fd\u6578\u3002"),Object(o.b)("p",null,"\u53e6\u5916\uff0cfinally\u672c\u8cea\u4e0a\u662fthen\u51fd\u6578\u7684\u7279\u4f8b\u3002\u5982\u4e0b\u9762\u4f8b\u5b50\uff0c\u82e5\u4e0d\u4f7f\u7528finally\u51fd\u6578\uff0c\u540c\u6a23\u7684\u8a9e\u53e5\u9700\u8981\u70ba\u6210\u529f\u548c\u5931\u6557\u5169\u7a2e\u60c5\u6cc1\u5404\u5beb\u4e00\u6b21\u3002\u6709\u4e86finally\u51fd\u6578\uff0c\u5247\u53ea\u9700\u8981\u5beb\u4e00\u6b21\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"promise\n.finally(() => {\n  // \u4e00\u5b9a\u8981\u57f7\u884c\u7684\u4e8b\n});\n\n// \u7b49\u540c\u65bc\n\npromise\n.then(\n  result => {\n    // \u4e00\u5b9a\u8981\u57f7\u884c\u7684\u4e8b\n    return result;\n  },\n  error => {\n    // \u4e00\u5b9a\u8981\u57f7\u884c\u7684\u4e8b\n    throw error;\n  }\n);\n")),Object(o.b)("h3",{id:"promiseall"},"Promise.all()"),Object(o.b)("p",null,"Promise.all()\u51fd\u6578\u7528\u65bc\u5c07\u591a\u500bPromise \u5be6\u4f8b\uff0c\u5305\u88dd\u6210\u4e00\u500b\u65b0\u7684Promise \u5be6\u4f8b\u3002"),Object(o.b)("p",null,"Promise.all()\u51fd\u6578\u63a5\u53d7\u4e00\u500b\u6578\u7d44\u4f5c\u70ba\u53c3\u6578\uff0c\u6578\u7d44\u5167\u82e5\u4e0d\u662fPromise\u5be6\u4f8b\uff0c\u5c31\u6703\u88ab\u8f49\u70baPromise\u518d\u8655\u7406\uff1b\u53e6\u5916\uff0cPromise.all()\u51fd\u6578\u7684\u53c3\u6578\u53ef\u4ee5\u4e0d\u662f\u6578\u7d44\uff0c\u4f46\u5fc5\u9808\u5177\u6709Iterator\u63a5\u53e3\uff0c\u4e14\u8fd4\u56de\u7684\u6bcf\u500b\u6210\u54e1\u90fd\u662fPromise"),Object(o.b)("p",null,"\u4f7f\u7528\u5982 : "),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"const p = Promise.all([p1, p2, p3]);\n")),Object(o.b)("p",null,"p\u7684\u72c0\u614b\u7531p1\u3001p2\u3001p3\u6c7a\u5b9a\uff0c\u5206\u6210\u5169\u7a2e\u60c5\u6cc1\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\uff081\uff09\u53ea\u6709p1\u3001p2\u3001p3\u7684\u72c0\u614b\u90fd\u8b8a\u6210fulfilled\uff0cp\u7684\u72c0\u614b\u624d\u6703\u8b8a\u6210fulfilled\uff0c\u6b64\u6642p1\u3001p2\u3001p3\u7684\u8fd4\u56de\u503c\u7d44\u6210\u4e00\u500b\u6578\u7d44\uff0c\u50b3\u905e\u7d66p\u7684\u56de\u8abf\u51fd\u6578\u3002")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\uff082\uff09\u53ea\u8981p1\u3001p2\u3001p3\u4e4b\u4e2d\u6709\u4e00\u500b\u88abrejected\uff0cp\u7684\u72c0\u614b\u5c31\u8b8a\u6210rejected\uff0c\u6b64\u6642\u7b2c\u4e00\u500b\u88abreject\u7684\u5be6\u4f8b\u7684\u8fd4\u56de\u503c\uff0c\u6703\u50b3\u905e\u7d66p\u7684\u56de\u8abf\u51fd\u6578\u3002")),Object(o.b)("h2",{id:"promise-\u7570\u6b65\u8655\u7406\u65b9\u6848-snippets\u9023\u7d50"},Object(o.b)("a",Object(t.a)({parentName:"h2"},{href:"./PromiseSnippets"}),"Promise \u7570\u6b65\u8655\u7406\u65b9\u6848 (Snippets)\u9023\u7d50")))}a.isMDXComponent=!0},141:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return j}));var t=r(0),o=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=o.a.createContext({}),p=function(e){var n=o.a.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):i({},n,{},e)),r},b=function(e){var n=p(e.components);return o.a.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,l=e.parentName,a=s(e,["components","mdxType","originalType","parentName"]),b=p(r),m=t,j=b["".concat(l,".").concat(m)]||b[m]||u[m]||c;return r?o.a.createElement(j,i({ref:n},a,{components:r})):o.a.createElement(j,i({ref:n},a))}));function j(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,l=new Array(c);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var a=2;a<c;a++)l[a]=r[a];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
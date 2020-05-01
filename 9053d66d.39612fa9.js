(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{129:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(1),c=t(6),o=(t(0),t(164)),a={id:"AsyncSnippets",title:"Async \u51fd\u6578\u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",sidebar_label:"Async \u51fd\u6578\u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)"},s={id:"AsyncSnippets",title:"Async \u51fd\u6578\u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",description:"## Fetch Params\u8655\u7406 (\u5099\u7528)\r",source:"@site/docs\\AsyncSnippets.md",permalink:"/ArhuaReactCourse/docs/AsyncSnippets",sidebar_label:"Async \u51fd\u6578\u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",sidebar:"someSidebar",previous:{title:"Fetch \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)",permalink:"/ArhuaReactCourse/docs/FetchSnippets"},next:{title:"React Component \u7a0b\u5f0f\u78bc\u7247\u6bb5 (Snippets)\u9023\u7d50",permalink:"/ArhuaReactCourse/docs/ReactComponentSnippets"}},l=[{value:"Fetch Params\u8655\u7406 (\u5099\u7528)",id:"fetch-params\u8655\u7406-\u5099\u7528",children:[]},{value:"\u55ae\u767cFetch\u3001\u591a\u500bawait",id:"\u55ae\u767cfetch\u3001\u591a\u500bawait",children:[]},{value:"\u4f75\u767cFetch\u3001\u6309\u9806\u5e8f\u56de\u50b3\u7d50\u679c",id:"\u4f75\u767cfetch\u3001\u6309\u9806\u5e8f\u56de\u50b3\u7d50\u679c",children:[]},{value:"\u7e7c\u767cFetch\u3001\u6309\u9806\u5e8f\u56de\u50b3\u7d50\u679c",id:"\u7e7c\u767cfetch\u3001\u6309\u9806\u5e8f\u56de\u50b3\u7d50\u679c",children:[]}],i={rightToc:l};function u(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"fetch-params\u8655\u7406-\u5099\u7528"},"Fetch Params\u8655\u7406 (\u5099\u7528)"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'\u6ce8\u610f ! \u8907\u88fd\u6b64\u7a0b\u5f0f\u78bc\u7247\u6bb5\u6642\uff0c\u8acb\u5c07\u4e0b\u9762 "\u53d6\u4ee3\u9019\u88e1" \u53d6\u4ee3\u6210\u5169\u500b\u53cd\u659c\u7dda "',"\\",'\\"')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"Fetch Params\u8655\u7406 (\u5099\u7528)": {\n    "prefix": "$async004",\n    "body": [\n        "//Fetch Params\u8655\u7406 (\u5099\u7528)",\n        "//let ${2:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d} = ${1:\u5916\u90e8\u51fd\u6578\u53c3\u6578\u540d} ?? {};//\u5916\u90e8\u51fd\u6578\u82e5\u672a\u8a2d\u7f6e\u9810\u8a2d\u503c\u70ba {}\uff0c\u5247\u9700\u8981\u6b64\u884c",\n        "if (${2:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d}?.Params) {",\n        "    let method = ${2:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d}?.method || \\"GET\\";",\n        "    switch (method) {",\n        "        case \\"GET\\":",\n        "            let count = 0;",\n        "            for (let [key, value] of Object.entries(${2:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d}.Params)) {",\n        "                ${3:fetch\u7b2c\u4e00\u500b\u53c3\u6578\u540d url} = (count == 0) ? `\u53d6\u4ee3\u9019\u88e1${${3:fetch\u7b2c\u4e00\u500b\u53c3\u6578\u540d url}}?\u53d6\u4ee3\u9019\u88e1${key}=\u53d6\u4ee3\u9019\u88e1${value}` : `\u53d6\u4ee3\u9019\u88e1${${3:fetch\u7b2c\u4e00\u500b\u53c3\u6578\u540d url}}&\u53d6\u4ee3\u9019\u88e1${key}=\u53d6\u4ee3\u9019\u88e1${value}`",\n        "                count++;",\n        "            }",\n        "            break;",\n        "        default:",\n        "            let ParamForm = new FormData();",\n        "            for (let [key, value] of Object.entries(${2:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d}.Params)) {",\n        "                ParamForm.append(`\u53d6\u4ee3\u9019\u88e1${key}`, `\u53d6\u4ee3\u9019\u88e1${value}`);",\n        "            }",\n        "            ${2:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d}[\\"body\\"] = ParamForm;",\n        "            break;",\n        "    }",\n        "}"\n    ],\n    "description": "Fetch Params\u8655\u7406 (\u5099\u7528)"\n}\n')),Object(o.b)("h2",{id:"\u55ae\u767cfetch\u3001\u591a\u500bawait"},"\u55ae\u767cFetch\u3001\u591a\u500bawait"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"\u55ae\u767cFetch\u3001\u591a\u500bawait": {\n    "prefix": "$async003",\n    "body": [\n        "//\u55ae\u767cFetch\u3001\u591a\u500bawait        ",\n        "const ${1:AsyncFunctionName} = async (${2:fetch\u7b2c\u4e00\u500b\u53c3\u6578\u540d url}, ${3:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d url} = {}) => {",\n        "    try {",\n        "        // await new Promise((resolve, reject) => {",\n        "        //     try {",\n        "        //         //\u505a\u4e00\u4e9b\u524d\u7f6e\u8655\u7406\uff0c\u5982\u662f\u5426\u9700\u8981Fetch Params\u8655\u7406",\n        "        //         resolve(\u6210\u529f\u6642\u56de\u50b3\u503c);",\n        "        //     } catch (Error) {",\n        "        //         reject(Error);",\n        "        //     }",\n        "        // });",\n        "        const Response = await fetch(${2:fetch\u7b2c\u4e00\u500b\u53c3\u6578\u540d url}, ${3:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d url})",\n        "            .then(Result => {",\n        "                const ResultJson = Result.clone().json();//Respone.clone()",\n        "                //\u505a\u4e00\u4e9b\u4e8b\u60c5",\n        "                console.log(ResultJson)",\n        "                return ResultJson;",\n        "            })",\n        "            .then((PreResult) => {",\n        "                //\u524d\u4e00\u500bthen()\u5167\u7684 return ResultJson \u5c07\u6210\u70ba PreResult",\n        "                //\u505a\u4e00\u4e9b\u4e8b\u60c5",\n        "                return PreResult;",\n        "            })",\n        "            .catch((Error) => {",\n        "                //catch\u51fd\u6578\u662f.then(null, rejection)\u6216.then(undefined, rejection)\u7684\u5225\u540d\uff0c\u7528\u65bc\u6355\u7372\u8655\u7406\u932f\u8aa4\u3002",\n        "                //\u5982\u679c\u524d\u9762\u7684\u7570\u6b65\u64cd\u4f5c\u62cb\u51fa\u932f\u8aa4\uff0c\u72c0\u614b\u5c31\u6703\u8b8a\u70barejected\uff0c\u5c31\u6703\u8abf\u7528catch\u51fd\u6578\u5167\u6307\u5b9a\u7684\u56de\u8abf\u51fd\u6578\uff0c\u8655\u7406\u9019\u500b\u932f\u8aa4\u3002",\n        "                //Promise\u7269\u4ef6\u7684\u932f\u8aa4\uff0c\u6703\u4e00\u76f4\u5411\u5f8c\u50b3\u905e\uff0c\u76f4\u5230\u88ab\u6355\u7372\u70ba\u6b62\u3002",\n        "                console.log(Error)",\n        "            })",\n        "            .finally(() => {",\n        "                //finally()\u7528\u65bc\u6307\u5b9a\u4e0d\u7ba1Promise\u7269\u4ef6\u6700\u5f8c\u72c0\u614b\u5982\u4f55\uff0c\u90fd\u6703\u57f7\u884c\u7684\u64cd\u4f5c\u3002",\n        "                //\u800cfinally()\u7684\u56de\u8abf\u51fd\u6578\u4e0d\u63a5\u53d7\u4efb\u4f55\u53c3\u6578\uff0c\u9019\u4ee3\u8868\u8457\u6c92\u6709\u8fa6\u6cd5\u77e5\u9053\uff0c\u524d\u9762\u7684Promise\u72c0\u614b\u5230\u5e95\u662fresolved\u9084\u662frejected\u3002",\n        "                //\u5373\u662f\u8aaa\uff0cfinally()\u88e1\u9762\u7684\u64cd\u4f5c\uff0c\u61c9\u8a72\u662f\u8207\u72c0\u614b\u7121\u95dc\u7684\uff0c\u4e0d\u4f9d\u8cf4\u65bcPromise\u7684\u57f7\u884c\u7d50\u679c\u3002",\n        "            });",\n        "        //console.log(await response.text());",\n        "        // \u5176\u4ed6\u7684await... \u4f8b\u5982 :",\n        "        //await fetch(\'https://my-json-server.typicode.com/taiwanhua/demo/comments\').then(r=>{console.log(r)})",\n        "        //await fetch(\'https://my-json-server.typicode.com/taiwanhua/demo/profile\').then(r=>{console.log(r)})",\n        "        return Response;",\n        "    } catch (Error) {",\n        "        console.log(Error)",\n        "    }",\n        "}"\n    ],\n    "description": "\u55ae\u767cFetch\u3001\u591a\u500bawait"\n}\n')),Object(o.b)("h2",{id:"\u4f75\u767cfetch\u3001\u6309\u9806\u5e8f\u56de\u50b3\u7d50\u679c"},"\u4f75\u767cFetch\u3001\u6309\u9806\u5e8f\u56de\u50b3\u7d50\u679c"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"\u4f75\u767cFetch\u3001\u6309\u9806\u5e8f\u56de\u50b3\u7d50\u679c": {\n    "prefix": "$async002",\n    "body": [\n        "//\u4f75\u767cFetch\u3001\u6309\u9806\u5e8f\u56de\u50b3\u7d50\u679c",\n        "const ${1:async\u51fd\u6578\u540d} = async (${2:fetch\u7b2c\u4e00\u500b\u53c3\u6578\u540d\u7684\u9663\u5217}, ${3:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d\u7684\u9663\u5217}) => {",\n        "    let ${4:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d\u7684\u9663\u5217\u91cd\u547d\u540d} = ${3:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d\u7684\u9663\u5217} ?? []",\n        "    let count = 0;",\n        "",\n        "    const Promises = ${2:fetch\u7b2c\u4e00\u500b\u53c3\u6578\u540d\u7684\u9663\u5217}.map(async Url => { //\u6ce8\u610f\u9019\u88e1 \u96d6\u7136map\u65b9\u6cd5\u7684\u53c3\u6578\u662fasync\u51fd\u6578\uff0c\u4f46\u5b83\u662f\u4e26\u767c\u57f7\u884c\u7684",\n        "        try {",\n        "            // await new Promise((resolve, reject) => { ",\n        "            //     try {",\n        "            //         //\u505a\u4e00\u4e9b\u524d\u7f6e\u8655\u7406\uff0c\u5982\u662f\u5426\u9700\u8981Fetch Params\u8655\u7406",\n        "            //         resolve(\u6210\u529f\u6642\u56de\u50b3\u503c);",\n        "            //     } catch (Error) {",\n        "            //         reject(Error);",\n        "            //     }",\n        "            // });",\n        "            const Response = await fetch(Url, ${4:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d\u7684\u9663\u5217\u91cd\u547d\u540d}[count] ? ${4:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d\u7684\u9663\u5217\u91cd\u547d\u540d}[count] : {})",\n        "                .then(Result => {",\n        "                    const ResultJson = Result.clone().json();//Response.clone()",\n        "                    //\u505a\u4e00\u4e9b\u4e8b\u60c5",\n        "                    console.log(ResultJson)",\n        "                    return ResultJson;",\n        "                })",\n        "                .then((PreResult) => {",\n        "                    //\u524d\u4e00\u500bthen()\u5167\u7684 return ResultJson \u5c07\u6210\u70ba PreResult",\n        "                    //\u505a\u4e00\u4e9b\u4e8b\u60c5",\n        "                    return PreResult;",\n        "                })",\n        "                .catch((Error) => {",\n        "                    //catch\u51fd\u6578\u662f.then(null, rejection)\u6216.then(undefined, rejection)\u7684\u5225\u540d\uff0c\u7528\u65bc\u6355\u7372\u8655\u7406\u932f\u8aa4\u3002",\n        "                    //\u5982\u679c\u524d\u9762\u7684\u7570\u6b65\u64cd\u4f5c\u62cb\u51fa\u932f\u8aa4\uff0c\u72c0\u614b\u5c31\u6703\u8b8a\u70barejected\uff0c\u5c31\u6703\u8abf\u7528catch\u51fd\u6578\u5167\u6307\u5b9a\u7684\u56de\u8abf\u51fd\u6578\uff0c\u8655\u7406\u9019\u500b\u932f\u8aa4\u3002",\n        "                    //Promise\u7269\u4ef6\u7684\u932f\u8aa4\uff0c\u6703\u4e00\u76f4\u5411\u5f8c\u50b3\u905e\uff0c\u76f4\u5230\u88ab\u6355\u7372\u70ba\u6b62\u3002",\n        "                    console.log(Error)",\n        "                })",\n        "                .finally(() => {",\n        "                    //finally()\u7528\u65bc\u6307\u5b9a\u4e0d\u7ba1Promise\u7269\u4ef6\u6700\u5f8c\u72c0\u614b\u5982\u4f55\uff0c\u90fd\u6703\u57f7\u884c\u7684\u64cd\u4f5c\u3002",\n        "                    //\u800cfinally()\u7684\u56de\u8abf\u51fd\u6578\u4e0d\u63a5\u53d7\u4efb\u4f55\u53c3\u6578\uff0c\u9019\u4ee3\u8868\u8457\u6c92\u6709\u8fa6\u6cd5\u77e5\u9053\uff0c\u524d\u9762\u7684Promise\u72c0\u614b\u5230\u5e95\u662fresolved\u9084\u662frejected\u3002",\n        "                    //\u5373\u662f\u8aaa\uff0cfinally()\u88e1\u9762\u7684\u64cd\u4f5c\uff0c\u61c9\u8a72\u662f\u8207\u72c0\u614b\u7121\u95dc\u7684\uff0c\u4e0d\u4f9d\u8cf4\u65bcPromise\u7684\u57f7\u884c\u7d50\u679c\u3002",\n        "                });",\n        "            //console.log(await response.text());",\n        "            ",\n        "            return Response;",\n        "        } catch (Error) {",\n        "            console.log(Error)",\n        "        }",\n        "        count++;",\n        "    });",\n        "",\n        "    // \u6309\u6b21\u5e8f\u8f38\u51fa",\n        "    for (const Promise of Promises) {",\n        "        //\u505a\u4e00\u4e9b\u4e8b\u60c5",\n        "        console.log(await Promise);",\n        "    }",\n        "}"\n    ],\n    "description": "Async: \u4f75\u767cFetch\u3001\u6309\u9806\u5e8f\u56de\u50b3\u7d50\u679c"\n}\n')),Object(o.b)("h2",{id:"\u7e7c\u767cfetch\u3001\u6309\u9806\u5e8f\u56de\u50b3\u7d50\u679c"},"\u7e7c\u767cFetch\u3001\u6309\u9806\u5e8f\u56de\u50b3\u7d50\u679c"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"\u7e7c\u767cFetch\u3001\u6309\u9806\u5e8f\u56de\u50b3\u7d50\u679c": {\n    "prefix": "$async001",\n    "body": [\n        "//\u7e7c\u767cFetch\u3001\u6309\u9806\u5e8f\u56de\u50b3\u7d50\u679c",\n        "const ${1:async\u51fd\u6578\u540d} = async (${2:fetch\u7b2c\u4e00\u500b\u53c3\u6578\u540d\u7684\u9663\u5217}, ${3:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d\u7684\u9663\u5217}) => {",\n        "    let ${4:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d\u7684\u9663\u5217\u91cd\u547d\u540d} = ${3:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d\u7684\u9663\u5217} ?? []",\n        "    let count = 0;",\n        "",\n        "    for (const Url of ${2:fetch\u7b2c\u4e00\u500b\u53c3\u6578\u540d\u7684\u9663\u5217}) {",\n        "        try {",\n        "            // await new Promise((resolve, reject) => {",\n        "            //     try {",\n        "            //         //\u505a\u4e00\u4e9b\u524d\u7f6e\u8655\u7406\uff0c\u5982\u662f\u5426\u9700\u8981Fetch Params\u8655\u7406",\n        "            //         resolve(\u6210\u529f\u6642\u56de\u50b3\u503c);",\n        "            //     } catch (Error) {",\n        "            //         reject(Error);",\n        "            //     }",\n        "            // });",\n        "            const Response = await fetch(Url, ${4:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d\u7684\u9663\u5217\u91cd\u547d\u540d}[count] ? ${4:fetch\u7b2c\u4e8c\u500b\u53c3\u6578\u540d\u7684\u9663\u5217\u91cd\u547d\u540d}[count] : {})",\n        "                .then(Result => {",\n        "                    const ResultJson = Result.clone().json();//Response.clone()",\n        "                    //\u505a\u4e00\u4e9b\u4e8b\u60c5",\n        "                    console.log(ResultJson)",\n        "                    return ResultJson;",\n        "                })",\n        "                .then((PreResult) => {",\n        "                    //\u524d\u4e00\u500bthen()\u5167\u7684 return ResultJson \u5c07\u6210\u70ba PreResult",\n        "                    //\u505a\u4e00\u4e9b\u4e8b\u60c5",\n        "                })",\n        "                .catch((Error) => {",\n        "                    //catch\u51fd\u6578\u662f.then(null, rejection)\u6216.then(undefined, rejection)\u7684\u5225\u540d\uff0c\u7528\u65bc\u6355\u7372\u8655\u7406\u932f\u8aa4\u3002",\n        "                    //\u5982\u679c\u524d\u9762\u7684\u7570\u6b65\u64cd\u4f5c\u62cb\u51fa\u932f\u8aa4\uff0c\u72c0\u614b\u5c31\u6703\u8b8a\u70barejected\uff0c\u5c31\u6703\u8abf\u7528catch\u51fd\u6578\u5167\u6307\u5b9a\u7684\u56de\u8abf\u51fd\u6578\uff0c\u8655\u7406\u9019\u500b\u932f\u8aa4\u3002",\n        "                    //Promise\u7269\u4ef6\u7684\u932f\u8aa4\uff0c\u6703\u4e00\u76f4\u5411\u5f8c\u50b3\u905e\uff0c\u76f4\u5230\u88ab\u6355\u7372\u70ba\u6b62\u3002",\n        "                    console.log(Error)",\n        "                })",\n        "                .finally(() => {",\n        "                    //finally()\u7528\u65bc\u6307\u5b9a\u4e0d\u7ba1Promise\u7269\u4ef6\u6700\u5f8c\u72c0\u614b\u5982\u4f55\uff0c\u90fd\u6703\u57f7\u884c\u7684\u64cd\u4f5c\u3002",\n        "                    //\u800cfinally()\u7684\u56de\u8abf\u51fd\u6578\u4e0d\u63a5\u53d7\u4efb\u4f55\u53c3\u6578\uff0c\u9019\u4ee3\u8868\u8457\u6c92\u6709\u8fa6\u6cd5\u77e5\u9053\uff0c\u524d\u9762\u7684Promise\u72c0\u614b\u5230\u5e95\u662fresolved\u9084\u662frejected\u3002",\n        "                    //\u5373\u662f\u8aaa\uff0cfinally()\u88e1\u9762\u7684\u64cd\u4f5c\uff0c\u61c9\u8a72\u662f\u8207\u72c0\u614b\u7121\u95dc\u7684\uff0c\u4e0d\u4f9d\u8cf4\u65bcPromise\u7684\u57f7\u884c\u7d50\u679c\u3002",\n        "                });",\n        "            //console.log(await response.text());",\n        "            return Response;",\n        "        } catch (Error) {",\n        "            console.log(Error)",\n        "        }",\n        "",\n        "        count++;",\n        "    }",\n        "}"\n    ],\n    "description": "Async: \u7e7c\u767cFetch\u3001\u6309\u9806\u5e8f\u56de\u50b3\u7d50\u679c"\n}\n')))}u.isMDXComponent=!0},164:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),c=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var i=c.a.createContext({}),u=function(e){var n=c.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},p=function(e){var n=u(e.components);return c.a.createElement(i.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},f=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,m=p["".concat(a,".").concat(f)]||p[f]||h[f]||o;return t?c.a.createElement(m,s({ref:n},i,{components:t})):c.a.createElement(m,s({ref:n},i))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var i=2;i<o;i++)a[i]=t[i];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);
---
id: AsyncSnippets
title: Async 函數程式碼片段 (Snippets)
sidebar_label: Async 函數程式碼片段 (Snippets)
---

> 重新製作

## Fetch Params處理 (備用)

> 注意 ! 複製此程式碼片段時，請將下面 "取代這裡" 取代成兩個反斜線 "\\\"

```json
"Fetch Params處理 (備用)": {
	"prefix": "$Async004",
	"body": [
		"//Fetch Params處理",
		"//let ${2:fetch第二個參數名} = ${1:外部函數參數名} ?? {};//外部函數若未設置預設值為 {}，則需要此行",
		"if (${2:fetch第二個參數名}?.Params) {",
		"    let method = ${2:fetch第二個參數名}?.method || \"GET\";",
		"    switch (method) {",
		"        case \"GET\":",
		"            let count = 0;",
		"            for (let [key, value] of Object.entries(${2:fetch第二個參數名}.Params)) {",
		"                Urls_ = (count == 0) ? `取代這裡${Urls_}?取代這裡${key}=取代這裡${value}` : `取代這裡${Urls_}&取代這裡${key}=取代這裡${value}`",
		"                count++;",
		"            }",
		"            break;",
		"        default:",
		"            let ParamForm = new FormData();",
		"            for (let [key, value] of Object.entries(${2:fetch第二個參數名}.Params)) {",
		"                ParamForm.append(`取代這裡${Urls_}?取代這裡${key}=取代這裡${value}`, `取代這裡${Urls_}&取代這裡${key}=取代這裡${value}`);",
		"            }",
		"            ${2:fetch第二個參數名}[\"body\"] = ParamForm;",
		"            break;",
		"    }",
		"}"
	],
	"description": "Fetch Params處理 (備用)"
}
```

## 單發Fetch、多個await

```json
"Async003": {
		"prefix": "$async003",
		"body": [
			"//單發Fetch、多個await        ",
			"const AsyncFunctionName = async (Urls_, Params_) => {",
			"    try {",
			"        //視是否需要Fetch Params處理",
			"        const Response = await fetch(Urls_, Params_)",
			"            .then(Result => {",
			"                ResultJson = Result.clone().json();//Respone.clone()",
			"                //做一些事情",
			"                console.log(ResultJson)",
			"                return ResultJson;",
			"            })",
			"            .then((PreResult) => {",
			"                //前一個then()內的 return ResultJson 將成為 PreResult",
			"                //做一些事情",
			"                return PreResult;",
			"            })",
			"            .catch((Error) => {",
			"                //catch函數是.then(null, rejection)或.then(undefined, rejection)的別名，用於捕獲處理錯誤。",
			"                //如果前面的異步操作拋出錯誤，狀態就會變為rejected，就會調用catch函數內指定的回調函數，處理這個錯誤。",
			"                //Promise物件的錯誤，會一直向後傳遞，直到被捕獲為止。",
			"                console.log(Error)",
			"            })",
			"            .finally(() => {",
			"                //finally()用於指定不管Promise物件最後狀態如何，都會執行的操作。",
			"                //而finally()的回調函數不接受任何參數，這代表著沒有辦法知道，前面的Promise狀態到底是resolved還是rejected。",
			"                //即是說，finally()裡面的操作，應該是與狀態無關的，不依賴於Promise的執行結果。",
			"            });",
			"        //console.log(await response.text());",
			"        // 其他的await... 例如 :",
			"        //await fetch('https://my-json-server.typicode.com/taiwanhua/demo/comments').then(r=>{console.log(r)})",
			"        //await fetch('https://my-json-server.typicode.com/taiwanhua/demo/profile').then(r=>{console.log(r)})",
			"        return Response;",
			"    } catch (Error) {",
			"        console.log(Error)",
			"    }",
			"}"
		],
		"description": "單發Fetch、多個await"
	}
```

## 併發Fetch、按順序回傳結果

```json
	"Async002": {
		"prefix": "$async002",
		"body": [
			"//併發Fetch、按順序回傳結果",
			"const $1 = async (UrlsArray_, ParamsArray_) => {",
			"    let ParamsArray = ParamsArray_ ?? []",
			"    let count = 0;",
			"",
			"    const Promises = UrlsArray_.map(async Url => { //注意這裡 雖然map方法的參數是async函數，但它是並發執行的",
			"        try {",
			"            const Response = await fetch(Url, ParamsArray[count] ? ParamsArray[count] : {})",
			"                .then(Result => {",
			"                    ResultJson = Result.clone().json();//Response.clone()",
			"                    //做一些事情",
			"                    console.log(ResultJson)",
			"                    return ResultJson;",
			"                })",
			"                .then((PreResult) => {",
			"                    //前一個then()內的 return ResultJson 將成為 PreResult",
			"                    //做一些事情",
			"                    return PreResult;",
			"                })",
			"                .catch((Error) => {",
			"                    //catch函數是.then(null, rejection)或.then(undefined, rejection)的別名，用於捕獲處理錯誤。",
			"                    //如果前面的異步操作拋出錯誤，狀態就會變為rejected，就會調用catch函數內指定的回調函數，處理這個錯誤。",
			"                    //Promise物件的錯誤，會一直向後傳遞，直到被捕獲為止。",
			"                    console.log(Error)",
			"                })",
			"                .finally(() => {",
			"                    //finally()用於指定不管Promise物件最後狀態如何，都會執行的操作。",
			"                    //而finally()的回調函數不接受任何參數，這代表著沒有辦法知道，前面的Promise狀態到底是resolved還是rejected。",
			"                    //即是說，finally()裡面的操作，應該是與狀態無關的，不依賴於Promise的執行結果。",
			"                });",
			"            //console.log(await response.text());",
			"            ",
			"            return Response;",
			"        } catch (Error) {",
			"            console.log(Error)",
			"        }",
			"    });",
			"",
			"    // 按次序輸出",
			"    for (const Promise of Promises) {",
			"        //做一些事情",
			"        console.log(await Promise);",
			"    }",
			"}"
		],
		"description": "Async: 併發Fetch、按順序回傳結果"
    }
```

## 繼發Fetch、按順序回傳結果

```json
	"Async001": {
		"prefix": "$async001",
		"body": [
			"//繼發Fetch、按順序回傳結果",
			"const $1 = async (UrlsArray_, ParamsArray_) => {",
			"    let ParamsArray = ParamsArray_ ?? []",
			"    let count = 0;",
			"",
			"    for (const Url of UrlsArray_) {",
			"        try {",
			"            const Response = await fetch(Url, ParamsArray[count] ? ParamsArray[count] : {})",
			"                .then(Result => {",
			"                    ResultJson = Result.clone().json();//Response.clone()",
			"                    //做一些事情",
			"                    console.log(ResultJson)",
			"                    return ResultJson;",
			"                })",
			"                .then((PreResult) => {",
			"                    //前一個then()內的 return ResultJson 將成為 PreResult",
			"                    //做一些事情",
			"                })",
			"                .catch((Error) => {",
			"                    //catch函數是.then(null, rejection)或.then(undefined, rejection)的別名，用於捕獲處理錯誤。",
			"                    //如果前面的異步操作拋出錯誤，狀態就會變為rejected，就會調用catch函數內指定的回調函數，處理這個錯誤。",
			"                    //Promise物件的錯誤，會一直向後傳遞，直到被捕獲為止。",
			"                    console.log(Error)",
			"                })",
			"                .finally(() => {",
			"                    //finally()用於指定不管Promise物件最後狀態如何，都會執行的操作。",
			"                    //而finally()的回調函數不接受任何參數，這代表著沒有辦法知道，前面的Promise狀態到底是resolved還是rejected。",
			"                    //即是說，finally()裡面的操作，應該是與狀態無關的，不依賴於Promise的執行結果。",
			"                });",
			"            //console.log(await response.text());",
			"            return Response;",
			"        } catch (Error) {",
			"            console.log(Error)",
			"        }",
			"",
			"        count++;",
			"    }",
			"}"
		],
		"description": "Async: 繼發Fetch、按順序回傳結果"
    }
```
---
id: FetchSnippets
title: Fetch 程式碼片段 (Snippets)
sidebar_label: Fetch 程式碼片段 (Snippets)
---

## Fetch Params處理

> 注意 ! 複製此程式碼片段時，請將下面 "取代這裡" 取代成兩個反斜線 "\\\"

```json
"Fetch Params處理": {
	"prefix": "$fetchParam0001",
	"body": [
		"//Fetch Params處理",
		"//let ${2:fetch第二個參數名} = ${1:外部函數參數名} ?? {};//外部函數若未設置預設值為 {}，則需要此行",
		"if (${2:fetch第二個參數名}?.Params) {",
		"    let method = ${2:fetch第二個參數名}?.method || \"GET\";",
		"    switch (method) {",
		"        case \"GET\":",
		"            let count = 0;",
		"            for (let [key, value] of Object.entries(${2:fetch第二個參數名}.Params)) {",
		"                ${3:fetch第一個參數名 url} = (count == 0) ? `取代這裡${${3:fetch第一個參數名 url}}?取代這裡${key}=取代這裡${value}` : `取代這裡${${3:fetch第一個參數名 url}}&取代這裡${key}=取代這裡${value}`",
		"                count++;",
		"            }",
		"            break;",
		"        default:",
		"            let ParamForm = new FormData();",
		"            for (let [key, value] of Object.entries(${2:fetch第二個參數名}.Params)) {",
		"                ParamForm.append(`取代這裡${key}`, `取代這裡${value}`);",
		"            }",
		"            ${2:fetch第二個參數名}[\"body\"] = ParamForm;",
		"            break;",
		"    }",
		"}"
	],
	"description": "Fetch Params處理"
}
```

## 單純的fetch

```json
"單純的fetch": {
	"prefix": "$fetch001",
	"body": [
		"//單純的fetch",
		"fetch(${1:Urls_}, ${2:Params_ (接續使用fetchSecondParam001)})",
		"    .then(Result => {",
		"        const ResultJson = Result.clone().json();//Respone.clone()",
		"        //做一些事情",
		"        console.log(ResultJson)",
		"        return ResultJson;",
		"    })",
		"    .then((PreResult) => {",
		"        //前一個then()內的 return ResultJson 將成為 PreResult",
		"        //做一些事情",
		"        return PreResult;",
		"    })",
		"    .catch((Error) => {",
		"        //catch函數是.then(null, rejection)或.then(undefined, rejection)的別名，用於捕獲處理錯誤。",
		"        //如果前面的異步操作拋出錯誤，狀態就會變為rejected，就會調用catch函數內指定的回調函數，處理這個錯誤。",
		"        //Promise物件的錯誤，會一直向後傳遞，直到被捕獲為止。",
		"        console.log(Error)",
		"    })",
		"    .finally(() => {",
		"        //finally()用於指定不管Promise物件最後狀態如何，都會執行的操作。",
		"        //而finally()的回調函數不接受任何參數，這代表著沒有辦法知道，前面的Promise狀態到底是resolved還是rejected。",
		"        //即是說，finally()裡面的操作，應該是與狀態無關的，不依賴於Promise的執行結果。",
		"    });"
	],
	"description": "單純的fetch"
}
```

## fetch第二個參數

```json
"fetch第二個參數": {
	"prefix": "$fetchSecondParam001",
	"body": [
		"//fetch第二個參數",
		"{",
		"    // 預設選項以 * 標記",
		"    method: '${1:可選參數 *GET、POST、PUT、DELETE、等等}',",
		"    headers: {",
		"        'content-type': 'application/json'",
		"    },",
		"    body: ${2:body參數物件，要符合 header 內的 'Content-Type' }, ",
		"    cache: '${3:可選參數 : *default, no-cache, reload, force-cache, only-if-cached}', ",
		"    credentials: '${4:可選參數 : include, same-origin, *omit}', ",
		"    mode: '${5:可選參數 : no-cors, cors, *same-origin}', ",
		"    redirect: '${6:可選參數 : manual, *follow, error}', ",
		"    referrer: '${7:可選參數 : *client, no-referrer}', ",
		"}"
	],
	"description": "fetch第二個參數"
}
```

---
id: PromiseSnippets
title: Promise 異步處理方案 (Snippets)
sidebar_label: Promise 異步處理方案 (Snippets)
---

## 創建Promise

```json
"創建Promise": {
	"prefix": "$Promise0001",
	"body": [
		"//創建Promise",
		"//1.一旦新建它就會 \"立即執行\"",
		"const ${1:promise名} = new Promise((resolve, reject) => {",
		"    try {",
		"        //做一些事",
		"        resolve(${2:成功時回傳值});",
		"    } catch (Error) {",
		"        reject(Error);",
		"    }",
		"})",
		"    .then(Result => {",
		"        ResultJson = Result.clone().json();//Response.clone()",
		"        //做一些事情",
		"        console.log(ResultJson)",
		"        return ResultJson;",
		"    })",
		"    .then((PreResult) => {",
		"        //前一個then()內的 return ResultJson 將成為 PreResult",
		"        //做一些事情",
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
	"description": "創建Promise"
}
```
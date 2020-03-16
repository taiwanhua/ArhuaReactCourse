---
id: NewFeaturesSnippets
title: 擴充功能程式碼片段 (Snippets)
sidebar_label: 擴充功能程式碼片段 (Snippets)
---
## rest參數

```json
"rest參數，將傳入的參數放入陣列中": {
	"prefix": "$NewRest0001",
	"body": [
		"//rest參數，將傳入的參數放入陣列中",
		"//1.rest參數必須是最後一個參數，否則會報錯。",
		"const ${1:函數名} = (${2:參數名}...values) => {",
		"    ${3:console.log(values);}",
		"}"
	],
	"description": "rest參數，將傳入的參數放入陣列中"
}
```

## 箭頭函數

```json
"箭頭函數": {
	"prefix": "$NewArrowFunction0001",
	"body": [
		"//箭頭函數",
		"//1.直接返回return \"=>\" 右方內容",
		"//  const f = v => v ;  ",
		"//  等同",
		"//  const f = (v) => (v) ; ",
		"//2.直接返回物件必加上()",
		"//  const f = (v) => ({ x: v }) ; ",
		"const ${1:箭頭函數} = (${2:參數1}, ${3:參數2}) => {",
		"    //做一些事情",
		"    return ${4:回傳值};",
		"}"
	],
	"description": "箭頭函數"
}
```

## 陣列的擴展運算符

```json
"陣列的擴展運算符(...)": {
	"prefix": "$NewArraySpread0001",
	"body": [
		"//陣列的擴展運算符(...)",
		"//1.會將一個陣列轉為用逗號分隔的參數序列。 如 ...[1,2,3] 轉為 1,2,3 ",
		"//2.可用在陣列轉為參數傳入函入，add(...[1,2,3]])",
		"//3.可搭配表達式",
		"//  const arr = [",
		"//      ...( true ? ['a', 'b'] : []),",
		"//      'c'",
		"//  ];",
		"//4.(...)擴展陣列時為淺拷貝",
		"//5.可搭配解構賦值使用",
		"//  const [first, ...rest] = [1, 2, 3, 4, 5];",
		"//6.搭配字串使用，如 [...'hello']。",
		"const ${1:變數名} = [...${2:要擴展的陣列}];"
	],
	"description": "陣列的擴展運算符(...)"
}
```
## find()、findIndex()

```json
"陣列的find()函數": {
	"prefix": "$NewArrayFind0001",
	"body": [
		// "//陣列的find()函數",
		// "//1.可接受三個參數，依次為當前的值、當前的位置和原陣列；",
		// "//  返回第一個符合條件的陣列成員的值，如果所有成員都不符合條件，則返回 undefined。",
		"${1:陣列名}.find(function(value, index, arr) {",
		"    //做一些事",
		"    return ${2:回傳值};",
		"  })"
	],
	"description": "陣列的find()函數 \n 1.可接受三個參數，依次為當前的值、當前的位置和原陣列； \n\t 返回第一個符合條件的陣列成員的值，如果所有成員都不符合條件，則返回 undefined。"
},
"陣列的findIndex()函數": {
	"prefix": "$NewArrayFindIndex0001",
	"body": [
		// "//陣列的findIndex()函數",
		// "//1.可接受三個參數，依次為當前的值、當前的位置和原陣列；",
		// "//  返回第一個符合條件的陣列成員的位置，如果所有成員都不符合條件，則返回 -1。",
		"${1:陣列名}.findIndex(function(value, index, arr) {",
		"    //做一些事",
		"    return ${2:回傳值};",
		"  })"
	],
	"description": "陣列的findIndex()函數 \n 1.可接受三個參數，依次為當前的值、當前的位置和原陣列； \n\t 返回第一個符合條件的陣列成員的位置，如果所有成員都不符合條件，則返回 -1。"
}
```

## flat()、flatMap()

```json
"陣列的flat()函數": {
	"prefix": "$NewArrayFlat0001",
	"body": [
		// "//陣列的flat()函數",
		// "把陣列\"拉平\"指定層數",
		"${1:陣列名}.flat(${2:幾層或Infinity}); "
	],
	"description": "陣列的flat()函數 \n 把陣列\"拉平\"指定層數"
},
"陣列的flatMap()函數": {
	"prefix": "$NewArrayFlatMap0001",
	"body": [
		// "//陣列的flatMap()函數",
		// "只把陣列\"拉平\"一層，但能對每個成員執行一個函數",
		"${1:陣列名}.flatMap((x) => {${2:一些事情}}));"
	],
	"description": "陣列的flatMap()函數 \n 只把陣列\"拉平\"一層，但能對每個成員執行一個函數"
}
```

## 模板字串

> 注意 ! 複製此程式碼片段時，請將下面 "取代這裡" 取代成兩個反斜線 "\\\"

```json
"模板字串": {
	"prefix": "$NewStringTemplate0001",
	"body": [
		"//模板字串",
		"//如 : `取代這裡${x} + 取代這裡${y * 2} = 取代這裡${x + y * 2}`",
		"`取代這裡${${1:變數或運算等等}}`"
	],
	"description": "模板字串"
}
```

## 物件內成員簡寫

```json
"物件內成員簡寫": {
	"prefix": "$NewObjectAbbreviation0001",
	"body": [
		"//物件內成員簡寫",
		"// let prop1 = '字串';",
		"// const Person = {",
		"//   name : \"Arhua\",",
		"//   prop1,",
		"//   hello() { console.log(this.name); }//此this指向物件本身，所以this.name 為 Arhua",
		"// };"
	],
	"description": "物件內成員簡寫"
}
```

## 為物件設定、取得成員

```json
"為物件設定、取得成員": {
	"prefix": "$NewObjectSetOrGetElement0001",
	"body": [
		"//為物件設定、取得成員",
		"//1.在物件外設定成員",
		"//obj.a = true;",
		"//obj['a' + 'bc'] = 123;",
		"//2.在物件內設定成員",
		"//let obj = {",
		"//    ['a' + 'bc']: 123,",
		"//    ['h' + 'ello']() {...}",
		"//};",
		"//3.取用成員",
		"//obj.foo);",
		"//obj['foo']);",
		"//obj.hello());",
		"//obj['hello']());"
	],
	"description": "為物件設定、取得成員"
}
```

## 物件的 this 與 super

```json
"物件的 this 與 super": {
	"prefix": "$NewObjectThisAndSuper0001",
	"body": [
		"//物件的 this 與 super",
		"//1.物件內this指向函數所在的物件",
		"//2.super，它是指向\"物件的函數所在的當前物件\"的原型物件 ( proto )",
		"//3.super只能用在\"物件的函數\"之中，如",
		"//  const proto = {",
		"//      foo: 'hello'",
		"//  };",
		"//  const obj = {",
		"//    foo: 'world',",
		"//    ['find']() {",
		"//      console.log(this.foo); //指向 obj.foo : 'world'",
		"//      return super.foo; //指向 obj.__proto__ ，(只能用在這裡)",
		"//    }",
		"//  };",
		"//  Object.setPrototypeOf(obj, proto);//將proto加入至obj的原型物件"
	],
	"description": "物件的 this 與 super"
}
```

## 物件的擴展運算符

```json
"物件的擴展運算符(...)": {
	"prefix": "$NewObjectSpread0001",
	"body": [
		"//物件的擴展運算符(...)",
		"//1.搭配解構賦值使用，...必須在最後一個位置",
		"//  let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };",
		"//2.拷貝所有成員，此為淺拷貝",
		"//let z = { a: 3, b: 4 };",
		"//let n = { f: 200, ...z, u: 100};// ... 可以放在任意位置",
		"//3.將陣列、字串轉為物件",
		"//let foo = { ...['a', 'b', 'c'] };// {0: \"a\", 1: \"b\", 2: \"c\"}",
		"//let foo = {...'hello'};// {0: \"h\", 1: \"e\", 2: \"l\", 3: \"l\", 4: \"o\"}"
	],
	"description": "物件的擴展運算符(...)"
}
```

## 鏈判斷運算符

```json
"鏈判斷運算符(?.)": {
	"prefix": "$NewObjectOptionalChaining0001",
	"body": [
		"//鏈判斷運算符(?.)",
		"//1.鏈判斷運算符 \"?.\" 會檢查左側的物件是否為null或undefined。若是的，就返回undefined，否則接續運算右側的物件。",
		"//const firstName = (message && message.body && message.body['user']) || 'default';",
		"//等同",
		"//const firstName = message?.body?.['user'] || 'default';",
		"//2.若函數或物件的方法不為null或undefined，調用直接該函數或物件的方法",
		"//  message?.functionName?.(傳入的參數...)"
	],
	"description": "鏈判斷運算符(?.)"
}
```

## Null判斷運算符

```json
"Null判斷運算符(??)": {
	"prefix": "$NewObjectDoubleQuestionMark0001",
	"body": [
		"//Null判斷運算符(??)",
		"//1.運算符左側的值為null或undefined時，才會返回右側的值。",
		"//  const headerText = response?.headerText ?? 'Hello, world!';"
	],
	"description": "Null判斷運算符(??)"
}
```

---
id: ClassSnippets
title: Class(類) 程式碼片段 (Snippets)
sidebar_label: Class(類) 程式碼片段 (Snippets)
---

## Class (類)

```json
"Class (類)": {
	"prefix": "$Class0001",
	"body": [
		"//Class (類)",
		"//1.Class的數據類型是函數，Class本身就指向構造函數",
		"//2.constructor是Class的構造函數，當使用new生成實例物件時，它會被會自動調用，",
		"//3.this則指向當前實例物件。",
		"//4.定義Class的函數的時候，直接把函數宣告放進去了就可以了。如",
		"//  toString() {return '(' + this.x + ', ' + this.y + ')';}",
		"//  或",
		"//  ['toString1']() {return '(' + this.x + ', ' + this.y + ')';}",
		"//5.Class內函數之間不需要逗號分隔，加了會報錯",
		"//6.取值函數（getter）和存值函數（setter）供取值前、存值前可做額外操作",
		"//7.加上static關鍵字，就表示該函數是直接通過class來調用 (不用new)",
		"//8.如果調用\"靜態函數\"其內包含this關鍵字，這個this指向類下具static關鍵字的物件",
		"//9.靜態函數可以與非靜態函數重名",
		"// class Point {",
		"//     constructor(x, y) {//構造函數",
		"//         this.x = x;",
		"//         this.y = y;",
		"//     }",
		"//     ['toString1']() {",
		"//         return '(' + this.x + ', ' + this.y + ')';",
		"//     }",
		"//     get prop() {//取值函數（getter）",
		"//         return this._prop;",
		"//     }",
		"//     set prop(value) {//存值函數（setter）",
		"//         console.log('setter: ' + value);",
		"//         this._prop = value;",
		"//     }",
		"//     static staticpropbaz = 'static prop baz';",
		"//     static baz() {",
		"//         console.log('static baz');",
		"//         console.log(this.staticpropbaz);",
		"//     }",
		"// }",
		"// let p = new Point(1, 2);//使用的時候，也是直接對Class使用new",
		"// console.log(p.toString())//輸出 : (1, 2) ，要使用也是直接調用函數",
		"// p.prop = 1; //使用setter 函數 ，會先輸出:  setter: 1，並將 this._prop賦值為 1",
		"// p.bar();//輸出 : static baz 與 static prop baz",
		"class ${1:類名} {",
		"    constructor(${2:構造函數參數}) {",
		"        this.${3:實例物件參數} = ${4:};",
		"    }",
		"",
		"    ${5:static} ${6:實例物件參數} = ${7:}",
		"",
		"    ${8:static} ['${9:實例物件函數}']() {",
		"        //做一些事情",
		"        return ${10:實例物件函數回傳值};",
		"    }",
		"    set ${11:存值函數}(value) {",
		"        //做一些事情",
		"        this._${11:存值函數} = value;",
		"    }",
		"    get ${11:取值函數}() {",
		"        return this._${11:取值函數回傳值};",
		"    }",
		"}"
	],
	"description": "Class (類)"
}
```

## Class(類)繼承 (extends)

```json
"Class(類)繼承 (extends)": {
	"prefix": "$ClassExtends0001",
	"body": [
		"//Class(類)繼承 (extends)",
		"//1.子類必須在constructor函數中調用super函數，否則new的時候會報錯",
		"//2.super它在這裡表示父類的構造函數，用來新建父類的this物件",
		"//3.父類的靜態函數，也會被子類繼承",
		"class ${1:子類別名} extends ${2:父類別名} {",
		"  constructor(${3:子類別建構函數參數}) {",
		"    super(${4:父類別建構函數參數});",
		"    //做一些事情",
		"  }",
		"  //宣告子類參數等等...",
		"}"
	],
	"description": "Class(類)繼承 (extends)"
},
```
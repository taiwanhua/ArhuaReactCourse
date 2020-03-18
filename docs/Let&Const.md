---
id: Let&Const
title: 使用Let與Const變數
sidebar_label: 使用Let與Const變數
---
## 基本使用

```javascript
// 宣告 number

// ES5寫法  
var number = 100;

// ES6寫法
let number = 100;

// 使用const宣告常數count
const number = 100;
```

> 注意：常數是不可變的，也就是常數定義之後不能更改它，否則會報錯。(詳見下面Const解說)

> 建議：盡量使用const，除非值可變（值可變時使用let），var應以let或const替代。

## Let

ES6新增了let命令，用來宣告變數。
它的用法類似於var，但是所聲明的變數作用的方式不同，如以下說明。

### let宣告的變數只會在其所在的 {代碼區塊} 與 {子代碼區塊} 有效

比較如下列程式碼，若想在代碼區塊外存取到let宣告的變數a，則會報錯；var 宣告的變數則可以使用變數b。

```javascript
if(true) {//在代碼區塊內以 let、var 分別宣告變數
//代碼區塊開始
  let a = 10;
  var b = 1;
//代碼區塊結束
    if(true) {
        console.log(a); // 10
        console.log(b); // 1
    }
}
//輸出結果:
console.log(a); // ReferenceError: a is not defined.
console.log(b); // 1
```

### let不允許在同級代碼區塊重複宣告同一變數

比較如下列程式碼，在同一代碼區塊不能宣告相同名稱的變數。

```javascript
// 報錯，重複宣告變數
function func() {
  let a = 10;
  var a = 1;
}
```

```javascript
// 報錯，重複宣告變數
function func() {
  let a = 10;
  let a = 1;
}
```

```javascript
////函數內傳入變數與{}內屬同一代碼區塊，所以不允許重複宣告變數
function func(arg) {
  let arg;
}
func() // 報錯，重複宣告變數
```

```javascript
function func(arg) {
  if(true) {
    let arg;//子代碼區塊可以宣告與父代碼區塊相同變數
  }
}
func() // 不報錯，因為arg存在於不同代碼區塊
```

### 暫時性死區(TDZ)

TDZ是指某個代碼區塊存在let宣告的變數，此宣告雖然已經綁定此代碼區塊，但在還沒執行到宣告變數那一行程式碼前都無法使用該變數
，所以在這前的區域稱為此變數的暫時性死區（temporal dead zone，簡稱TDZ）。

```javascript
//例1:
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError，因為在此代碼塊存在let宣告變數，那let變數就已經作用於本代碼塊內，所以要是在宣告前就使用變數賦值就會造成TDZ
  let tmp;
}
```

```javascript
//例2:
if (true) {
  // TDZ開始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ結束，在這行之前都是tmp的"死區"
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}
```

```javascript
//例3:
typeof x; // ReferenceError，因為let TDZ的關係typeof亦有可能報錯，作為比較若不使用let則不會報錯
let x;
```

```javascript
//例4:
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 報錯，這裡報錯因為賦值給x時y還尚未被賦值，也屬於"死區"
//但改成下面這樣就不會報錯，因為x已被宣告為2
function bar(x = 2, y = x) {
  return [x, y];
}
bar(); // [2, 2]
```

```javascript
//例5:
var x = x;//不報錯
//上下比較
let x = x;//報錯，x尚未被宣告屬於"死區" ReferenceError: x is not defined
```

### 變數提升

var宣告的變數會發生"變數提升"現象，即變數是可以在宣告之前使用，值是undefined，而let宣告的變數一定要在宣告之後才能使用，否則報錯

```javascript
// var 的情况
console.log(foo); // 輸出undefined
var foo = 2;

// let 的情况
console.log(bar); // 報錯ReferenceError
let bar = 2;
```

### 塊級作用域

​經過上面幾種特性比較，讓我們看看塊級作用域，let實際上為javascript新增了塊級作用域，
塊級作用域是指宣告變數影響作用的範圍，
如見下面例子打印n結果為5，顯示了外層代碼塊不受內層代碼塊影響，若是用var宣告則會輸出10

```javascript
function f1() {
    //外層代碼塊
  let n = 5;
  if (true) {
      //內層代碼塊
    let n = 10;
  }
  console.log(n); // 5
}
```

​ES6允許塊級作用域任意嵌套，如以下(中括號{}表示一層代碼區塊):

```javascript
//例1:
{{{{
  {let insane = 'Hello World'}
  console.log(insane); // 報錯，因為同層代碼塊並未宣告insane
}}}};
//例2:
{{{{
  let insane = 'Hello World';
  {let insane = 'Hello World'}//內層可以重新宣告與外層同名變數
}}}};
```

### Let VS Var 快速比較小表

|               | let                                          | var                   |
| ------------- | -------------------------------------------- | --------------------- |
| 變數有效區域  | let宣告的變數只會在其所在的代碼塊有效  | var在代碼塊外依然有效 |
| 重複宣告變數  | let不允許在同代碼塊重複宣告同一變數    | var允許重複宣告變數   |
| 暫時性死區TDZ | let會有TDZ問題                        | var不會有TDZ問題      |
| 變數提升      | let不存在變數提升                      | var存在變數提升       |

## Const

​下面將使用const宣告變數的幾種特性給條列出來:

### 1. const 一旦宣告就需要初始賦值，若無賦值則報錯

```javascript
//例1:
const foo;//報錯，因需要初始值 SyntaxError: Missing initializer in const declaration
```

### 2. const 一旦宣告其值不能再變

```javascript
//例2:
const PI = 3.1415;
console.log(PI) // 3.1415
PI = 3;// 再賦值就會報錯TypeError: Assignment to constant variable.
```

### 3. const的作用域與let相同，只在宣告所在的塊級作用域有效

```javascript
//例3:
if (true) {
  const num = 5;
}
console.log(num) // 報錯，因MAX只在定義所在的塊級作用域有效 Uncaught ReferenceError: MAX is not defined
```

### 4. const宣告變數也不存在變數提升，亦存在暫時性死區，只能在宣告後使用變數

```javascript
//例4:
if (true) {
  console.log(MAX); // 報錯，不存在變量提升，ReferenceError
  const MAX = 5;
}
```

### 5. const與let一樣都不能重複宣告

```javascript
//例5:
var message = "Hello!";
let age = 25;

// 以下兩行都會報錯
const message = "Goodbye!";
const age = 30;
```

### 6.const宣告之複合類型的數據其本身數據結構可變，簡單類型的數據不可變

本質上const對於簡單類型的數據(數值、字串、布林值)保證變量指向的內存地址所保存的數據不能改動，因為簡單類型的數據的值就保存在那個內存地址那就等同於不變的常量；而對於複合類型的數據(對象、數組)，變量指向的內存地址保存的只是一個指向實際數據的指針，const只能保證此指針不變(保證指向一固定地址)，並不能保證其數據結構不變。

```javascript
//例1:
const foo = {};
// 因為對像本身數據結構是可變的，所以為foo添加屬性，可以成功
foo.prop = 123;
foo.prop // 123

// 但是將foo指針指向另一對象，就會報錯
foo = {}; // TypeError: "foo" is read-only
//例2:
const a = [];
a.push('Hello'); // 可執行
a.length = 0;    // 可執行
a = ['Dave'];    // 報錯
//a是一個數組，數組本身可寫，但如果重新賦值，就會報錯
```

```javascript
//如果希望對像數據結構不變，應凍結期對象
const foo = Object.freeze({});

// 常規模式，下行不起作用；嚴格模式，下行會報錯
foo.prop = 123;
//-----------------
//下列為凍結對象一併凍結對像屬性的方法
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};
```

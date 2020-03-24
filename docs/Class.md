---
id: Class
title: Class (類)
sidebar_label: Class (類)
---

## Class(類)介紹與基本寫法

JavaScript 語言中，在ES6以前生成實例物件是通過構造函數。ES6引入了Class（類）這個概念，作為物件的模板。
基本上，ES6的class可以看作是一個語法糖，它的絕大部分功能，ES5都可以做到，新的class寫法只是讓物件原型的寫法更加清晰、更像面向物件導向的語法而已。
下面與ES6以前的寫法做比較 :

```javascript
//ES6以前寫法
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);//特別注意，new了之後Point內this指向前實例物件而不是windos

console.log(p.toString())//輸出 : (1, 2)

console.log(typeof Point) //輸出 : "function"
console.log(Point === Point.prototype.constructor) //輸出 : true
```

等同
<!-- let 新變數名 = class Point{...} -->
```javascript
//ES6 Class寫法
class Point {  
  constructor(x, y) {//構造函數
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

  ['toString1']() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

let p = new Point(1, 2);//使用的時候，也是直接對Class使用new

console.log(p.toString())//輸出 : (1, 2) ，要使用也是直接調用函數
console.log(p['toString1']())//輸出 : (1, 2) ，亦可以['toString1']調用函數與命名

//Class的數據類型就是函數，Class本身就指向構造函數。
console.log(typeof Point) //輸出 : "function"
console.log(Point === Point.prototype.constructor) //輸出 : true
```

上面Class寫法定義了一個"Class"，可以看到裡面有一個constructor函數，它是Class的構造函數，當使用new生成實例物件時，constructor函數會自動調用，而this則指向當前實例物件。所以完全可以看作是另一種寫法。

注意，定義Class的函數的時候，前面不需要加上function這個關鍵字，直接把函數宣告放進去了就可以了。另外，上面Point Class除了構造函數(constructor)，還定義了一個toString函數。而函數之間不需要逗號分隔，加了會報錯。

## 取值函數（getter）和存值函數（setter）

在Class內亦開放取值函數（getter）和存值函數（setter）供取值前、存值前可做額外操作。以下是一個例子，

```javascript
class MyClass {

  constructor() {
    //...
  }
  get prop() {//取值函數（getter）
    return this._prop;
  }
  set prop(value) {//存值函數（setter）
    console.log('setter: '+ value );
    this._prop = value;
  }
}

let inst = new MyClass();

inst.prop=1; //使用setter 函數 ，會先輸出:  setter: 1，並將 this._prop賦值為 1

console.log(inst.prop);//使用getter 函數 ，取得返回值 this._prop，輸出: 1
```

## 靜態(static) 函數、屬性

如果在一個Class中的函數前，加上static關鍵字，就表示該函數是直接通過class來調用，這就稱為"靜態函數"。下面展示調用"靜態函數"的例子。(靜態屬性亦然)

```javascript
class Foo {
  static classMethod() {//靜態函數
    return 'hello';
  }

  static i = 0;//靜態屬性
}

console.log(Foo.classMethod()); // 輸出 : hello
console.log(Foo.i); // 輸出 : 0

var foo = new Foo();
foo.classMethod();// TypeError: foo.classMethod is not a function，因為該函數是直接通過class來調用，否則會拋出錯誤
```

注意，如下例如果調用"靜態函數"其內包含this關鍵字，如this.baz()，這個this指向類下靜態函數baz()；屬性亦然。另外，從這個例子還可以看出，靜態函數可以與非靜態函數重名。

```javascript
class Foo {
  static bar() {
    this.baz();//指向static baz(){...}
  }
  
  static staticpropbaz= 'static prop baz';

  static baz() {
    console.log('static baz');
    console.log(this.staticpropbaz);
  }
  
  bar(){
    this.baz();
  }
  
  staticbaz = 'prop baz';

  baz() {
    console.log('baz');
    console.log(this.staticbaz);
  }
}

Foo.bar();//輸出 : static baz 與 static prop baz

let nFoo =new Foo();
nFoo.bar();//輸出 :　baz 與 prop baz
```

## Class(類)繼承

class的繼承需要使用 "extends" 關鍵字，而被繼承就相對成了父類；繼承就相對成了子類，例如 :

```javascript
class Point {
    constructor(x, y) {
    this.x = x;
    this.y = y;
  }
    .
    .
    .
}

class ColorPoint extends Point {//該ColorPoint類通過 "extends"，繼承了Point類的所有屬性和函數。
    constructor(x, y, color) {
    super(x, y); // 一定要調用父類的constructor(x, y)!!!
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 調用父類的toString()
  }
}

let CP = new ColorPoint(1, 2, 3);
```

上面constructor函數和toString函數之中，都出現了"super"，它在這裡表示父類的構造函數，用來新建父類的this物件。

子類必須在constructor函數中調用super函數，否則new的時候會報錯。這是因為子類自己的this物件，必須先通過父類的構造函數完成塑造，得到與父類同樣的屬性和函數，然後再對其進行加工，加上子類自己的實例屬性和函數。也就是說如果不調用super函數，子類就得不到this物件。例如下面例子 :

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color; // ReferenceError，不能在super之前使用this，子類此時還沒有this物件
    super(x, y);
    this.color = color; // 正確
  }
}

let CP = new ColorPoint(1, 2, 3);
```

最後，父類的靜態函數，也會被子類繼承。

```javascript
class A {
  static hello() {
    console.log('hello world');
  }
}

class B extends A {
}

B.hello()  //輸出 :  hello world
```

上面程式碼中，hello()是A類的靜態函數，B繼承A，也繼承了A的靜態函數。

 ## [Class(類) 程式碼片段 (Snippets)連結](./ClassSnippets)
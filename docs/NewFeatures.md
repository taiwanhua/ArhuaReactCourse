---
id: NewFeatures
title: 擴充功能(New Features)
sidebar_label: 擴充功能(New Features)
---

## 擴充功能(New Features)

這裡彙整一些ES6常用擴充的功能。

## 函數的擴充功能

### rest參數

ES6引入rest參數，用於獲取函數的多餘參數，rest參數搭配的變數是一個陣列，該變數將多餘的參數放入陣列中。

```javascript
function add(...values) {//注意!! rest參數必須是最後一個參數，否則會報錯。
    console.log(values);
}

add(2, 5, 3) //輸出 : [2, 5, 3]
```

### 箭頭函數

箭頭函數允許我們以更簡潔的方式宣告函數，以下比較:

```javascript
//箭頭函數
const f = v =>  v ; //傳入參數 v，並 return "=>" 右方內容
//或
const f = v => { return v; };

// 等同
const f = function (v) {
  return v;
};
```

以下列出幾個需要注意的點

(1) 若不需要傳入參數，可以 () 表示，如 :

```javascript
const f = () => 5;
// 等同
const f = function () { return 5 };
```

(2) 傳入多個參數

```javascript
const f = (a, b) => a + b;
// 等同
const f = function (a, b) { return a + b };
```

(3) "=>" 右方無 {} ，代表直接return "=>" 右方內容，但是若想直接返回物件，又因為物件的 {} 被解析為代碼區塊，所以若要直接return物件要加上 () 。

```javascript
const f = (a, b) => a + b;//直接 return a + b

const f = (a, b) => { x : a + b} //{}被解析為代碼區塊又x被解析為 a + b 的標籤，所以僅執行了 a + b ，但無回傳值，所以若console.log(f(1,2)) 則輸出 undefined

const f = (a, b) => { x : a + b ,y : a - b}//報錯，{}被解析為代碼區塊，而無法解析x : a + b ,y : a - b 所以報錯

const f = (a, b) => ({ x : a + b}) // 直接 return 物件 { x : a + b}
```

(4) 箭頭函數亦能搭配解構賦值、默認值使用，詳見[解構賦值-參數的解構賦值](./Destructuring#參數的解構賦值)

## 陣列的擴充功能

### 陣列的擴展運算符

擴展運算符（spread）是三個點（...）。會將一個陣列轉為用逗號分隔的參數序列。
如 ...[1,2,3] 轉為 1,2,3 。

(1) 作為陣列內值轉化為函數參數使用。

```javascript
function add(x, y) {//需要傳入參數 x , y
  return x + y;
}

const numbers = [4, 38];
console.log(add(...numbers)); //擴展運算符將陣列轉為 4,38 傳入函數內，即為 add(4, 38)，所以輸出 : 42
//請注意，擴展運算符只有在函數調用時可以擺在()內，否則報錯。
```

(2) 擴展運算符搭配表達式使用

```javascript
let x=-5;

const arr = [
  ...(x > 0 ? ['a'] : []),
  'b',
];

console.log(arr); // 輸出 : ["b"] ；若令 x 為大於0的數，則輸出 : ["a" ,"b" ]
```

(3) 複製陣列

```javascript
const a1 = [1, 2];
const a2 = a1;

a2[0] = 2;

console.log(a1); // [2, 2]
```

上面的例子，並沒有重新複製a1成為新陣列a2，只是將a2指向與a1同一記憶體的址而已，所以改動a2的值會連帶影響a1的值，假使要做到真正的複製使用擴展運算符可以簡單做到如下 :

```javascript
const a1 = [1, 2];
// 寫法一
const a2 = [...a1];
// 寫法二
// const [...a2] = a1;

a2[1]=200;

console.log(a1);// [1, 2]
console.log(a2);// [1, 200]
```

(4) 合併陣列

```javascript
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

let p =[...arr1, ...arr2, ...arr3]

p[4]='改arr3裡的e'
console.log(arr1);//輸出 : ["a", "b"]
console.log(arr2);//輸出 : ["c"]
console.log(arr3);//輸出 : ["d", "e"]
console.log(p);//輸出 : ["a", "b", "c", "d", "改arr3裡的e"]
```

如上方代碼，陣列可以很方便的被複製，且修改 p 內的值並不會影響到 arr3，但這其實屬於淺拷貝，需要特別注意，舉例來說我們看下面代碼 :

```javascript
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e', arr2];//將arr3[2] 指向 arr2的址，['d', 'e', ['c']]

let p = [...arr1, ...arr2, ...arr3]

p[5][0]='改arr3裡的arr2[0]'
p[4]='改arr3裡的e'
console.log(arr1);//輸出 : ["a", "b"]
console.log(arr2);//輸出 : ["改arr3裡的arr2[0]"]，p[5][0]改變後連帶被改變
console.log(arr3);//輸出 : ["d", "e", ["改arr3裡的arr2[0]"]]，p[5][0]改變後"e"沒有被連帶改變，arr2 但連帶被改變
console.log(p);//輸出 : ["a", "b", "c", "d", "改arr3裡的e", ["改arr3裡的arr2[0]"]]
```

(5) 搭配解構賦值使用

```javascript
//請注意搭配解構賦值使用擴展運算符，必須在在後一個位置否則報錯，如 [a, ...b ,c] = [1, 2, 3, 4, 5]; 就會報錯

const [first, ...rest] = [1, 2, 3, 4, 5];
console,log(first); // 1
console,log(rest); // [2, 3, 4, 5]

const [first, ...rest] = [];
console,log(first); // undefined
console,log(rest);  // []

const [first, ...rest] = ["foo"];
console,log(first);  // "foo"
console,log(rest);   // []
```

(6) 搭配字串使用

```javascript
console.log([...'hello']); 輸出 : // [ "h", "e", "l", "l", "o" ]
```

### find()、findIndex()

find()、findIndex()函數非常類似，可接受三個參數，依次為當前的值、當前的位置和原陣列；
前者返回第一個符合條件的陣列成員的值，如果所有成員都不符合條件，則返回 undefined。
；後者返回第一個符合條件的陣列成員的位置，如果所有成員都不符合條件，則返回 -1。

```javascript
let result = [1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
})

console.log(result)//輸出 : 10

let result = [1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
})

console.log(result)//輸出 : 2
```

### flat()、flatMap()

flat()會把陣列"拉平"指定層數，如 :

```javascript
console.log([1, 2, [3, [4, 5]]].flat());// 預設拉平一層，輸出 : [1, 2, 3, [4, 5]]

console.log([1, 2, [3, [4, 5]]].flat(2));// 輸出 : [1, 2, 3, 4, 5]，flat()的參數為2，表示要"拉平"兩層。

console.log([1, [2, [3]]].flat(Infinity));// 輸出 : [1, 2, 3]，"拉平" 無限層

```

flatMap()則是只能"拉平"一層，但能對每個成員執行一個函數

```javascript
// 等同 [[2, 4], [3, 6], [4, 8]].flat()
console.log([2, 3, 4].flatMap((x) => [x, x * 2])); // 輸出 : [2, 4, 3, 6, 4, 8]

// 等同 [[[2]], [[4]], [[6]], [[8]]].flat()
console.log([1, 2, 3, 4].flatMap(x => [[x * 2]]));// 輸出 : [[2], [4], [6], [8]]
```

## 字串的擴充功能

### 字串遍歷

可以使用 for ... of 對字串進行遍歷，如下分別輸出"f"、"o"、"o"。

```javascript
for (let codePoint of 'foo') {
  console.log(codePoint)
}
// 輸出 : "f"
// 輸出 : "o"
// 輸出 : "o"
```

### 模板字串

模板字串是在字串拼接時非常好用的一個強力功能，如下 :

(1) 普通字串

```javascript
`In JavaScript Cool Yes No.`
```

(2) 普通字串內加入變數，透過 ${ }

```javascript
let {name ,time}= {name : "Bob", time : "today"};

console.log(`Hello ${name}, how are you ${time}?`) //Hello Bob, how are you today?
```

(3) ${ } 內部可以放入任意的JavaScript 表達式，可以進行運算，以及引用物件屬性與調用函數。

```javascript
let x = 1;
let y = 2;

console.log(`${x} + ${y * 2} = ${x + y * 2}`);
// "1 + 4 = 5"

let obj = {x: 1, y: 2};
console.log(`${obj.x + obj.y}`);
// "3"

function fn() {
  return "Hello World";
}

console.log(`foo ${fn()} bar`);// foo Hello World bar

```

### 標籤模板（tagged template）

模板字串可以接在一個函數的後面，該函數將以此模板字串作為參數調用。

```javascript
 const logArgs = (...args) => { console.log(...args)}
// 比較以下兩種不同點，緊接在函數後面logArgs`Hello....的模板字串，會被解析成陣列

//例1 :
logArgs`Hello ${'模板1'} world ${'模板2'} `//輸出 : ["Hello ", " world ", ""] "模板1" "模板2"

//例2 :
logArgs(`Hello ${'模板1'} world ${'模板2'} `)//輸出 : Hello 模板1 world 模板2

//也就是說 例1 是以 logArgs(["Hello ", " world ", ""],"模板1","模板2")的形式調用
```

<!-- ## 數值的擴充功能 -->

## 物件的擴充功能

物件（object）在ES6對它進行了重大升級，將介紹數據結構本身的改變，再介紹Object物件的新增方法。

### 物件內成員簡寫

```javascript
const foo = 'bar';
const baz = {foo};  // 等同 const baz = {foo: foo};
console.log(baz); // 輸出 : {foo: "bar"}
```

上面是一個直接將已宣告變數丟進物件的簡寫，下面舉例 : 簡寫很適合用在函數 return 時。

```javascript
function f(x, y) {
  return {x, y}; //等同 return {x: x, y: y};
}

console.log(f(1, 2)); // 相當於x代1、y代2，然後套用簡寫如上例，最後輸出 : {x: 1, y: 2}

//return時簡寫
function getPoint() {
  const x = 1;
  const y = 10;
  return {x, y};
}

console.log(getPoint());//輸出 : {x:1, y:10}
```

若在物件內成員是函數，也可以簡寫如 :

```javascript
const o = {
  method() {
    return "Hello!";
  }
};

// 等同
const o = {
  method: function() {
    return "Hello!";
  }
};
```

下方是一個綜合的例子 :

```javascript
let birth = '秘密';

const Person = {

  name : "Arhua",

  birth,//等同 birth: birth

  hello() { console.log('我的名字是', this.name ,`生日是${this.birth}`); }// 等同 hello: function  { console.log('我的名字是', this.name);}
                                                                        //  此this指向物件本身，所以this.name 為 Arhua
};

Person.hello(); // 輸出 : 我的名字是 Arhua 生日是秘密
```

### 為物件設定、取得成員

(1) 在物件外設定成員

```javascript
let obj = {};

// 方法一
obj.foo = true;// 以foo 為Key，true為Value

// 方法二
obj['a' + 'bc'] = 123; // 以'abc' 為Key，123為Value

console.log(obj); // 輸出 : {foo: true, abc: 123}
```

(2) 在物件內設定成員

```javascript

let propKey = 'foo';

let obj = {
  // 方法一
  [propKey]: true, // 以foo 為Key，true為Value
  // 方法二
  ['a' + 'bc']: 123, // 以'abc' 為Key，123為Value
  // 方法三 (函數)
  ['h' + 'ello']() {// 以'hello' 為Key，hello(){...} 為Value
    return 'hi';
  }
};

console.log(obj);// 輸出 : {foo: true, abc: 123, hello: ƒ}
```

(3) 物件內成員取用

我們以上面 (2) 接續舉例

```javascript
//取值
console.log(obj.foo);// 輸出 : true
console.log(obj['foo']);// 輸出 : true
console.log(obj[propKey]);// 輸出 : true
console.log(obj.abc);// 輸出 : 123
console.log(obj['abc']);// 輸出 : 123
console.log(obj['ab'+'c']);// 輸出 : 123
console.log(obj.hello());//輸出 : hi
console.log(obj['hello']());//輸出 : hi
console.log(obj.hello);//輸出 : (僅字串) ƒ ['h' + 'ello']() {// 以'hello' 為Key，hello(){...} 為Value
                       //                                     return 'hi';
                       //                           }

```

### 物件的 this 與 super

this指向函數所在的物件，如 :

```javascript
const proto = {
  foo: 'hello',
  thisis :  function thisfunction(){ return this.foo}
};

console.log(proto.thisis()); // 輸出 : hello
```

ES6新增了super，它是指向"物件的函數所在的當前物件"的原型物件 ( __proto__ )。
注意 : super只能用在"物件的函數"之中，用在其他地方都會報錯。另外目前，只有物件函數的簡寫法可以讓JavaScript引擎確認，定義的是物件的函數。
換句話說，如下裡那種find()簡寫寫法，才可以使用super

```javascript
const proto = {
  foo: 'hello'
};

const obj = {
  foo: 'world',
  find() {
    return super.foo; //find函數所在的當前物件為obj，所以super就是指向 obj.__proto__
  }
};

Object.setPrototypeOf(obj, proto); //將 proto加入至obj的原型物件(obj.__proto__)中，obj.__proto__中就會有一成員Key為foo，Value為'hello'
console.log(obj.find()); //所以輸出 :  "hello" ，而不是 "world"
```

在看下面一個綜合的例子 ，調用原型物件裡的foo()後因其this指向obj，所以this.x 為 'world'

```javascript
const proto = {
  x: 'hello',
  foo() {
    console.log(this.x);
  },
};

const obj = {
  x: 'world',
  foo() {
    super.foo();
  }
}

Object.setPrototypeOf(obj, proto);//將 proto加入至obj的原型物件(obj.__proto__)中，此時在obj中proto為其原型物件

obj.foo() //輸出 : "world"
```

### 物件的擴展運算符

(1) 搭配解構賦值使用

物件的解構賦值用於從另一個物件取值，相當於將另一個物件的所有成員，分配到指定的物件上面。如下x、y自等號右方解構，而z將其它所有成員拷貝過來，此拷貝是為淺拷貝。

注意! 搭配解構賦值使用擴展運算符...必須在最後一個位置，如 { x, y, ...z }
<!-- ...沒有復制它的原型物件的屬性。 -->
```javascript
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); //輸出 : 1
console.log(y); //輸出 : 2
console.log(z); //輸出 : { a: 3, b: 4 }
```

(2) 拷貝所有成員

即是取出物件的所有成員，並拷貝到當前物件之中。

```javascript
let z = { a: 3, b: 4 };
let n = { f: 200, ...z, u: 100};// ... 可以放在任意位置

console.log(n); // {f: 200, a: 3, b: 4, u: 100}
```

(3) 將陣列、字串轉為物件

```javascript
let foo = { ...['a', 'b', 'c'] };
console.log(foo);
// {0: "a", 1: "b", 2: "c"}

console.log({...'hello'});
// {0: "h", 1: "e", 2: "l", 3: "l", 4: "o"}
```

### 鏈判斷運算符

如果要讀取物件內部的某個屬性，往往需要判斷一下該物件是否存在。比如，要讀取message.body.user.firstName，安全的寫法是寫成下面這樣。

```javascript
const firstName = (message
  && message.body
  && message.body.user
  && message.body.user.firstName) || 'default';
```

作為簡化可以透過"?."這樣寫 :

```javascript
const firstName = message?.body?.user?.firstName || 'default';
```

鏈判斷運算符 "?." 會檢查左側的物件是否為null或undefined。<br/>
如果是的，就返回undefined，否則接續運算右側的物件。而
"?."共有三種寫法

- 物件?.Key // 若物件不為null或undefined，則返回 物件.Key的Value
- 物件?.['Key'] // 同上
- 函數?.(...args) // 若函數或物件的方法不為null或undefined，調用該函數或物件的方法，args 可傳入參數

### Null判斷運算符

讀取物件成員的時候，如果某個成員的值是null或undefined，有時候需要為它們指定默認值。常見做法是通過||運算符指定默認值。

```javascript
const headerText = response.settings.headerText || 'Hello, world!';
```

上面的三行代碼都通過||運算符指定默認值，但是這樣寫是錯的。開發者的原意是，只要屬性的值為null或undefined，默認值就會生效，但是屬性的值如果為空字符串或false或0，默認值也會生效。
為了避免這種情況，ES2020引入了一個新的Null判斷運算符??。它的行為類似||，但是只有運算符左側的值為null或undefined時，才會返回右側的值。

```javascript
const headerText = response.settings.headerText ?? 'Hello, world!';

```

 ## [擴充功能程式碼片段 (Snippets)連結](./NewFeaturesSnippets)
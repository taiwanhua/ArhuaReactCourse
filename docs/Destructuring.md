---
id: Destructuring
title: 解構賦值(Destructuring)
sidesays_label: 解構賦值(Destructuring)
---

## 解構賦值

ES6 允許按照一定模式，從陣列和物件中提取值，對變數進行賦值，這被稱為解構（Destructuring）。

### 陣列的解構賦值

只要等號兩邊模式相同，左邊變數就會被賦上對應的值，使用例子如下:

```javascript
//以前ES5只能這樣給變數賦值
let a = 1;
let b = 2;
let c = 3;

//現在能夠這樣寫，效果等同上面一個個賦值
let [a, b, c] = [1, 2, 3];

//又如 :
let [name, [[says], baz]] = [1, [[2], 3]];
console.log(name); // 1
console.log(says); // 2
console.log(baz); // 3

let [ , , third] = ["name", "says", "baz"];
console.log(third); // "baz"

let [x, , y] = [1, 2, 3];
console.log(x); // 1
console.log(y); // 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

```

如果解構不成功，變數的值就等於undefined

```javascript
let [x, y, ...z] = ['a'];
console.log(x); // "a"
console.log(y); // undefined
console.log(z); // []

let [name] = [];//name=undefined
let [says, name] = [1];//name=undefined

```

不完全解構的情況(左邊元素少於右邊元素)，可以成功:

```javascript
let [x, y] = [1, 2, 3];
console.log(x); // 1
console.log(y); // 2

let [a, [b], d] = [1, [2, 3], 4];
console.log(a); // 1
console.log(b); // 2
console.log(d); // 4

```

陣列解構時如果右邊並非陣列，就會報錯

```javascript
let [name] = 1;//報錯
let [name] = false;//報錯
let [name] = NaN;//報錯
let [name] = undefined;//報錯
let [name] = null;//報錯
let [name] = {};//報錯
```

解構賦值允許指定默認值，而ES6內部使用嚴格相等運算符(===)，判斷一個位置是否有值。所以，只有當一個 **陣列元素等於undefined，默認值才會生效** ，包含null值也不會生效因為null並不嚴格等於undefined。

```javascript
let [name = true] = [];
console.log(name); // true

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

let [x = 1] = [undefined];
console.log(x); // 1

let [x = 1] = [null];
console.log(x); // null

//給函數作為默認值
function f() {
  console.log('aaa');
}

let [x = f()] = [1];//x=1，因為x能解構賦值的到1，f()根本不會被調用

```

默認值可以引用解構賦值的其他變數，但該變數必須是已定義的

```javascript
let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError: y is not defined

```

### 物件的解構賦值

解構賦值不只用於陣列，物件亦然，但有一不同點，物件的解構賦值不需要排列順序一致，但需要Key名相同；而陣列不存在Key名，所以左右邊排列順序須一致。

```javascript
let { name, says } = { name: 'aaa', says: 'bbb' };
console.log(name); // "aaa"
console.log(says); // "bbb"


let { says, name } = { name: 'aaa', says: 'bbb' };
console.log(name); // "aaa"
console.log(says); // "bbb"

let { baz } = { name: 'aaa', says: 'bbb' };
console.log(baz); // 右邊並沒有Key名為baz，所以是undefined

//物件Math內有log、sin、cos，透過解構賦值就能夠直接獲得值
let Math = {log: 10, sin: 0.5 ,cos: 0.333};
let { log, sin, cos } = Math;
console.log(log);//10
console.log(sin);//0.5
console.log(cos);//0.333
```

物件的解構賦值有一點要注意，事實上物件的解構賦值是下面程式碼的簡寫，也就是說物件的解構賦值是先找到同名Key名，然後再賦給對應的變數值，
若無像例3那樣指定後面的變數Key名，則變數的Key名默認與同名Key名相同(如例2)。換句話說，這可以用在解構後想重新命名的情況。

```javascript
//例1:
let { name: name, says: says } = { name: 'aaa', says: 'bbb' };//

//1等同2
//例2:
let	{ name, says } = { name: 'aaa', says: 'bbb' };//(解構賦值簡寫)

//例3:
let { name: baz } = { name: 'aaa', says: 'bbb' };//
console.log(baz) // "aaa"

//例4:
let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
console.log(f); // 'hello'
console.log(l); // 'world'
```

與陣列一樣，解構賦值也可以用於嵌套結構的物件

```javascript
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p: [x, { y }] } = obj;
console.log(x); // "Hello"
console.log(y); // "World"

//值得注意的是上面程式碼，此時p是匹配的Key名，所以不會被賦值，若p也要作為變數賦值，可以寫成下面這樣:
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p, p: [x, { y }] } = obj;
console.log(x); // "Hello"
console.log(y); // "World"
console.log(p); // ["Hello", {y: "World"}]
```

下面是另一个例子。

```javascript
const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};

let { loc, loc: { start }, loc: { start: { line }} } = node;
console.log(line) // 1  等同 let { loc, loc: { start }, loc: { start: { line:line }} } = node;(縮寫)
console.log(loc)  // Object {start: Object} 等同 let { loc:loc, loc: { start }, loc: { start: { line:line }} } = node;
console.log(start) // Object {line: 1, column: 5} 等同 let { loc, loc: { start:start }, loc: { start: { line }} } = node;
```

上面解構賦值中，loc是 loc : loc 縮寫方式，先找相同Key再賦值給同名變數。
下面是"嵌套賦值"的例子，是一非常實用的功能:

```javascript
let obj = {};
let arr = [];

({ name: obj.prop, says: arr[0] } = { name: 123, says: true });

console.log(obj); // {prop:123}
console.log(arr); // [true]  

//如果解構模式是嵌套的物件而且子物件的父物件不存在，那將會報錯
//如下name解構時解構不成功等於undefined，此時不抱錯，再往下取子物件就會報錯，因為相當於取undefined的子物件
let {name: {says}} = {baz: 'baz'};//報錯
```

需要注意一點，解構賦值是可以取得子屬性的:

![打印結果](/docs/assets/img00001.jpg)

```javascript
const obj1 = {};
const obj2 = { foo: 'bar' };
Object.setPrototypeOf(obj1, obj2);//如上圖打印obj1

const { foo } = obj1;
console.log(foo); // "bar"
//foo 並不是odj1自身的屬性，而是繼承自obj2的屬性，但是解構賦值可以取到此屬性
```

物件的解構賦值也可以像陣列一樣指定默認值，生效條件一樣也是"屬性值嚴格等於undefined"

```javascript
let {x = 3} = {};
console.log(x); // 3

let {x, y = 5} = {x: 1};
console.log(x); // 1
console.log(y); // 5

let {x: y = 3} = {};
console.log(y); // 3

let {x: y = 3} = {x: 5};
console.log(y); // 5

let { message: msg = 'Something went wrong' } = {};
console.log(msg); // "Something went wrong"

//生效條件是"屬性值嚴格等於undefined"
let {x = 3} = {x: undefined};
console.log(x); // 3

let {x = 3} = {x: null};
console.log(x); // null ，因為null與undefined不嚴格相等所以不啟用默認值
```

下面將幾種需要注意的錯誤列出來:

（1）如果要將一個已定義的變數用於解構賦值，不能將 " { " 置於行首，因為javascript引擎會將{x}解析成一代碼塊，從而發生代碼錯誤， 避免javascript解析為代碼塊才能解決此問題，

``` javascript
//錯誤寫法
let x;
{x} = {x: 1};// SyntaxError: syntax error

//正確寫法
let x;
({x} = {x: 1});//放在一個圓括號裡可以正常執行 但無法寫成 ({x:c} = {x: 1}) 會報錯
```

（2）解構賦值允許等號左邊不放置任何變數名，因此雖然無意義但語法合法可執行。

```javascript
({} = [true, false]);
({} = 'abc');
({} = []);
```

（3）由於陣列其實是特殊的物件，因此可以對陣列進行物件屬性的解構。這在陣列轉物件時很好用。

```javascript
let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;//屬性名表達式
console.log(first); // 1
console.log(last); // 3
```

### 字串的解構賦值

字串也可以解構賦值，因為字串此時被轉成了類似陣列的物件。

```javascript
const [a, b, c, d, e] = 'hello';
console.log(a); // "h"
console.log(b); // "e"
console.log(c); // "l"
console.log(d); // "l"
console.log(e); // "o"
```

而類似於陣列的物件都有一個length屬性，因此亦可以對此屬性進行解構賦值。(如 Object.setPrototypeOf 的那個屬性)

```javascript
let {length : len} = 'hello';//屬性length
console.log(len); // 5
```

### 參數的解構賦值

函數的參數也可以使用解構賦值，如下給函數add傳入參數，經過解構賦值後成了變數x與y。

```javascript
function add([x, y]){
  return x + y;
}

add([1, 2]); // 回傳 : 3

//使用map()亦然

[[1, 2], [3, 4]].map(([a, b]) => a + b);
// 得新陣列 : [ 3, 7 ]

[1, undefined, 3].map((x = 'yes') => x);
// 得新陣列 : [ 1, 'yes', 3 ]
```

當然也可以使用默認值，若傳入值為undefined就會觸發使用函數參數的默認值。

```javascript
function move({x = 0, y = 0} = {}) {
  return [x, y];
}

//注意以下move({x = 0, y = 0} = {})會先檢查參數是否為undefined
move({x: 3, y: 8}); // 回傳 : [3, 8]
move({x: 3}); // 回傳 : [3, 0] ， {x = 0, y = 0} = {x: 3} 解構發現 y 為undefined，觸發y的默認值0
move({}); // 回傳 : [0, 0] ，{x = 0, y = 0} = {} 解構發現 x , y 為undefined，觸發x、y的默認值0
move(); // 回傳 : [0, 0] ，move(物件參數 = {})中物件參數傳入undefined，觸發move函數的默認值{}，再解構觸發x、y的默認值0

//若將move函數改寫如
function move({x = 0, y = 0} = {x: 1}) {
  return [x, y];
}

move(); // 回傳 : [1, 0]，move(物件參數 = {})中物件參數傳入undefined，觸發move函數的默認值{x: 1}，再解構x為1、觸發y的默認值0

//下方更進一步改寫，可以更清楚的理解其過程
function move({x, y} = { x: 0, y: 0 }) {//是為函數move的參數指定默認值，而不是為變數x和y指定默認值
  return [x, y];
}

move({x: 3, y: 8}); // 回傳 : [3, 8]
move({x: 3}); // 回傳 : [3, undefined]
move({}); // 回傳 : [undefined, undefined]
move(); // 回傳 : [0, 0]
```

<!-- ### 應用場景大解析 -->

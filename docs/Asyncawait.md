---
id: Asyncawait
title: async / await (究極異步處理方案)
sidebar_label: async / await (究極異步處理方案)
---

 ## 基本介紹

ES2017 標準引入了async 函數，有了async 函數後使得異步操作變得更加方便，讓我們可以不用再遭遇以前的CallBack hell，所以稱他為究極異步處理方案。 

首先，async 函數內通常搭配 await 命令一起使用，async 函數內的語句，若沒有加上 await 命令就會以異步的方式執行所有語句；
若加上了await 命令就會等到這個await 命令後面的語句執行完後，再接著執行後面的語句。

> await命令後面，只能是Promise物件和原始類型的值（數值、字符串和布爾值，但這時會自動轉成立即resolved的Promise物件）。

```javascript

const asyncfunction = async () => {
    fetch('https://my-json-server.typicode.com/taiwanhua/demo/posts',
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : (3) [{…}, {…}, {…}]

    fetch('https://my-json-server.typicode.com/taiwanhua/demo/comments',
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : (2) [{…}, {…}]

    fetch('https://my-json-server.typicode.com/taiwanhua/demo/profile', 
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : {name: "typicode"}
}

asyncfunction();

//多執行幾次後，會發現因為async 函數內以異步的方式執行所有語句，所以每次不一定會按照由上到下的方式依序輸出如下
// (3) [{…}, {…}, {…}]
// (2) [{…}, {…}]
// {name: "typicode"}

```

```javascript

const asyncfunction = async () => {
    await fetch('https://my-json-server.typicode.com/taiwanhua/demo/posts',
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : (3) [{…}, {…}, {…}]

    await fetch('https://my-json-server.typicode.com/taiwanhua/demo/comments',
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : (2) [{…}, {…}]

    await fetch('https://my-json-server.typicode.com/taiwanhua/demo/profile', 
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : {name: "typicode"}
}

asyncfunction();

//加上 await後就會等到這個await 命令後面的語句執行完後，再接著執行後面的語句，所以就能依序輸出如下
// (3) [{…}, {…}, {…}]
// (2) [{…}, {…}]
// {name: "typicode"}

```

再給一個例子，實現休眠效果。JavaScript一直沒有休眠的語法，但是藉助await命令就可以較簡單的方法讓程序停頓指定的時間。

```javascript
function sleep(interval) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  })
}

// 用法
async function one2FiveInAsync() {
  for(let i = 1; i <= 5; i++) {
    console.log(i);
    await sleep(1000);
  }
}

one2FiveInAsync();
```

## 淺出 async 函數

以下將針對async 函數幾個特性作分析。

### async 函數回傳值與其內錯誤

(1) async函數返回一個Promise 物件。

(2) async函數內部return語句返回的值，會成為then方法回調函數的參數。如下 :

```javascript
async function f() {
  return 'hello world';
}

// console.log(f()) //輸出 : Promise {<resolved>: "hello world"}，說明async函數返回一個Promise 物件

f().then(v => console.log(`成功 ${v}`))//f() 返回一個Promise，所以可以使用then方法；並且async函數內部return語句返回的值，會成為then方法回調函數的參數。
//輸出 : 成功 hello world
```

(3) async函數返回的Promise物件，會在內部所有await命令後面的Promise物件執行完，才會發生狀態改變，除非遇到return語句或者拋出錯誤。也就是說，只有async函數內部的異步操作執行完，才會執行then方法指定的回調函數。

下面是一個例子，函數getTitle內部有三個操作：抓取網頁、取出文本、匹配頁面標題。只有這三個操作全部完成，才會執行then方法裡面的console.log。

```javascript
async function getTitle(url) {
  let response = await fetch(url);
  let html = await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle('https://tc39.es/ecma262/').then(console.log)
// 輸出 : "ECMAScript® 2020 Language&nbsp;Specification"
```

(4) async函數內部拋出錯誤，會導致Promise物件狀態發生改變其返回的Promise物件變為reject狀態。拋出的錯誤物件會被catch方法回調函數捕獲。

```javascript
async function f() {
  throw new Error('出錯了');
}

f().then(
  v => console.log(`成功 ${v}`),
  e => console.log(`失敗 ${e}`)
)//觸發第二個參數 e => console.log(`失敗 ${e}`)
// 輸出 : 失敗 Error: 出錯了
```

(5) async函數內await命令後面的Promise物件如果變為reject狀態，則reject的參數也會被catch方法的回調函數捕獲。

```javascript
async function f() {
  await Promise.reject('出錯了');
}

f()
.then(v => console.log(`成功 ${v}`))
.catch(e => console.log(`失敗 ${e}`))
// 出錯了
```

> 注意，上面例子中，await語句前面沒有return，但是reject方法的參數依然傳入了catch方法的回調函數。這裡如果在await前面加上return，效果是一樣的。

(6) async函數內任何一個await語句後面的Promise物件變為reject狀態，那麼整個async函數都會中斷執行。

```javascript
async function f() {
  await Promise.reject('出錯了');
  await Promise.resolve('hello world'); // 不會被執行
}

f()
.then(
  v => console.log(`成功 ${v}`),
  e => console.log(`失敗 ${e}`) 
) //輸出 : 失敗 出錯了
```

上面例子中，第二個await語句是不會執行的，因為第一個await語句狀態變成了reject。
但是有時，我們希望即使前一個異步操作失敗，也不要中斷後面的異步操作。這時可以將第一個await放在try...catch結構裡面，這樣不管這個異步操作是否成功，第二個await都會執行。例如 : 

> await命令後面的Promise對象，運行結果可能是rejected，所以最好把await命令放在try...catch代碼塊中。

```javascript
async function f() {
  try {
    await Promise.reject('出錯了');
  } catch(e) {
  }
  return await Promise.resolve('hello world'); //若沒有return ，其值則不會傳入下面f()
}

f()
.then(
  v => console.log(`成功 ${v}`),
  e => console.log(`失敗 ${e}`) 
)
// 輸出 : 成功 hello world


// 下面是另一種方法是await後面的Promise物件再跟一個catch方法，處理前面可能出現的錯誤。

async function f() {
  await Promise.reject('出錯了')
    .catch(e => console.log(e));
  return await Promise.resolve('hello world');
}

f()
.then(v => console.log(v))
// 依序輸出 : 
// 出錯了
// hello world
```

> 如果有多個await命令，可以統一放在try...catch結構中。

<!-- ```javascript
async function main() {
  try {
    const val1 = await firstStep();
    const val2 = await secondStep(val1);
    const val3 = await thirdStep(val1, val2);

    console.log('Final: ', val3);
  }
  catch (err) {
    console.error(err);
  }
}
下面的例子使用try...catch結構，實現多次重複嘗試。

const superagent = require('superagent');
const NUM_RETRIES = 3;

async function test() {
  let i;
  for (i = 0; i < NUM_RETRIES; ++i) {
    try {
      await superagent.get('http://google.com/this-throws-an-error');
      break;
    } catch(err) {}
  }
  console.log(i); // 3
}

test();
``` 
上面代碼中，如果await操作成功，就會使用break語句退出循環；如果失敗，會被catch語句捕捉，然後進入下一輪循環。-->

(7) 如果await後面的異步操作出錯，那麼等同於async函數返回的Promise物件被reject。

```javascript
async function f() {
  await new Promise(function (resolve, reject) {
    throw new Error('出錯了'); //await的Promise物件會拋出一個錯誤
  });
}

f()
.then(v => console.log(`成功 ${v}`))
.catch(e => console.log(`失敗 ${e}`))
// 觸發第二個參數 e => console.log(`失敗 ${e}`)
// 失敗 Error: 出错了

//防止出錯的方法，也是將其放在try...catch代碼塊之中。如下 : 

async function f() {
  try {
    await new Promise(function (resolve, reject) {
      throw new Error('出錯了');
    });
  } catch(e) {
  }
  return await('hello world');
}

f()
.then(v => console.log(`成功 ${v}`))
.catch(e => console.log(`失敗 ${e}`))
```

### async 函數併發與繼發

(1) 若async 函數內多個await命令後面的異步操作，如果不存在繼發關係，那最好讓它們同時觸發。下面3個fecth為獨立的異步操作（即互不依賴其他fetch返回的結果），被寫成繼發關係。這樣比較耗時，因為只有第一個fetch完成以後，才會執行下一個fetch，其實可以讓它們同時觸發更節省時間 (稱為併發) 。

```javascript
const asyncfunction = async () => {
    await fetch('https://my-json-server.typicode.com/taiwanhua/demo/posts',
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : (3) [{…}, {…}, {…}]

    await fetch('https://my-json-server.typicode.com/taiwanhua/demo/comments',
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : (2) [{…}, {…}]

    await fetch('https://my-json-server.typicode.com/taiwanhua/demo/profile', 
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : {name: "typicode"}
}

asyncfunction();
```
<!-- 上同
```javascript
const asyncfunction = async () => {
    let a = await fetch('https://my-json-server.typicode.com/taiwanhua/demo/posts',
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : (3) [{…}, {…}, {…}]

    let a1 = await fetch('https://my-json-server.typicode.com/taiwanhua/demo/comments',
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : (2) [{…}, {…}]

    let a2 = await fetch('https://my-json-server.typicode.com/taiwanhua/demo/profile', 
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : {name: "typicode"}
}

asyncfunction();
``` -->

下面我們將上方改為併發的寫法

```javascript
const asyncfunction = async () => {
    let a =() => { fetch('https://my-json-server.typicode.com/taiwanhua/demo/posts',
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : (3) [{…}, {…}, {…}]
    }

    let b =() => { fetch('https://my-json-server.typicode.com/taiwanhua/demo/comments',
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : (2) [{…}, {…}]
    }

    let c =() => { fetch('https://my-json-server.typicode.com/taiwanhua/demo/profile', 
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : {name: "typicode"}
    }

    await a();
    await b();
    await c();
}

asyncfunction();

// 等同於

const asyncfunction = async () => {
    let a =() => { fetch('https://my-json-server.typicode.com/taiwanhua/demo/posts',
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : (3) [{…}, {…}, {…}]
    }

    let b =() => { fetch('https://my-json-server.typicode.com/taiwanhua/demo/comments',
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : (2) [{…}, {…}]
    }

    let c =() => { fetch('https://my-json-server.typicode.com/taiwanhua/demo/profile', 
        { methods: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json)); //這個最後會輸出 : {name: "typicode"}
    }

    await Promise.all([ a(), b(), c()]);
}

asyncfunction();
```

(2) 實際開發中，經常遇到一組異步操作，需要按照順序完成。比如，依次讀取一組URL，然後按照讀取的順序輸出結果。首先如下面那種寫法，所有遠程操作都是繼發。
```javascript
let urlsArr = [
    'https://my-json-server.typicode.com/taiwanhua/demo/posts',
    'https://my-json-server.typicode.com/taiwanhua/demo/comments',
    'https://my-json-server.typicode.com/taiwanhua/demo/profile'
];

async function logInOrder(urls) {
  for (const url of urls) {
    const response = await fetch(url);
    console.log(await response.text());
  }
}

logInOrder(urlsArr);
```
問題是說在互不依賴其他fetch返回的結果的情況下，只有前一個URL 返回結果，才會去讀取下一個URL，這樣做效率很差，非常浪費時間。我們需要的是併發發出遠程請求。

> 下面雖然map方法的參數是async函數，但它是並發執行的，因為只有async函數內部是繼發執行，外部不受影響。後面的for..of循環內部使用了await，因此實現了按順序輸出。

```javascript
let urlsArr = [
    'https://my-json-server.typicode.com/taiwanhua/demo/posts',
    'https://my-json-server.typicode.com/taiwanhua/demo/comments',
    'https://my-json-server.typicode.com/taiwanhua/demo/profile'
];

async function logInOrder(urls) {
  // 併發讀取url
  const textPromises = urls.map(async url => { //注意這裡 雖然map方法的參數是async函數，但它是並發執行的
    const response = await fetch(url);
    return response.text();
  });

  // 按次序輸出
  for (const textPromise of textPromises) {
    console.log(await textPromise);
  }
}

logInOrder(urlsArr);
```

## 使用型式

async函數具有多種使用型式，以下做一整彙。

```javascript
// 函數宣告
async function foo() {}

// 函數表達式
const foo = async function () {};

// 物件的方法
let obj = { async foo() {} };
obj.foo().then(...)

// Class 的方法
class Storage {
  constructor() {
    this.cachePromise = caches.open('avatars');
  }

  async getAvatar(name) {
    const cache = await this.cachePromise;
    return cache.match(`/avatars/${name}.jpg`);
  }
}

const storage = new Storage();
storage.getAvatar('jake').then(…);

// 箭頭函數
const foo = async () => {};
```

 ## [Async 函數程式碼片段 (Snippets)連結](./AsyncSnippets)
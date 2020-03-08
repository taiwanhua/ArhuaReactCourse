---
id: Promise
title: Promise (異步處理方案)
sidebar_label: Promise (異步處理方案)
---

## Promise (異步處理方案)簡介

所謂Promise，簡單說就是一個容器，裡面保存著某個未來才會結束的事件（通常是一個異步處理，如取得後端數據）的結果。

Promise物件有以下幾個特點。

（1）物件的狀態不受外界影響。Promise物件代表一個異步處理，有三種狀態：pending（進行中）、fulfilled（已成功）和rejected（已失敗）。只有異步處理的結果，可以決定當前是哪一種狀態，任何其他操作都無法改變這個狀態。這也是Promise這個名字的由來，它的英語意思就是“承諾”，表示其他手段無法改變。

（2）一旦狀態改變，就不會再變，任何時候都可以得到這個結果。Promise物件的狀態改變，只有兩種可能：

    a. 從pending變為fulfilled  （進行中）-->（已成功）
    b. 從pending變為rejected   （進行中）-->（已失敗）

只要變成fulfilled（已成功）或rejected（已失敗），狀態就不會再變了，這時就稱為 resolved（已定型）。如果改變已經發生了，你再對Promise物件添加回調函數，也會立即得到這個結果。這與事件（Event）完全不同，事件的特點是，如果你錯過了它，再去監聽，是得不到結果的。

> 注意，後面的resolved統一指fulfilled狀態，不包含rejected狀態。

（3）Promise無法取消，一旦新建它就會 "立即執行" ，無法中途取消

（4）如果不設置回調函數，Promise內部拋出的錯誤，不會反應到外部

（5）當處於pending狀態時，無法得知目前進展到哪一個階段（剛剛開始還是即將完成）。

## 基本使用

### 創建Promise

下面示範創建了一個Promise，

```javascript
const promise = new Promise(function(resolve, reject) {//Promise構造函數接受一個函數作為參數，該函數的兩個參數固定分別是resolve和reject。

  // ... some code
  console.log("立即執行");//輸出 : 立即執行 ，一旦新建它就會 "立即執行"

  if (/* 異步處理成功 */){
    resolve("透過resolve回傳值");//將Promise物件的狀態從“未完成”變為“成功”（即從pending變為resolved）
  } else {
    reject("透過reject拋出此錯誤訊息");//將Promise物件的狀態從“未完成”變為“失敗”（即從pending變為rejected）
  }
});

```

首先，Promise構造函數接受一個函數作為參數，該函數的兩個參數固定分別是resolve和reject。它們是兩個函數，由JavaScript提供，不用自己部署。

resolve函數的作用是，將Promise物件的狀態從“未完成”變為“成功”（即從pending變為resolved），在異步處理成功時調用，並將異步處理的結果，作為參數傳遞出去；

reject函數的作用是，將Promise物件的狀態從“未完成”變為“失敗”（即從pending變為rejected），在異步處理失敗時調用，並將異步處理報出的錯誤，作為參數傳遞出去。

### Promise.prototype.then()

Promise具有then函數，其定義在原型物件Promise.prototype上的。它作為Promise狀態改變時的回調函數。then函數的第一個參數是resolved狀態的回調函數，第二個參數（可選）是rejected狀態的回調函數。這兩個函數都接受Promise物件傳出的值作為參數。且若狀態不為rejected則不會調用第二個參數的回調函數。

```javascript
promise.then(function(value) {// value為Promise物件傳出的值作為參數
                              // 第一個參數function(value){...}是resolved狀態的回調函數
}, function(error) {// error為Promise物件傳出的值作為參數
                    // 第二個參數function(error){...}是rejected狀態的回調函數
});
```

下面是兩個使用 then() 的簡單例子。timeout函數返回一個Promise，表示一段時間以後才會發生的結果。過了指定的時間（ms）以後，Promise實例的狀態變為resolved，就會觸發then函數綁定的回調函數。

```javascript
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
});
```

下面Promise新建後立即執行，所以首先輸出的是Promise。然後，then函數指定的回調函數， " 將在當前腳本所有同步任務執行完才會執行 "，所以resolved最後輸出。

```javascript
let promise = new Promise(function(resolve, reject) {
  console.log('Promise'); // 新建後立即執行
  resolve();
});

promise.then(function() {
  console.log('resolved.'); // 將在當前腳本所有同步任務執行完才會執行
});

console.log('Hi!');
console.log('同步!');
console.log('任務!');

// 依序輸出 :
// Promise
// Hi!
// 同步!
// 任務!
// resolved
```

then函數返回的是一個新的Promise（注意，不是原來那個Promise）。因此可以採用鍊式寫法，即then函數後面再調用另一個then函數。如下依次指定了兩個回調函數。第一個回調函數完成以後，會將返回結果作為參數，傳入第二個回調函數。

```javascript
let promise = new Promise(function(resolve, reject) {
  resolve({post:"123"});
});

promise.then((result) => {
	return result.post;
}).then((post) => {
	console.log(post); //輸出 : 123
});
```

### Promise.prototype.catch()

catch函數是.then(null, rejection)或.then(undefined, rejection)的別名，用於捕獲處理錯誤。

下面兩個例子中，第一個例子說明 : PromiseFunction函數返回一個Promise物件，如果該Promise物件狀態變為resolved，則會調用then函數指定的回調函數，另外，then函數指定的回調函數，如果運行中拋出錯誤，也會被catch函數捕獲；<br/>
第二個例子說明 : 如果異步操作拋出錯誤，狀態就會變為rejected，就會調用catch函數指定的回調函數，處理這個錯誤。

```javascript
//第一個例子
const PromiseFunction = () => {
  return new Promise((resolve, reject) => {
    resolve('成功'); 
    //reject('錯誤');
  });
}

PromiseFunction().then((posts) => {
  console.log('成功後執行的then函數') //輸出 : '成功後執行的then函數'
  throw new Error("拋出錯誤"); 
}).catch((error) => {
  // 處理PromiseFunction 和 前一個回調函數 執行時發生的錯誤
  console.log('發生錯誤後執行catch函數！', error);  //輸出 : '發生錯誤後執行catch函數！ Error: 拋出錯誤'
});
```

```javascript
//第二個例子
const PromiseFunction = () => {
  return new Promise((resolve, reject) => {
    //resolve('成功'); 
    reject('錯誤');
  });
}

PromiseFunction().then((posts) => {
  console.log('成功後執行的then函數')
  //throw new Error("拋出錯誤"); 
}).catch((error) => {
  // 處理PromiseFunction 和 前一個回調函數 執行時發生的錯誤
  console.log('發生錯誤後執行catch函數！', error);  //輸出 : '發生錯誤後執行catch函數！ 錯誤'
});
```

Promise物件的錯誤，會一直向後傳遞，直到被捕獲為止。也就是說，錯誤總是會被下一個catch語句捕獲。下面例子中一共有三個Promise物件：一個由PromiseFunction()產生，兩個由then產生。它們之中任何一個拋出的錯誤，都會被最後一個catch捕獲。

```javascript
const PromiseFunction = () => {
  return new Promise((resolve, reject) => {
    resolve({result:'成功'}); 
    //reject('錯誤');
  });
}

PromiseFunction().then((res) => {
  return res.result;
}).then((res1) => {
  //一些程式碼
  // .
  // .
  // .
}).catch((error) => {
  // 處理前面三個Promise (PromiseFunction()返回的、then((res) => {...})返回的、then((res1) => {...})返回的Promise) 產生的錯誤
});
```

> 注意，一般來說，建議不要在then函數裡面定義Reject狀態的回調函數（即不要寫then的第二個參數），總是使用catch函數。如下 : 

```javascript
// 不要這樣寫
promise
  .then((data) => {
    // success
  }, (err) => {
    // error
  });

// 請這樣寫
promise
  .then((data) => { 
    // success
  })
  .catch((err) => {
    // error
  });
  ```

下面例子中，someAsyncThing函數產生的Promise物件，內部有語法錯誤。瀏覽器運行到這一行，會打印出錯誤提示ReferenceError: x is not defined，但是不會退出進程、終止腳本執行，2秒之後還是會輸出123。這就是說，Promise內部的錯誤不會影響到Promise外部的代碼，通俗的說法就是 "Promise會吃掉錯誤" 。

```javascript
const someAsyncThing = () => {
  return new Promise((resolve, reject) => {
    // 下一行會報錯，因為未宣告 x
    resolve(x + 2);
  });
};

someAsyncThing().then(function() {
  console.log('everything is great');
});

setTimeout(() => { console.log(123) }, 2000);
// 依序輸出 : 
// Uncaught (in promise) ReferenceError: x is not defined
// 123
```

### Promise.prototype.finally()

finally()用於指定不管Promise物件最後狀態如何，都會執行的操作。而finally()的回調函數不接受任何參數，這代表著沒有辦法知道，前面的Promise狀態到底是resolved還是rejected。即是說，finally()裡面的操作，應該是與狀態無關的，不依賴於Promise的執行結果。
例如 : 

```javascript
promise
.then((result) => {···})
.catch((error) => {···})
.finally(() => {···});
```

上面例子中，不管promise最後的狀態，在執行完then或catch指定的回調函數以後，都會執行finally方法指定的回調函數。

另外，finally本質上是then方法的特例。如下面例子，若不使用finally方法，同樣的語句需要為成功和失敗兩種情況各寫一次。有了finally方法，則只需要寫一次。

```javascript
promise
.finally(() => {
  // 一定要執行的事
});

// 等同於

promise
.then(
  result => {
    // 一定要執行的事
    return result;
  },
  error => {
    // 一定要執行的事
    throw error;
  }
);
```

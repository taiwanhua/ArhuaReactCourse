---
id: useEffect
title: useEffect
sidebar_label: useEffect
---

## 基本使用方式

useEffect的基本使用方式相當簡單，只需要先像useState一樣從react一般引入進來就可以了，
而useEffect接受兩個參數，第一個參數是一個要執行的函數，我們叫它EffectCallback，裡面可用於處理副作用，
且可以return一個回調函數，讓它在下一次執行EffectCallback前執行，用來做清理工作，
而這個回調函數我們叫它cleanup function。

第二個參數是選擇性傳入的，用來控制第一個函數的執行，我們叫它DependencyList。
你可以不傳、或傳入空陣列、或在陣列內傳入值，通常會傳入state，
接下來我們來細細剖析第二個參數DependencyList影響useEffect執行的幾種情況，

![Snippets](/ArhuaReactCourse/img/life5.png)

### 不傳DependencyList，且返回cleanup function

不傳DependencyList，且返回cleanup function，
則會在組件掛載完時執行一次EffectCallback，
接著在每次props或state發生改變導致組件更新時，先執行cleanup function再執行EffectCallback
而組件卸載時，則只會執行cleanup function。

```javascript

useEffect(  
  () => {

      console.log("處理副作用");

      return () => {
         console.log("做一些清理工作");
      }
  })

```

### 不傳DependencyList，也不返回cleanup function的情況

不傳DependencyList，也不返回cleanup function的情況下，
則在組件掛載完時也執行一次EffectCallback，
接著在每次props或state發生改變導致組件更新時都執行EffectCallback，
而組件卸載時，因為沒有返回cleanup function所以不執行。

```javascript

useEffect(  
  () => {

      console.log("處理副作用");

  })

```

### DependencyList以空陣列傳入且返回cleanup function

其實每次組件更新時React都會檢查DependencyList內的值有沒有改變，
再決定要不要重新執行EffectCallback，
而如果傳入空陣列就表示DependencyList內值永遠不改變，所以不會重新執行EffectCallback

所以在以空陣列傳入且返回cleanup function的情況下，
就會在組件掛載完時執行一次EffectCallback，
接下來組件更新時因為是傳入空陣列，所以不會重新執行EffectCallback，
直到組件卸載時，才會執行cleanup function。

```javascript

useEffect(  
  () => {
      console.log("處理副作用");

      return () => {
         console.log("做一些清理工作");
      }
  }, [  ] )

```

### DependencyList以空陣列傳入且不返回cleanup function

若DependencyList以空陣列傳入且不返回cleanup function，
就只會在組件掛載完時執行一次EffectCallback而已，
在組件更新時不會重新執行EffectCallback，
組件卸載時也不會執行cleanup function。

```javascript

useEffect(  
  () => {
      console.log("處理副作用");

  }, [  ] )

```

### DependencyList以非空陣列傳入且返回cleanup function

DependencyList以非空陣列傳入 (通常這個值會是state或props，)，且返回cleanup function的情況下，
如果是傳入一個state，且返回cleanup function的情況，
將在組件掛載完時執行一次EffectCallback，
之後只有陣列裡的state發生改變才會先執行cleanup function後再執行EffectCallback，
而組件卸載時，會執行cleanup function。

```javascript

useEffect(  
  () => {
      console.log("處理副作用");

      return () => {
         console.log("做一些清理工作");
      }
  }, [ state ] )

```

### DependencyList以非空陣列傳入且不返回cleanup function

而在DependencyList以非空陣列傳入且不返回cleanup function的情況下，
將在組件掛載完時執行一次EffectCallback，
且只有陣列裡的state發生改變才會執行EffectCallback，
而組件卸載時，不會執行cleanup function。


```javascript

useEffect(  
  () => {
      console.log("處理副作用");

  }, [ state ] )

```

> DependencyList內可以放多個值，一但裡面任一個值發生變化就會再次執行EffectCallback。


## useEffect實現類似類組件生命週期的功能

我們看如何使用useEffect實現與類組件生命週期類似的功能，
如componentDidMount、componentDidUpdate、componentWillUnmount這些方法，
我們該如何實現呢?讓我們繼續看下去...

### 實現類組件生命週期

如下程式碼，一開始掛載時會執行一次EffectCallback、然後每次組件更新時也都會再執行一次EffectCallback，
那就相當於componentDidMount與componentDidUpdate的組合了，
並且於下方第二個useEffect裡，讓它只返回cleanup function，並且DependencyList傳入空陣列，
這樣的話這個useEffect除了卸載時會執行cleanup function外，
其他時候都不會做事，那就相當於componentWillUnmount了。

```javascript

import React, { useEffect, useState } from 'react';

const Buttontwo = (props) => {

    const [State, setState] = useState({ show: true, count: 0 });

    useEffect(() => {
        console.log("Buttontwo的EffectCallback")

        // return () => {
        //     console.log("Buttontwo的cleanup function")
        // }
    })

    useEffect(() => {
        // console.log("Buttontwo的EffectCallback")

        return () => {
            console.log("Buttontwo的cleanup function")
        }
    }, [])

    return (
        <>
            <p>Buttontwo組件</p>
            <button onClick={() => { setState({ ...State, count: State.count + 1 }) }}>觸發Buttontwo重新渲染次數 : {State.count}</button>
        </>
    )
}

export default Buttontwo;

```

### 搭配useRef實現類組件生命週期

但是可能有些人會說，他想要讓組件掛載時跟更新時做不同的事情，那怎麼辦呢?通常開發上是不太需要這樣做，
但是如果遇到了，一定要這樣做，那這邊提供一個方法，就是搭配使用另一個Hook useRef。

如下方程式碼，使用useRef叫做ref，而它可以給一個初始值，這個初始值會給到ref物件下的current裡，
而且呢，如果我去改變current的值的話，並不會導致組件重新更新、渲染，
利用這個特性，讓它在掛載時把ref的current設為true，並且讓它輸出Buttontwo的EffectCallback，這就相當於componentDidMount；

然後組件每次要更新時，只有當current為真，才執行EffectCallback，
那因為第一次掛載時候為false，不會執行EffectCallback，
而之後因為在第二個useEffect裡current被改為true，所以之後每次組件更新都會執行EffectCallback，
那就相當於componentDidUpdate了；

而最後卸載時，就一樣使用Buttontwo的cleanup function。

```javascript

import React, { useEffect, useState, useRef } from 'react';

const Buttontwo = (props) => {

    const [State, setState] = useState({ show: true, count: 0 });
    const ref = useRef(false);

    useEffect(() => {
        if (ref.current) {
            console.log("update")
        }
        // return () => {
        //     console.log("Buttontwo的cleanup function")
        // }
    })

    useEffect(() => {
        ref.current = true;
        console.log("Buttontwo的EffectCallback")

        return () => {
            console.log("Buttontwo的cleanup function")
        }
    }, [])

    return (
        <>
            <p>Buttontwo組件</p>
            <button onClick={() => { setState({ ...State, count: State.count + 1 }) }}>觸發Buttontwo重新渲染次數 : {State.count}</button>
        </>
    )
}

export default Buttontwo;

```

## useEffect處理副作用

我們接下來展示使用useEffect去處理副作用Fetch請求，
下面我有準備好一個url，它會返回一個json物件，裡面有id 1到3的三組資料，
如果網址後面接1就傳回id是1的資料、
如果是2就傳回id是2的資料，
依此類推。


> https://my-json-server.typicode.com/taiwanhua/demo/posts/  <br/>
    https://my-json-server.typicode.com/taiwanhua/demo/posts/1 <br/>
    https://my-json-server.typicode.com/taiwanhua/demo/posts/2 <br/>
    https://my-json-server.typicode.com/taiwanhua/demo/posts/3 <br/>


還記得我們之前在講ES6時說過，async await搭配fetch去請求資料，
那直接在useEffect裡面寫一個async函數名字就叫MyFetch，
後面這個fetch請求第一個參數 "Url\_" ，就是要請求的網址，
第二個參數  "Param\_"，因為我們發的是GET請求，所以可以不用傳，
那其實這個Myfetch就是發送Fetch請求，然後轉成json格式作為回傳值，
最後我們就調用MyFetch，傳入Url，再把它輸出到Console。
這樣一來我們請求的數據就被我們輸出出來了，

我們到現在總共看了useState、useContext、useEffect、useRef這幾個React Hook，
這些在開發中都是很實用的Hook，大家一定要會哦，
下一節課我會再介其它Hook與如何製作自己的Hook。


```javascript
import React, { useEffect, useState, useRef } from 'react';

const Buttontwo = (props) => {

    const [State, setState] = useState({ show: true, count: 0 });

    useEffect(() => {
        const MyFetch = async (Url_, Parma_ = {}) => {
            try {
                const Response = await fetch(Url_, Parma_)//發送Fetch請求
                    .then(Result => {
                        const ResultJson = Result.clone().json();//轉成json格式

                        return ResultJson;
                    })
                    .then((PreResult) => {

                        return PreResult;
                    })
                    .catch((Error) => {

                    })
                    .finally(() => {

                    });

                return Response;//作為回傳值
            } catch (Error) {

            }
        }

        console.log(MyFetch(`https://my-json-server.typicode.com/taiwanhua/demo/posts/${State.count}`));
        //調用MyFetch，傳入Url，再把它輸出到Console。

    }, [State])//當點擊按鈕候，State.count會加1，相當於請求下一個id的資料

    return (
        <>
            <p>Buttontwo組件</p>
            <button onClick={() => { setState({ ...State, count: State.count + 1 }) }}>觸發Buttontwo重新渲染次數 : {State.count}</button>
        </>
    )
}

export default Buttontwo;
```

## [useEffect 程式碼片段 (Snippets)連結](./HooksSnippets)

---
id: useRef
title: useRef
sidebar_label: useRef
---

## useRef介紹

```javascript
import React, { useRef } from 'react'; //引入useRef

const ref = useRef(初始值); //使用useRef

//會返回物件如 : { current : 可變值 }

```

useRef使用相當簡單，
首先useRef可以接受一個初始值，
接著它會創建並返回一個物件，這個物件就像一個盒子，
而其中有一個名為current的Key，裡面可以保存一個可變值，
像是如果有給初始值則會保存在current裡，
且與State相比不同的是，當改變這個可變值並不會觸發重新更新、渲染組件。

## useRef使用方法

而useRef一個常見的用法是拿來存取DOM節點，而且當DOM節點發生改變，
React也會將改變更新至current，
另一種用法就是利用改變可變值不會觸發重新更新、渲染組件這點，
用來保存可變值。

說到這裡或許感覺上還是很抽象，接下來讓我們透過實際例子來了解useRef。

### 存取DOM節點

使用useRef，使其返回的變數名就叫ref，
因為我們使用它來存取DOM節點，而React會把當前DOM節點更新至current，所以初始值可以不用給。

下方在input標籤上加上ref，這樣一來就能夠取得input 這個DOM節點了，
而取得DOM節點後，我們自然就能對它做一些DOM操作，
然後再給一個按鈕，讓點擊按鈕的時候，能夠讓它focus到ref.current裡的DOM節點也就是input標籤這個DOM節點上。

另外也可以發現當觸發State.count加1，使組件重新更新、渲染時，
ref.current裡面保存的DOM也會跟著改變背景色。

而存取DOM節點是一種useRef常見的用法。

```javascript

import React, { useState, useRef } from 'react';

const Buttontwo = (props) => {

    const ref = useRef();

    return (
        <>
            <p>Buttontwo組件</p>
            <button onClick={() => { setState({ ...State, count: State.count + 1 }) }}>觸發Buttontwo重新渲染次數 : {State.count}</button>
            <button onClick={() => { ref.current.focus(); }}>focus</button>
            <input ref={ref} style={{ backgroundColor: State.count % 2 === 1 ? 'red' : 'green' }}></input>
        </>
    )
}

export default Buttontwo;
```

### 保存可變值

用法即是利用改變可變值不會觸發重新更新、渲染組件這點來保存可變值功使用。

如下方程式碼，若在input輸入框裡面隨便打字，
ref.current的值就會隨著我打字增加且被輸出在Console，
可是畫面上ref.current卻還是0，這是因為useRef並不會觸發組件重新渲染與更新，

這時若再點一下Buttontow的按鈕，讓它重新渲染與更新，
這時畫面上的ref.current隨著重新渲染才會改變。

且若當組件被卸載又掛載回來，則ref.current又會從初始值0開始計算。

```javascript

import React, { useState, useRef } from 'react';

const Buttontwo = (props) => {

    const ref = useRef(0);

    return (
        <>
            <p>Buttontwo組件</p>
            <button onClick={() => { setState({ ...State, count: State.count + 1 }) }}>觸發Buttontwo重新渲染次數 : {State.count}</button>
            <input onChange={() => { console.log(ref.current); ref.current += 1; }}></input>
            <p>ref.current : {ref.current}</p>
        </>
    )
}

export default Buttontwo;
```

那以上就是useRef的用法，
你可以拿它去操作DOM，或當成一個單純的可變值來用，
怎麼用就看實際開發的需求了。

## [useRef 程式碼片段 (Snippets)連結](./HooksSnippets)
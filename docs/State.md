---
id: State
title: state 狀態
sidebar_label: state 狀態
---

## State簡介

state的主要作用是用於組件保存、控制、修改自己的可變狀態。其在組件內部初始化，能被組件自身修改，而外部不能訪問也不能修改。
你可以將state理解為是一個被組件自身控制的資料。

對比一下props的主要作用是讓父組件可以傳入參數至子組件。
但它是外部傳進來的參數，子組件內部無法控制也無法修改。
除非父組件主動傳入新的props，否則組件的props永遠保持不變。

總而言之，state與props差別在於，
state是讓組件控制自己的狀態，
props則是讓父組件對組件進行配置。
但是它們都可以決定組件的行為和顯示形態。

## 透過useState在函數組件中引入state

在函數組件中引入state非常簡單，只需要先將useState給import進來，如 : 

```javascript
import React, {useState} from 'react';
```

## 組件自己使用state

在使用上，先透過陣列的解構賦值宣告兩個變數，第一個變數是state的名稱，第二個是重新設定值給state的函數名稱，並給useState傳入初始值即可。
下面例子整個過程先是state在組件內部初始化，初始值為0，
並且保存在Count裡供隨時使用，如顯示button被按了幾次，
且每當button被點擊則可以透過setCount修改state裡面的值，
這樣就實現組件自己使用state控制自己的狀態了。
      
```javascript
const App = () => {
  const [Count, setCount] = useState(0);

  return (
    <>
      <p>這是我第一個函數組件App</p>
      <div>Count : {Count}</div>
      <button a={() => { setCount(Count+1) }}></button>
    </>
  )
}
```

再給一個更實際的例子，也可以在樣式上使用state，例如下 :

```javascript
const App = () => {
  const [Count, setCount] = useState(0);
  //若Count大於0，背景就綠色否則紅色
  return (
    <>
      <p>這是我第一個函數組件App</p>
      <div>Count : {Count}</div>
      <button a={() => { setCount(Count+1) }}></button>
      <div style={{ backgroundColor: Count > 0 ? "green" : "red" }}>按了變色</div>
    </>
  )
}
```

## state通過props傳給子組件

在父組件通過props傳state給子組件 : 

```javascript
//父組件 :
const App = () => {
  const [Count, setCount] = useState(0);
  return (
    <>
      <p>這是我第一個函數組件App</p>
      <Buttonone a={Count}></Buttonone>
    </>
  )
}
```

在子組件接收並顯示在按鈕上 : 

```javascript
//子組件
const Buttonone = (props) => {

    return (
        <button>按鈕 {props.a}</button>
    )
}
```

## 用傳入的props做組件的state

如下例子，雖然將父祖件傳入的props.a作為Buttonone的state初始值，
但是Buttonone的state是由Buttonone自己控制的，
除非點擊Buttonone組件內的按鈕，
讓它觸發Buttonone組件自己的setRestore，
按鈕裡面的數字才會增加。
其實也順便說明一件事就是State用在組件內是不受外部影響的。

```javascript
//父組件 :
const App = () => {
  const [Count, setCount] = useState(0);

  return (
    <>
      <p >這是我第一個函數組件App</p>
      <Buttonone a={Count}></Buttonone>
    </>
  )
}
```

```javascript
//子組件
const Buttonone = (props) => {
    const [Restore, setRestore] = useState(props.a)
    return (
        <>
            <button onClick={() => { setRestore(Restore + 2) }}> 按鈕 {Restore}</button>
            <p>props.a : {props.a}</p>
        </>
    )
}
```

 ## [React Hooks 程式碼片段 (Snippets)連結](./HooksSnippets)
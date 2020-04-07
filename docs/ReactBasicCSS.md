---
id: ReactBasicCSS
title: 使用基本CSS樣式
sidebar_label: 使用基本CSS樣式
---

## JSX的行內樣式(Inline style)

想使用JSX的行內樣式，只需要透過style屬性編寫行內樣式，並且將CSS屬性以物件表達，
唯一要注意凡是遇到連字號 ( - ) ，都要改成大寫字母(駝峰命名法)，如font-size 改為 fontSize 、background-color改為backgroundColor。

```javascript

import React from 'react';
import './App.css'

const App = () => {

  return (
    <>
      <p style={{ backgroundColor: "red", fontSize: "36px", color: "green" }}>這是我第一個函數組件App</p>

    </>
  )
}

export default App;

```


## 使用外部樣式(External style)

使用外部樣式的話，在組件內可以import引入CSS檔案，而CSS檔案內以一般CSS寫法即可，
唯一注意，在使用CSS的Class的時候，記得要使用ClassName。

```javascript

import React from 'react';
import './App.css'  //直接以import引入

const App = () => {

  return (
    <>
      <p id="myapp" className={"myclass myclass2"}>這是我第一個函數組件App</p>

    </>
  )
}

export default App;

```

```css

#myapp{
  color:green
}

.myclass{
  font-size: 36px;
  background-color: red;
  margin-top: 10px;
}

.myclass2{
  border: 1px solid black;
}

```

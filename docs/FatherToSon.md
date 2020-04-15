---
id: FatherToSon
title: 父組件向子組件傳遞資料與PropTypes
sidebar_label: 父組件向子組件傳遞資料與PropTypes
---

## props

父組件向子組件傳遞資料可以透過JSX傳入自訂屬性 ( props )實現，
假設我們在App組件的子組件Buttonone傳入自訂屬性p1、p2與div標籤如下 :

```javascript
const App = () => {

  return (
    <Buttonone p1={{ b: 2 }} p2={{ c: 3 }}>
        <div>我會在children裡</div>
    </Buttonone>
  )
}
```

則在Buttonone組件內可以透過接收字父組件傳入的自訂屬性，並解構賦值給props，這就是父組件向子組件傳遞資料。

```javascript
const Buttonone = (props) => {
    console.log(props);

    return (
        <button>按鈕 </button>
    )
}

//輸出 : {p1: {…}, p2: {…}, children: Array(1)}
```
>傳入自訂屬性解構賦值至props
```javascript
props = {p1: {…}, p2: {…}, children: Array(1)}
```

> 請注意App組件內Buttonone標籤之間的div標籤會被放到props 的 children裡，
使用時只需要使用 {props.children} 就可以了。

解構賦值更明顯的例子，若將接收的參數props改為物件 {p1 ,p2, ...other} ，
會發現中間也是經過解構賦值 : 

```javascript
const Buttonone = ({p1 ,p2, ...other}) => {
    console.log(p1);
    console.log(p2);
    console.log(other);

    return (
        <button>按鈕 </button>
    )
}

//輸出p1為 : { b: 2 },
//輸出p2為 : { c: 3 }
//輸出pother為: children: Array(2)
```

## PropTypes

由於props可以傳入任意類型之資料，所以我們或許會需要檢查props的資料類型，
而PropTypes正好可以讓替我們檢查自父祖件傳入的props類型。

例如現在從父組件傳入的有p1、p2與children，

```javascript
const App = () => {

  return (
    <Buttonone p1={{ b: 2 }} p2={{ c: 3 }}>
        <div>我會在children裡</div>
    </Buttonone>
  )
}
```

想針對Buttonone的props做檢查，
先引入PropTypes就可以針對組件傳入的props做類型檢查，
希望它為字串則使用PropTypes.string檢查。

```javascript
import PropTypes from 'prop-types';

const Buttonone = (props)) => {
    return (
        <button>按鈕 </button>
    )
}

Buttonone.propTypes = {
    p1: PropTypes.string
}

```
更多能使用的檢查，整理如下 : 

```javascript

import PropTypes from 'prop-types';

MyComponent.propTypes = {
  //    名稱       |     類型
  想檢查的props名稱: PropTypes.array,
  想檢查的props名稱: PropTypes.bool,
  想檢查的props名稱: PropTypes.func,
  想檢查的props名稱: PropTypes.number,
  想檢查的props名稱: PropTypes.object,
  想檢查的props名稱: PropTypes.string,
  想檢查的props名稱: PropTypes.symbol,
  想檢查的props名稱: PropTypes.node,
  想檢查的props名稱: PropTypes.element,
  想檢查的props名稱: PropTypes.elementType,
  
  // 檢查是否為陣列內其中一種類型
  想檢查的props名稱: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  // 檢查陣列是否為某種類型
  想檢查的props名稱: PropTypes.arrayOf(PropTypes.number),

  // 檢查物件其內 value 值是否為某種類型
  想檢查的props名稱: PropTypes.objectOf(PropTypes.number),

  // 檢查物件其內 "指定" value 值是否為某種類型   (color、fontSize為舉例的 Key 名)
  想檢查的props名稱: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // 檢查某指定類型的props是否傳入，( isRequired設定其為必傳 )
  想檢查的props名稱: PropTypes.func.isRequired,

  // 檢查某任意類型的props是否傳入，( isRequired設定其為必傳 )
  想檢查的props名稱: PropTypes.any.isRequired
}

```

 ## [PropTypes 程式碼片段 (Snippets)連結](./PropTypesSnippets)
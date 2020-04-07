---
id: JSX
title: JSX語法
sidebar_label: JSX語法
---
## JSX語法介紹

### 為何需要JSX語法?

介紹JSX語法之前我們先嘗試思考一個問題，組件是寫在js檔案裡的，那javascript要如何表達下方那種DOM節點的結構呢?

```html

<div>
      <p className='title'>這是我第一個函數組件App</p>
      <Buttonone>按鈕</Buttonone>
</div>

```

我們可以發現其實一個DOM節點只包含三條訊息，分別是標籤名，屬性，子節點。
所以其實這個HTML我們可以用合法的javascript物件表示，如下 : 

```javascript

{
  tag: 'div',
  attrs: null,
  children: [
    {
      tag: 'p',
      arrts: { className: 'title' },
      children: ['這是我第一個函數組件App']
    },
    {
      tag: Buttonone ',
      attrs: null,
      children: ['按鈕']
    }
  ]
}

```


但是使用javascript寫起來非常冗長且結構看起來不清晰，
如果可以用HTML的方式寫的話，那就會方便很多。
因此React就把JavaScript的語法擴充了一下，
讓我們能夠直接在JavaScript裡面寫這種類似HTML標籤結構的JSX語法 (如下)
，這樣寫起來就方便很多了。

```javascript
const App = () => {
    return (
        <div>
          <p className='title'>這是我第一個函數組件App</p>
          <Buttonone>按鈕</Buttonone>
        </div>
    )
}

```

### 隱藏在JSX語法背後的魔法

其實像這樣可以直接寫類似HTML標籤結構的JSX語法，最後還是要轉換成javascript物件來表示DOM節點的結構，
所以我們再進一步了解從JSX語法到網頁畫面之間經歷了那些過程，

![JSX](/ArhuaReactCourse/img/JSX.png)

(1) 首先，會使用 Babel 將 JSX 編譯為呼叫 React.createElement() 的程式。

> Babel是JavaScript的編譯器，它主要作用是將新的JavaScript語法編譯為ES5的語法，
  以兼容舊的瀏覽器，我們可以到Babel的官方網站試用它的編譯模擬器，網址 : 
  https://babeljs.io/


(2) 接著React.createElement()就會創建一個JavaScript物件來表示HTML結構，
裡面包含標籤名，屬性，子節點，這種物件被稱為React Element，是一種虛擬DOM。


(3) 有了React Element後，React 會讀取這些物件並用裡面的描述來產生 DOM，


(4) 再透過ReactDOM.render()，將產生的DOM渲染插入到真正的HTML檔案的DOM節點內，也就成了你看到的畫面。

> 另外，也因為React 會讀取React Element來產生 DOM。
假設需要更新畫面的時候，
React DOM 會將React element 和它的 children 與先前的狀態做比較，並且只更新必要的 DOM 。
而不用直接操作畫面上的DOM，
這樣可以減少瀏覽器重繪畫面，達到性能的優化。


## JSX語法基本使用

JSX是javascript的擴充語法，所以兩者可以很好的搭配使用，這裡會就幾種常用的使用方法做介紹。

### 使用變數

我們可以以 { } 包住宣告過的變數直接使用，如下：

```javascript
const App = () => {
  
  let number = 1;

  return (
    <>
      <p>這是我第一個函數組件App</p>
      <p>{number}</p>
    </>
  )
}
```

### 三元運算符

JSX裡不能夠寫 if 條件判斷式，但是我們能夠透過三元運算符作為變通的方法來寫條件判斷式，
所以我們還可以依據條件使用對應的標籤或值。

```javascript
const App = () => {
  
  let number = 1;
  let trueOrfalse = false; 

  return (
    <>
      <p>這是我第一個函數組件App</p>
      { trueOrfalse ? <p>{number}</p> : 1000}
    </>
  )
}
```

### &&運算符

當然我們也可以使用&&運算符，如下：

```javascript
const App = () => {
  
  let number = 1;
  let trueOrfalse = true; 

  return (
    <>
      <p>這是我第一個函數組件App</p>
      { trueOrfalse && <p>{number}</p> }
    </>
  )
}
```

### 註解

當需要註解時則以 {/* */} 包圍想註解區塊，當然可以直接使用VSCode的快捷鍵 "Ctrl按住後依序按下K、D"。

```javascript
const App = () => {
  
  let number = 1;
  let trueOrfalse = true; 

  return (
    <>
      {/*<p>這是我第一個函數組件App</p>
      { trueOrfalse && <p>{number}</p> } */}
    </>
  )
}
```

### JSX賦值給變數

還可以將JSX語句賦值給變數，並在想使用的地方使用，如下：

```javascript
const App = () => {
  
  let number = 1;
  let trueOrfalse = true; 
  let list = <p>{number}</p>;

  return (
    <>
      <p>這是我第一個函數組件App</p>
      { trueOrfalse && list }
    </>
  )
}
```

### 列表渲染

當然JSX也能渲染列表，主要有兩種方式，<br/>
第一種是將列表放在陣列裡，因為JSX支援直接陣列直接渲染，讓它直接渲染就可以了。

```javascript
const App = () => {

  let number = 1;
  let trueOrfalse = true;
  let list = [<li>{number}</li>, <li>{number + 1}</li>, <li>{number + 2}</li>];

  return (
    <>
      <p>這是我第一個函數組件App</p>
      {trueOrfalse && list}
    </>
  )
}
```

第二種是透過map函數遍歷後渲染，如以下：

>  需要注意使用map函數遍歷需要加上唯一的key，能幫助React標示在哪些地方被修改，增加或刪除了，加上key的位置在最外層標籤上，如下 ul 標籤

```javascript
const App = () => {

  let number = 1;
  let trueOrfalse = true;
  let list = [{ ID: number, Name: "阿華" }, { ID: number + 1, Name: "阿花" }, { ID: number + 2, Name: "阿話" }];

  return (
    <>
      <p>這是我第一個函數組件App</p>
      {trueOrfalse && list.map((item) => (
        <ul key={item.ID}>
          <li>ID: {item.ID}</li>
          <li>Name: {item.Name}</li>
        </ul>
      ))
      }
    </>
  )
}
```

接下來我們將會依序說到樣式與事件的使用方法...
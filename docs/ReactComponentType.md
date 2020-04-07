---
id: ReactComponentType
title: React的組件分類
sidebar_label: React的組件分類
---

## createClass寫法 – 已淘汰

```javascript

var App = React.createClass({ 
    render : function(){ 
        return ( 
            <div>hello，我是小淘 ! </div> 
        );
     }, 
}); 

ReactDOM.render( 
    <App />, 
    document.getElementById('content’) 
);

```

## Class Component – 類組件

類組件宣告一個Class App 繼承自 React.Component，
且Class Component內一定要有render函數，並返回一段JSX語句。

```javascript

class App extends React.Component { 
    // ...做一些事情 
    render(){ 
        return (
            <div> hello，這是一個類组件 </div>
        )
    } 
}

```

## Function Component – 函數組件

Function Component 相當簡單，只需要宣告一個箭頭函數，
並且在裡面返回一段JSX語句就可以了，
官方推薦以Function Component搭配React hooks開發組件，
所以後面會主要針對Function Component做介紹與開發

```javascript

const App = (props) => { 
    // ...做一些事情 
    return (
        <div> hello，這是一個函數組件 </div>
    ) 
}

```

> 另外，那在寫完一個組件後你也可以自己給組件分類，
      例如專門拿來放其他組件的叫做容器組件、
      當按鈕用的按鈕組件，
      最上層的組件叫頂層組件等等



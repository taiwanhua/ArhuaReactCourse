---
id: SonToFather
title: 子組件向父組件傳遞資料
sidebar_label: 子組件向父組件傳遞資料
---

一般來說，在React裡面並無法直接從子組件傳遞資料給父組件，
但是我們可以通過一些特別的手段實現從子組件傳遞資料給父組件，簡單來說，
就是通過將setCount函數傳入子組件並在子組件調用來實現的。如下例子 :

```javascript
//父組件 :
const App = () => {
  const [Count, setCount] = useState(0);

  return (
    <>
      <p >這是我第一個函數組件App</p>
      <div>Count : {Count}</div>
      <Buttonone a={(x) => { setCount(x) }}></Buttonone>
    </>
  )
}
```

```javascript
//子組件
const Buttonone = (props) => {

    return (
        <>
            <button onClick={() => { props.a(200) }}> 按鈕</button>
        </>
    )
}
```
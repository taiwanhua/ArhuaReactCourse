---
id: selfDefineHook
title: 自定義Hook
sidebar_label: 自定義Hook
---

目前為止介紹給大家幾個Hook，
例如useState、useContext、useEffect、useRef，它們都有不同的功能，
那我們能否自己封裝一個有我們想要的功能的Hook呢?
      
答案是可以的，
其實函數組件，就是一個Javascript的function裡面返回一段JSX語法，
而Hook的本質其實也是自react引入的function，只是返回的不一定是JSX語法而已，
所以不管是函數組件或是React Hook其實都是Javascript的function，
也就是Javascript的函數。
      
那如果在Javascript裡有兩個函數，函數裡面有重複的邏輯時，
我們會習慣將它提取出來並封裝至另外一個函數後調用它，那一樣的道理，在函數組件裡有重複的邏輯，
也能夠把重複的邏輯提取出來，並封裝成 "自定義Hook" 來使用。

接下來讓我舉兩個自定義Hook的例子給大家看。

> 只是唯一注意，自定義Hook必須遵守其命名開頭必定以use開頭命名。

## 自定義Hook封裝Fetch請求

第一個例子讓我們使用自定義Hook封裝Fetch請求 : 

```javascript

// useFetch.js

import React, { useEffect, useState } from 'react';

export const useFetch = (url_) => { // 導出自定義Hook名字叫useFetch，並讓接受參數 "url_"

    const [State, setState] = useState(null); // 使用useState，把請求結果保存起來

    useEffect(() => {
        const MyFetch = async (Url_, Parma_ = {}) => {
            try {
                const Response = await fetch(Url_, Parma_)
                    .then(Result => {
                        const ResultJson = Result.clone().json();//Respone.clone()

                        return ResultJson;
                    })
                    .then((PreResult) => {
                        setState(PreResult) // 使用setState把結果更新到State裡去
                        return PreResult;
                    })
                    .catch((Error) => {
                        
                    })
                    .finally(() => {

                    });

                return Response;
            } catch (Error) {

            }
        }

        MyFetch(url_)

    }, [url_])// DependencyList也使用外面傳進來的參數 "url_"，
              // 這樣每當傳進來的"url_"有改變就會重新執行EffectCallback，
              // 1並以新的"url_"去發Fetch請求

    return State; // 把State作為回傳值傳出去
}
```

如上方程式碼，這樣我們第一個自訂義Hook就封裝完了，現在我們可以再任何一個函數組件裡面使用這個Hook，

```javascript

// Buttontwo.js

import React, { useEffect, useState, useRef } from 'react';
import { useFetch } from './useFetch'; // 把useFetch引入進來

const Buttontwo = (props) => {

    const [State, setState] = useState({ show: true, count: 0 });

    const result = useFetch(`https://my-json-server.typicode.com/taiwanhua/demo/posts/${State.count}`);// 保存useFetch的回傳值

    return (
        <>
            <p>Buttontwo組件</p>
            <button onClick={() => { setState({ ...State, count: State.count + 1 }) }}>觸發Buttontwo重新渲染次數 : {State.count}</button>
            <p>{JSON.stringify(result)}</p>
        </>
    )
}

export default Buttontwo;

```

如想在Buttontwo組件使用，就把useFetch引入進來使用就可以了。

## 自定義Hook封裝表單驗證

第二個例子讓我們來封裝一個表單欄位驗證的Hook，

```javascript

// useForm.js

import React, { useState } from 'react';

export const useForm = (initialValue, regExp) => {

    const [Value, setValue] = useState(initialValue);

    return [Value, (e) => { setValue(e.target.value) }, RegExp(regExp).test(Value) ? null : <p>驗證失敗</p>]
}

```

使用上一樣使引入進來後直接使用，透過下方程式碼，我們還可以知道兩個 useForm 它們之間的驗證是彼此獨立的喔，
就是說自定義的Hook是可以重複使用的，
如同useState、useEffect可以重複使用一樣。

```javascript

import React, { useEffect, useState, useRef } from 'react';
import { useFetch } from './useFetch';
import { useForm } from './useForm';

const Buttontwo = (props) => {

    const [State, setState] = useState({ show: true, count: 0 });

    const result = useFetch(`https://my-json-server.typicode.com/taiwanhua/demo/posts/${State.count}`);

    const [ID, IDhandler, IDregExpResult] = useForm("", "^[a-zA-Z0-9]{0,5}$"); // 宣告一個const接收useForm的三個回傳值，ID、IDhandler 跟驗證的結果，

    const [Phone, Phonehandler, PhoneregExpResult] = useForm("", "^[0-9]{0,10}$");

    return (
        <>
            <p>Buttontwo組件</p>
            <button onClick={() => { setState({ ...State, count: State.count + 1 }) }}>觸發Buttontwo重新渲染次數 : {State.count}</button>
            <p>{JSON.stringify(result)}</p>
            ID : <input value={ID} onChange={IDhandler}></input>
            {IDregExpResult}
            <br />
            Phone: <input value={Phone} onChange={Phonehandler}></input>
            {PhoneregExpResult}
        </>
    )
}

export default Buttontwo;

```

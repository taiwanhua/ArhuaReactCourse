---
id: ReactBuildUI
title: React如何構建畫面
sidebar_label: React如何構建畫面
---

## 

假設我們要寫一個像是課程說明文件的網頁，
在body裡面，我們可能會先在上面寫一個header，裡面有一個div、幾個button等等
再來針對主要內文部分給一個main，其內可能是一個div包著button、更多div等等，
然後最底部有一個footer。

![建構畫面](/ArhuaReactCourse/img/ReactUI.png)

所以在同一份HTML上，全部的標籤結合後的HTML大概如下方 : 

```html
<body>
    <header>
        <div>
            <button/>
            <button/>
            .
            .
            .
        </div>
    </header>
    <main>
        <div>
            <button/>
            <div … />
            .
            .
            .
        <div/>
    </main>
    <footer>
        <div … />
    </footer>
</body>

```

但是React是一個由組件組成的世界，會將各個標籤拆分成組件後結合使用
所以我們先寫Mybutton跟Mydiv組件，裡面各自包著button與div標籤

> 以下Mybutton、Mydiv、Myheader、Mymain、Myfooter這種寫法其實是JSX的寫法，這我們後面會再說明，像Mybutton其實就代表button標籤；
      Mydiv就代表div標籤；


```javascript
//Mybutton組件
<button … />


//Mydiv組件
<div … />
```

接著再把Mybutton跟Mydiv放到header標籤裡，組成Myheader組件、Mymain組件

```javascript
//Myheader組件

<header>
<Mydiv>
    <Mybutton …/>
    <Mybutton …/>
</Mydiv>
    .
    .
    .
</header>

//Mymain組件
<main>
    <Mydiv>
        <Mybutton …/>
        <Mydiv …/>
    </Mydiv>
    .
    .
    .
</main>
```

接著再寫一個footer標籤包著div組成Myfooter組件，

```javascript
//Myfooter組件
<footer>
    <div …/>
</footer>
```

最後把Myheader組件、Mymain組件、Myfooter組件放進頂層組件裡，

>Myheader、Mymain、Myfooter又分別代表由Mybutton與Mydiv組合而成的組件。

```javascript
//Myfooter組件
<body>
    <Myheader/>
    <Mymain/>
    <Myfooter/>
</body>

```

如此一來，畫面看起來的樣子就跟原本HTML畫面的樣子一樣了

![建構畫面](/ArhuaReactCourse/img/ReactUI1.png)

那因為React將畫面拆分成組件，所以我們可以畫出像是這樣子的組件樹出來，
頂層組件下有Myheader、Mymain、Myfooter、其下又有Mybutton、Mydiv的組合，
整個畫面的構建就像是串葡萄一樣，一個組件像一顆葡萄，
把他們一顆一顆組起來最後變成一串完整的葡萄。

![建構畫面](/ArhuaReactCourse/img/ReactUI2.png)

從上圖我們也可以發現Mybutton、Mydiv組件不只能在一個地方被使用，
它可以放在任何一個組件內使用，這提高了程式碼的重用性，
讓你可以更專注在每一個組件的樣式上，
二來，整個專案結構清晰，看了程式碼後你可以很快地知道專案的架構是如何組成
還有像以前把所有東西寫在同一份文件上，很可能今天要修改功能，一不小心就動到其他不應該動的地方
現在改成組件下去寫，我們能清楚的知道現在需要針對哪幾個組件做修改，而不會影響到其它不應該動的地方

最後，替大家統整一下幾個拆分成組件的特點

- 組件可以任意組合、嵌套
- 組件可重用性強
- 能讓專案結構更清晰
- 也讓專案更容易維護
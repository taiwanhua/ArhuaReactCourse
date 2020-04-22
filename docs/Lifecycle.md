---
id: Lifecycle
title: 組件的生命週期 (Lifecycle)
sidebar_label: 組件的生命週期 (Lifecycle)
---

## 類組件的生命週期?

就像是人的生命週期是從出生後經歷生活再到死亡一樣，組件也有生命週期，像是先從初始掛載組件、再隨操作更新組件、最後卸載組件。

![Snippets](/ArhuaReactCourse/img/life1.png)

而為什麼這裡特別指出是類組件的生命週期呢?

因為只有類組件本身就擁有生命週期，
而函數組件必須要透過 useEffect 這個 hook 才能實現類似類組件生命週期的功能，
另外useEffect在實現類似類組件生命週期的功能之外，還能有更多的用途，
這隨後我們都將介紹，現在先讓我們來了解類組件的生命週期，

## 類組件的生命週期圖

我們來看這張類組件生命週期的圖，

![Snippets](/ArhuaReactCourse/img/life2.png)

[生命週期圖片網站連結](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram)

上面圖片中描繪了組件的一生，組件的生命週期主要有三個過程，分別是 Mounting 掛載時過程、Updating 更新時過程、Unmounting 卸載時過程，
掛載時過程指的就是組件剛出生、剛初始創建並渲染組件至DOM tree時，
更新時過程指的是例如使用setState改變state、或props發生改變造成畫面的重新渲染時，
卸載時過程則是說把組件從DOM中拿掉，也就是組件的死亡時，
且每個時間點都有生命週期方法可以使用，
如componentDidMount、componentDidUpdate、componentWillUnmount這些方法。

左邊還分成兩階段，Render與Commit階段，圖中以虛線分隔
在Render階段是不能使用副作用操作的，例如發起Fetch請求，
Commit階段則可以使用副作用等操作。

## Mounting 掛載時過程

我們先看掛載時這條，
首先類組件因為是Class所以會先使用constructor函數來創建組件，
接著使用類組件中必要的render函數返回React element，
再由React更新DOM，將組件加入DOM tree 中，
最後則是componentDidMount這個生命週期方法，
這個方法顧名思義就是說這裡面可以做一些組件掛載之後要做的事，
componentDidMount是緊接在所有組件加入DOM tree 也就是 Mount 掛載之後觸發的方法，
而我們可在這裡面使用副作用之類的操作，這些就是我們掛載時過程中經歷的。

## Updating 更新時過程

再來看更新時過程，
首先，每當props或state發生改變就會觸發組件更新，
或者是使用另一個應該少用的生命週期方法forceUpdate也會觸發組件更新，
觸發更新後render函數返回React element，
然後React比對本次的組件樹與更新前組件樹的差異後，
將改變的部分更新至DOM tree，
最後componentDidUpdate緊接著被觸發，
而在componentDidUpdate裡也適合使用副作用之類的操作。

另外，請注意幾件事，

(1) 凡是組件在更新時，它的所有子組件都會一起更新

(2) 直至組件卸載前，props或state的改變都只會重複觸發組件更新，不會再回頭執行掛載時過程

(3) 在組件重新render之前state都會保持是setState之前的值，直到render函數執行後才會變為新的state

## 多個組件的掛載時過程與更新時過程

其實每個組件都有自己的生命週期，對比先前我們只看App組件一個組件的生命週期，
假如我們不只有一個組件而是有其它子組件，那所有組件生命週期的執行順序又是如何呢?
例如有如下方組件樹，並且為他們都加上生命週期方法 : 

![Snippets](/ArhuaReactCourse/img/life3.png)

部分程式法如下 : 

> 這裡的程式碼主要顯示組件的親屬關係

```javascript
// App.js - App組件內的render函數

  render() {
    return (
      <>
        <p id="pForApp" >這是我第一個函數組件App</p>
        <button onClick={() => { this.updatecount() }}>
            觸發App重新渲染次數 : {this.state.count}
        </button>
        <Buttonone></Buttonone>
        <Buttontwo></Buttontwo>
      </>
    );
  }
```

```javascript
// Buttonone.js - Buttonone組件內的render函數

    render() {
        return (
            <>
                <p id="pForButtonone" >Buttonone組件</p>
                <button onClick={() => { this.updatecount() }}>
                    觸發Buttonone重新渲染次數 : {this.state.count}
                </button>
                <Buttonthree></Buttonthree>
            </>
        );
    }
```

```javascript
// Buttonthree.js - Buttonthree組件內的render函數

    render() {
        return (
            <>
                <p id="pForButtonthree" >Buttonthree組件</p>
                <button onClick={() => { this.updatecount() }}>
                    觸發Buttonthree重新渲染次數 : {this.state.count}
                </button>
            </>
        );
    }
```

```javascript
// Buttontwo.js - Buttontwo組件內的render函數

    render() {
        return (
            <>
                <p id="pForButtontwo" >Buttontwo組件</p>
                <button onClick={() => { this.updatecount() }}>
                    觸發Buttontwo重新渲染次數 : {this.state.count}
                </button>
            </>
        );
    }
```

### 多個組件的掛載時過程

先說其掛載順序為 :

(1) App組件先開始掛載

(2) 掛載App的子組件們，Buttonone組件

(3) 掛載Buttonone組件的子組件Buttonthree

> App組件內Buttonone寫在上面所以會先開始掛載Buttonone，但是Buttonone又有子組件Buttonthree，所以先開始掛載Buttonthree，才回頭開始掛載Buttontwo組件。

(4) 掛載Buttontwo組件

(5) Buttonthree組件的componentDidMount方法

> 當Buttonthree組件一掛載完，就馬上執行Buttonthree組件的componentDidMount方法
      
(6) Buttonone組件的componentDidMount方法    

> 那Buttonthree掛載完後，Buttonone就沒有其他組件需要掛載的了，就相當於Buttonone也掛載完了，所以執行Buttonone組件的componentDidMount方法
     
(7) Buttontwo組件的componentDidMount方法

> 而Buttonone掛載完後，接下來就換Buttontwo組件掛載完了，所以執行Buttontwo組件的componentDidMount方法，

(8) 執行App組件的componentDidMount方法

> 最後因為Buttonone、Buttontwo組件都掛載完了，相當於App也掛載完了，所以執行App組件的componentDidMount方法

所以，我們可以發現一個結論，就是組件在掛載時過程會等全部組件都先掛載完，再去執行componentDidMount方法，
而到這邊就是多個組件的掛載時過程，接下來說明多個組件的更新時過程。

### 多個組件的更新時過程

多個組件的更新時過程，就幾件事要注意 : 

(1) 當某組件更新時，該組件與其所有後代組件都會重新更新，

(2) state是僅屬於各個組件的狀態，各組件間彼此不互相影響，所以組件內的state不會因為外部其它組件而發生變化。

## Unmounting 卸載時過程

組件最後一個過程，卸載時，就是當組件從DOM中被拿掉後馬上就會觸發componentWillUnmount方法，這裡面適合進行清理的操作，如取消計時器、等等。
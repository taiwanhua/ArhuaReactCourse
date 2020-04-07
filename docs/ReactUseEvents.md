---
id: ReactUseEvents
title: 使用事件、更多屬性與傳遞屬性
sidebar_label: 使用事件、更多屬性與傳遞屬性
---

## 使用事件

React在使用事件上，例如 onclick、onmouseover、等等，跟在HTML使用十分相似，但有一些語法上的差異，
舉例來說，React事件的名稱是駝峰命名，而在HTML中則都是小寫，且事件的值在JSX中是一個函數，而在HTML則是一個字串，

```javascript

<button onClick={myClickEvent}>
  按鈕
</button>

```

React (上) 對比 HTML (下)

```html

<button onclick="myClickEvent()">
  按鈕
</button>

```

還有在React裡若需要取消預設事件的話，必須要使用preventDefault函數，
不能像HTML一樣直接return false

```javascript

<a href="#" onClick={(e) =>{e.preventDefault();} }>
  連結
</a>

```

React (上) 對比 HTML (下)

```html

<a href="#" onclick="return false">
  連結
</a>

```

## 更多屬性

其實JSX除了可以使用我們說到的ClassName屬性、style屬性、事件之外，還支援更多其它屬性，這裡整理部分屬性列於下
更多屬性可參考至 : https://zh-hant.reactjs.org/docs/dom-elements.html

React 中可以使用這些 DOM attribute：

```tex
accept acceptCharset accessKey action allowFullScreen alt async autoComplete
autoFocus autoPlay capture cellPadding cellSpacing challenge charSet checked
cite classID className colSpan cols content contentEditable contextMenu controls
controlsList coords crossOrigin data dateTime default defer dir disabled
download draggable encType form formAction formEncType formMethod formNoValidate
formTarget frameBorder headers height hidden high href hrefLang htmlFor
httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list
loop low manifest marginHeight marginWidth max maxLength media mediaGroup method
min minLength multiple muted name noValidate nonce open optimum pattern
placeholder poster preload profile radioGroup readOnly rel required reversed
role rowSpan rows sandbox scope scoped scrolling seamless selected shape size
sizes span spellCheck src srcDoc srcLang srcSet start step style summary
tabIndex target title type useMap value width wmode wrap
```

同樣地，所有 SVG attribute 都可以使用：

```tex
accentHeight accumulate additive alignmentBaseline allowReorder alphabetic
amplitude arabicForm ascent attributeName attributeType autoReverse azimuth
baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight
clip clipPath clipPathUnits clipRule colorInterpolation
colorInterpolationFilters colorProfile colorRendering contentScriptType
contentStyleType cursor cx cy d decelerate descent diffuseConstant direction
display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground
end exponent externalResourcesRequired fill fillOpacity fillRule filter
filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize
fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy
g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef
gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic
imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength
kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor
limitingConeAngle local markerEnd markerHeight markerMid markerStart
markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode
numOctaves offset opacity operator order orient orientation origin overflow
overlinePosition overlineThickness paintOrder panose1 pathLength
patternContentUnits patternTransform patternUnits pointerEvents points
pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits
r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions
requiredFeatures restart result rotate rx ry scale seed shapeRendering slope
spacing specularConstant specularExponent speed spreadMethod startOffset
stdDeviation stemh stemv stitchTiles stopColor stopOpacity
strikethroughPosition strikethroughThickness string stroke strokeDasharray
strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity
strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor
textDecoration textLength textRendering to transform u1 u2 underlinePosition
underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic
vHanging vIdeographic vMathematical values vectorEffect version vertAdvY
vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing
writingMode x x1 x2 xChannelSelector xHeight xlinkActuate xlinkArcrole
xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlns xmlnsXlink xmlBase
xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan

```

## 傳遞屬性

我們也可以使用自訂的屬性，只要它們是完全小寫的。知道了這件事
我們來說明如何使用自訂屬性來傳遞屬性，

假設有兩個組件，一個為App組件、一個為Buttonone組件，
在App組件引入Buttonone組件後，在Buttonone標籤上面寫一個自訂屬性，通常會叫做props令其等於物件a為1，
這樣就代表我們要將props屬性傳入buttonone組件裡，並且我們可以在buttonone組件裡取用這個屬性傳入的物件

```javascript
import React from 'react';
import Buttonone from './Buttonone'

const App = () => {
  return (
    <>
      <Buttonone props={{ a: 1 }}></Buttonone>
    </>
  )
}

export default App;
```

當然我也傳入多個自訂屬性像這樣子，傳入props、p1、p2三個自訂屬性

```javascript
import React from 'react';
import Buttonone from './Buttonone'

const App = () => {
  return (
    <>
      <Buttonone props={{ a: 1 }} p1={{ b: 2 }} p2={{ c: 3 }}></Buttonone>
    </>
  )
}

export default App;
```

傳入物件可以這樣使用，先至buttonone組件裡，讓他接受參數，名字方便大家區分我就叫做p吧，
先把它輸出看看，它輸出了一個物件，裡面包著我們剛剛宣告的物件props、p1與p2。

```javascript

import React from 'react';

const Buttonone = (p) => {
    console.log(p);//輸出傳入物件

    return (
        <button>按鈕</button>
    )
}

export default Buttonone;

//輸出 : { props: { a: 1 }, p1={ b: 2 }, p2={ c: 3 } }
```

接著可以把這個物件做一下解構賦值，如圖片這樣，把剛才輸出的物件解構到props跟other裡

![Event](/ArhuaReactCourse/img/Event.png)


改一下接收的參數p，改成 { props, ...other } ，其中將props屬性解構成props，其他屬性用拓展符放到物件other裡，
再輸出一下props跟other，
你會發現prop就是物件a為1，而other是一個物件包著p1、P2，
這樣一來就很方便我們使用App組件傳遞過來的屬性了，例如，可以使用如 {props.a}、{other.p1.b}，

```javascript

import React from 'react';

const Buttonone = ({ props, ...other }) => {
    console.log(props);
    console.log(other);

    return (
        <button>按鈕 {props.a} {other.p1.b}</button>
    )
}

export default Buttonone;

```

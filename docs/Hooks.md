---
id: Hooks
title: React Hooks簡介
sidebar_label: React Hooks簡介
---

官方網站連結 : https://zh-hant.reactjs.org/docs/hooks-intro.html

Hook 是2018年React在版本16.8中新增的功能，它讓我們不必使用class寫類組件就能使用state與其它功能，
而Hook這個單字的意思是鉤子，
React Hooks又比喻說，盡量把組件寫成函數組件，
且在需要使用副作用時，函數組件再搭配使用鉤子把外部的程式碼或功能鉤進來使用，
例如我想使用state就使用useState這個鉤子，就能在函數組件中使用state。

> 副作用，原文為side effect，指的是函數內部與外部互動並產生運算以外的其他結果，
例如使用fetch請求數據就是一種副作用。

其實在React Hooks 出現以前，
組件標準的寫法是使用class下去寫類組件，
但是隨著時間過去，React的開發人員發現，
class的寫法很難拆分、重構和測試，
且class讓人和電腦同時感到很困惑，
因為使用class寫類組件代表必須要理解this在javascript中如何運作，
而javascript的this跟其他大部分的程式語言又非常不同，
並且還需要透過bind來綁定事件，這樣一來整個程式碼的書寫將會非常繁瑣，
所以，React Hooks 的出現就是為了解決這些問題，
它讓你不需要寫類組件，僅以函數組件就能夠使用state與其他更多功能，
總而言之，透過函數組件搭配React Hooks讓你以更簡單、更方便的方式開發組件。

說到這邊，如果你以前有使用過類組件寫法的同學，Hook 可以與你既有的程式碼一起運作，
因此你可以逐步採用它們，
Hook 不會取代你對 React 概念的了解。
而是對你已經熟悉的 React 概念：
props、state、context、refs 以及生命週期，提供了一個更直接的 API；
而對於沒有使用過的同學，你可以直接學習React Hooks，也許你能更快上手Hook，
因為你沒有書寫類組件上想法的包袱。
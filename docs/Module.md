---
id: module
title: module(模組化) import、export
sidebar_label: module(模組化) 
---

## module(模組化)

歷史上，JavaScript一直沒有模組（module）體系，無法將一個大程序拆分成互相依賴的小文件，再用簡單的方法拼裝起來。
而ES6 在語言標準的層面上，實現了模組功能，而且實現得相當簡單，成為瀏覽器和服務器通用的模組解決方案。
模組功能主要由兩個命令構成：export和import。export命令用於導出模組，import命令用於引入其他模組。
一個模組就是一個獨立的文件(如.js文件)。該文件內部的所有變數，外部無法獲取。
如果你希望外部能夠讀取模組內部的某個變數，就必須使用export導出變數，並用import引入該變數。

### export

下面是一個JS文件，ES6將其視為一個模組，裡面用export命令對外部導出了三個變數。

```js
// export.js
export const firstName = 'Michael';
export const lastName = 'Jackson';
export const year = 1958;
```

export的寫法，同一文件中上面這樣等價於下面寫法，應優先使用下列寫法更為清楚俐落。

```js
// export.js
const firstName = 'Michael';
const lastName = 'Jackson';
const year = 1958;

export { firstName, lastName, year };
```

export除了導出變數，還可以導出函數或類（class）。

```js
// export.js
export function Add(x, y) {
  return x + y;
};

//或等價於以下
function Add(x, y) {
  return x + y;
};

export{ Add };
```

通常情況下，export導出的變數就是本來的名字，但是可以使用as關鍵字重命名，就可以讓同一變數以不同的名字導出兩次。

```js
// export.js
function Function1() { ... }
function Function2() { ... }

export {
  Function1 as export1,
  Function2 as export2,
  Function2 as exportagain2
};
```

export加上default為默認導出，使用戶可以在不知道export.js內容的情況下，就可以引入模組。

```js
// export.js
function Function1() { ... }
function Function2() { ... }

export default Function2;
```

另外，export語句輸出的接口，與其對應的值是**動態**綁定關係，即可以取到模組內部實時的值。

```js
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);
//變數foo，值為bar，500毫秒之後變成baz。
```

### import

使用export命令定義了模組的導出接口以後，其他JS文件就可以通過import引入這個模組。如以下import.js引入先前export.js內的變數。

```js
// export.js
const firstName = 'Michael';
const lastName = 'Jackson';
const year = 1958;

export { firstName, lastName, year };

// import.js
import { firstName, lastName, year } from './export.js';//假設import.js與export.js在同一目錄下

function setName(element) {
  let GetFromExport = firstName + year + lastName;
}

//又或者全部一起引入
// import.js
import * as all from './export.js';//假設import.js與export.js在同一目錄下

function setName(element) {
  let GetFromExport = all.firstName + all.year + all.lastName;
}

```

import引入時也能替變數重新命名如以下

```js
// export.js
const firstName = 'Michael';
const lastName = 'Jackson';
const year = 1958;

export { firstName, lastName, year };

// import.js
import { lastName as surname } from './export.js';//只挑需要使用的引入
```

為了給用戶提供方便，讓他們不用閱讀文檔就能加載模組，引用以export default導出的模組，不需要知道原模組輸出的名字就能引入。**請注意，這時import命令後面，不使用大括號。**

```js
// export.js
function Function1() { ... }
function Function2() { ... }

export default Function2;

// import.js
import customName from './export';//加載該模組時，import命令可以為該匿名函數指定任意名字，不需要知道原模組輸出的名字。
//customName即export.js中的Function2
```

### export 與import 的複合寫法

如果在一個模組之中，先輸入後輸出同一個模組，import語句可以與export語句寫在一起。
但需要注意的是，寫成一行以後，foo和bar實際上並沒有被導入當前模組，
只是相當於轉發了這兩個變數，導致當前模組不能直接使用foo和bar。

```js
//this.js
export { foo, bar } from './other';

// 同下，差別在下方在當前文件this.js可以使用foo, bar
import { foo, bar } from './other';
export { foo, bar };
```

### export import 速查小表

|export import        | 方式                                         | 範例                   |
|---------------------|----------------------------------------------|-----------------------|
|export               | 一般導出                                      | export const firstName = 'Michael';<br/>export const lastName = 'Jackson';<br/>export const year = 1958;  |
|                     |                                              | const firstName = 'Michael';<br/>const lastName = 'Jackson';<br/>const year = 1958;<br/><br/>export { firstName, lastName, year };                   |
|                     | 導出重新命名 (as)                             | function Function1() { ... }<br/>function Function2() { ... }<br/><br/>export {<br/>  Function1 as export1,<br/>  Function2 as export2,<br/>  Function2 as exportagain2<br/>}; |
|                     | 默認導出                                      | function Function1() { ... }<br/>function Function2() { ... }<br/><br/> export default Function2 ; |
|import               | 一般引入                                      | `import { firstName, lastName, year } from './export.js' ;`<br/><br/>function setName(element) {<br/>  let GetFromExport = firstName + year + lastName;<br/>} |
|                     | 引入重新命名 (as)                             | import { lastName as surname } from './export.js';                 |
|                     | 全部引入並重新命名                            | `import * as all from './export.js' ;`<br/><br/>function setName(element) {<br/>  let GetFromExport = all.firstName + all.year + all.lastName;<br/>} |
|                     | 引入默認導出模組                              | `import customName from './export.js' ;` |

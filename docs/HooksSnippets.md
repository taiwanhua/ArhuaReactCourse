---
id: HooksSnippets
title: React Hooks 程式碼片段 (Snippets)
sidebar_label: React Hooks 程式碼片段 (Snippets)
---

## 使用useState

```json
"使用useState": {
	"prefix": "$useState0001",
	"body": [
		"const [${1:state名}, set${1:state名}] = useState(${2:state初始值});"
	],
	"description": "使用useState"
}
```

## 使用useContext

```json
"使用useContext搭配useState": {
	"prefix": "$useContext0001",
	"body": [
		"//使用Context搭配useState實現跨組件通訊步驟 :",
		"//1. 創建Contetx ， const Context =createContext(\"初始值\");",
		"//2. 使用Context.Provider標籤包裹需要使用Context的子組件",
		"//3. 以useContext取代Context.Consumer標籤，並解構出Contetx內容供直接使用",
		"",
		"const [${1:Context內State名}, set${1:Context內State名}] = useContext(${2:使用的Context});"
	],
	"description": "使用useContext搭配useState"
}
```

### 創建Context

```json
"創建Context": {
	"prefix": "$Context0001",
	"body": [
		"//透過createContext創建Context",
		"export const ${1:Context名} = createContext(${2:Context初始值});"
	],
	"description": "創建Context"
}
```

## 使用useEffect

```json
"使用useEffect": {
	"prefix": "$useEffect0001",
	"body": [
		"useEffect(() => {",
		"  //EffectCallback，可處理副作用",
		"  ${1:副作用...}",
		"",
		"  return () => {",
		"    // cleanup function，下一次執行EffectCallback前或卸載時執行，可做清理工作",
		"    ${2:清理工作...}",
		"  }",
		"  ",
		"  //(1) 不傳DependencyList : 組件更新時都執行EffectCallback",
		"  //(2) DependencyList為空陣列 : 僅執行一次EffectCallback",
		"  //(3) DependencyList為非空陣列 : DependencyList若改變會執行EffectCallback，",
		"  ",
		"}, [${3:DependencyList}])"
	],
	"description": "使用useEffect"
}

```

## 使用useRef

```json
"使用useRef": {
	"prefix": "$useRef0001",
	"body": [
		"const ${1:ref名} = useRef(${2:初始值});"
	],
	"description": "使用useRef"
}

```

## 使用useReducer

```json
"使用useReducer": {
	"prefix": "$useReducer0001",
	"body": [
		"const [${1:state名}, ${2:dispatch函數名}] = useReducer(${3:reducer函數名}, ${4:initialState(狀態初始值)}, ${5:init函數名});",
		"// 1. 請接續在組件外設定reducer函數 (組件重新更新、渲染時才不會重複宣告或使用函數)",
		"// 2. 可透過dispatch函數傳入action物件並調用reducer函數更新state",
		"// 3. 若設置init函數，其可以接受initialState作為參數使用，",
		"//    並且其返回值會覆蓋initialState成為狀態初始值"
	],
	"description": "使用useReducer"
}
```

### reducer函數

```json
"reducer函數": {
	"prefix": "$reducer0001",
	"body": [
		"const ${1:reducer函數名} = (state, action) => {",
		"    //1. 參數state為上一個狀態",
		"    //2. 參數action為自dispatch函數傳入的action物件",
		"    //3. 下方透過action.type做對應的處理，",
		"    //   讓其 return 的返回值成為下一個狀態 State",
		"    ",
		"    switch (action.type) {",
		"        case \"${2:情況1}\":",
		"            return ${3:下一個狀態1};",
		"        case \"${4:情況2}\":",
		"            return ${5:下一個狀態2};",
		"        case \"${6:情況3}\":",
		"            return ${7:下一個狀態3};",
		"        default:",
		"            return ${8:下一個狀態4};",
		"    }",
		"}"
	],
	"description": "reducer函數"
},
```

### action物件

```json
"action物件": {
	"prefix": "$action0001",
	"body": [
		"{ type: \"${1:哪種情況}\", payload: {${2:與更新State相關的值} }",
		"//1. type為用來描述如何更新State、使用哪種情況",
		"//2. payload為視情況需要多傳入一個payload屬性，",
		"//   裡面可以放一些與更新State相關的值"
	],
	"description": "action物件"
},
```

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

---
id: ModuleSnippets
title: module 程式碼片段 (Snippets)
sidebar_label: module 程式碼片段 (Snippets)
---

## export

```json
"export 一般導出": {
	"prefix": "$export001",
	"body": [
		"//export 一般導出",
		"export const ${1:導出名} = ${2:導出內容};"
	],
	"description": "export 一般導出"
},
"export 一般導出1": {
	"prefix": "$export002",
	"body": [
		"//export 一般導出1",
		"export { ${1:導出名}, ${2:導出名}, ${3:導出名} };"
	],
	"description": "export 一般導出1"
},
"export 導出重新命名 (as)": {
	"prefix": "$export003",
	"body": [
		"//export 導出重新命名 (as)",
		"export {",
		"    ${1:導出內容} as ${2:導出名},",
		"    ${3:導出內容} as ${4:導出名},",
		"    ${5:導出內容} as ${6:導出名}",
		"};"
	],
	"description": "export 導出重新命名 (as)"
},
"export 默認導出": {
	"prefix": "$export004",
	"body": [
		"//export 默認導出",
		"export default ${1:導出內容};"
	],
	"description": "export 默認導出"
}
```

## import

```json
"import 一般引入": {
	"prefix": "$import001",
	"body": [
		"//import 一般引入",
		"import { ${1:引入名}, ${2:引入名}, ${3:引入名} } from '${4:引入文件路徑}';"
	],
	"description": "import 一般引入"
},
"import 引入重新命名 (as)": {
	"prefix": "$import002",
	"body": [
		"//import 引入重新命名 (as)",
		"import { ${1:引入名} as ${2:新引入名} } from '${3:引入文件路徑}';"
	],
	"description": "import 引入重新命名 (as)"
},
"import 全部引入並重新命名": {
	"prefix": "$import003",
	"body": [
		"//import 全部引入並重新命名",
		"import * as ${1:引入名} from '${2:引入文件路徑}';"
	],
	"description": "import 全部引入並重新命名"
},
"import 引入默認導出模組，無須知道原模組輸出名": {
	"prefix": "$import004",
	"body": [
		"//import 引入默認導出模組，無須知道原模組輸出名",
		"import ${1:引入名} from '${2:引入文件路徑}' ;"
	],
	"description": "import 引入默認導出模組，無須知道原模組輸出名"
}
```
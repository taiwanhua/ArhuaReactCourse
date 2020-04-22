---
id: ReactComponentSnippets
title: React Component 程式碼片段 (Snippets)連結
sidebar_label: React Component 程式碼片段 (Snippets)連結
---

## 函數組件

```json
"創建函數組件": {
	"prefix": "$FunctionComponent0001",
	"body": [
		"const ${1:組件名字} = (${2:組件props}) => {",
		"    return (",
		"        <>",
		"            ${3:組件內容}",
		"        </>",
		"    )",
		"}"
	],
	"description": "創建函數組件"
} 
```

## 創建類組件

```json
"創建類組件": {
	"prefix": "$Z$ClassComponent0001",
	"body": [
		"//繼承的Component一般引入自react",
		"class ${1:組件名字} extends Component {",
		"  constructor(${2:組件props}) {",
		"    super(${2:組件props});",
		"  }",
		"  componentDidMount() {",
		"    //組件被加入DOM tree ( Mount 掛載 ) 後觸發",
		"  }",
		"  componentDidUpdate() {",
		"    //組件的props或state改變，促使組件重新更新、渲染後觸發",
		"  }",
		"  componentWillUnmount() {",
		"    //組件自DOM tree 中拿掉、卸載後觸發",
		"  }",
		"",
		"  render() {",
		"    //必要的render方法，如同函數組件一般返回JSX，後會被轉成React Element",
		"    return (",
		"      <>",
		"        ${3:組件內容}",
		"      </>",
		"    );",
		"  }",
		"}",
	],
	"description": "創建類組件"
}
```
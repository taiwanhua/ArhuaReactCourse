---
id: PropTypesSnippets
title: PropTypes 程式碼片段 (Snippets)
sidebar_label: PropTypes 程式碼片段 (Snippets)
---

## 使用PropTypes 

```json

"使用PropTypes": {
	"prefix": "$PropTypes0001",
	"body": [
		"//引入自 : import PropTypes from 'prop-types';",
		"${1:組件名字}.propTypes = {",
		"  //    名稱       |     類型",
		"  ${2:想檢查的props名稱}: PropTypes.array,",
		"  ${2:想檢查的props名稱}: PropTypes.bool,",
		"  ${2:想檢查的props名稱}: PropTypes.func,",
		"  ${2:想檢查的props名稱}: PropTypes.number,",
		"  ${2:想檢查的props名稱}: PropTypes.object,",
		"  ${2:想檢查的props名稱}: PropTypes.string,",
		"  ${2:想檢查的props名稱}: PropTypes.symbol,",
		"  ${2:想檢查的props名稱}: PropTypes.node,",
		"  ${2:想檢查的props名稱}: PropTypes.element,",
		"  ${2:想檢查的props名稱}: PropTypes.elementType,",
		"  ",
		"  // 檢查是否為陣列內其中一種類型",
		"  ${2:想檢查的props名稱}: PropTypes.oneOfType([",
		"    PropTypes.string,",
		"    PropTypes.number",
		"  ]),",
		"  // 檢查陣列是否為某種類型",
		"  ${2:想檢查的props名稱}: PropTypes.arrayOf(PropTypes.number),",
		"  // 檢查物件其內 value 值是否為某種類型",
		"  ${2:想檢查的props名稱}: PropTypes.objectOf(PropTypes.number),",
		"  // 檢查物件其內 \"指定\" value 值是否為某種類型   (color、fontSize為舉例的 Key 名)",
		"  ${2:想檢查的props名稱}: PropTypes.shape({",
		"    color: PropTypes.string,",
		"    fontSize: PropTypes.number",
		"  }),",
		"  // 檢查某指定類型的props是否傳入，( isRequired設定其為必傳 )",
		"  ${2:想檢查的props名稱}: PropTypes.func.isRequired,",
		"  // 檢查某任意類型的props是否傳入，( isRequired設定其為必傳 )",
		"  ${2:想檢查的props名稱}: PropTypes.any.isRequired",
		"}"
	],
	"description": "使用PropTypes"
}

```
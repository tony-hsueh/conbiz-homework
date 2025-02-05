### CONBIZ 2025前端測驗

## 第1題的回答放在 1-sortArray.js 中

## 第2題
Q1: Explain why does this color not works, and how to fix make it work on 1st list

A1: 因為CSS權重，把題目中的.container .shop-list li.item 與.container .shop-list .item 相比，第一個比第二個多一個li元素選擇器，那權重自然大一些，因此會顯示綠色而非藍色。

若要讓第一個列表呈現藍色，第二個列表維持綠色，可以從以下方式挑選：
- .container .shop-list .item 改為 .container ol.shop-list .item
- ol元素加上id `<ol class="shop-list" id="primary">`，然後css改為.container #primary .item

Q2. Write styling make every other line give background color to next one
```
.container .shop-list li:nth-child(odd) {
  background-color: #f0f0f0;
}

.container .shop-list li:nth-child(even) {
  background-color: #ffffff;
}
```

## 第7題 程式碼放在 7-react-task.js
這題會發生切換名字時，狀態共用的問題，主要是因為React使用key來來決定是否要重新渲染一個組件，以原先的例子來看，React會視為同個組件，因此並不會發生卸載，因此狀態就不初始化了。若想讓兩者保有各自的tasks數量，那就需要將tasks狀態改寫到TaskManager中來管理，如此程式中就不必寫兩次TaskCounter了，也不需要寫key來辨別元件。

## 第8題 程式碼放在 7-react-task.js
第一個錯誤是，程式碼parseInt(value1)，但value1並未被宣告過

## 第9題 程式碼放在 9-parentchild.js
首先我會先使用 createContext 與 useContext 解決prop drilling 的問題，
接下來，我會處理顯示名字和年紀，重構這一段，用一個共用元件來整理重複的邏輯
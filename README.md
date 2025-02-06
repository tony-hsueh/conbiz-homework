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

## 第3題 程式碼放在 3-uniqueArr.js

## 第4題
Virtual DOM是React提升性能的核心機制，它存在於記憶體中，本質上是Javascript物件構成的DOM樹。只有在元件的state
或props發生改變時，React才會重新渲染該元件，生成新的Virtual DOM，接著和之前的版本作比較，找出實際發生變化的部分後，
React才會更新真實DOM中需要改變的部分，而不是整個頁面重新渲染。

Virtual DOM主要解決2個核心問題，DOM操作的性能問題＆程式開發的複雜度問題
直接操作DOM是很昂貴的事情，每次的操作都會讓瀏覽器重繪與重排。若有多個操作要同時進行，傳統方式需要多次重排重繪，而Virtual DOM
可以批量處理，減少重排重繪的次數。
當開發者需要多個元素去做狀態的改變，程式碼會十分冗長，容易出錯。透過聲明式來描述UI應該長什麼樣子，程式碼相對可讀性高一些。

## 第5題

## 第6題
- 開發效率
框架提供現成的結構和工具提升開發者的效率，像是路由管理。無框架則必須開發者手動處理，開發過程可能會缺乏統一的架構
- 響應速度
在需要頻繁數據更新的情況下，框架中像是React有Virtual Dom，可做到局部更新，無框架的網頁則需要整個頁面刷新，相較起來有框架的響應速度會快一些

## 第7題 程式碼放在 7-react-task.js
這題會發生切換名字時，狀態共用的問題，主要是因為React使用key來來決定是否要重新渲染一個組件，以原先的例子來看，React會視為同個組件，因此並不會發生卸載，因此狀態就不初始化了。若想讓兩者保有各自的tasks數量，那就需要將tasks狀態改寫到TaskManager中來管理，如此程式中就不必寫兩次TaskCounter了，也不需要寫key來辨別元件。

## 第8題 程式碼放在 8-todolist.js
1. 程式碼parseInt(value1)，但value1並未被宣告過
2. todos 是陣列，若是解構成物件，需要指定index
3. handleStudyPointsChange 中把basePoints當函式使用，但basePoints並非函式
4. toggleTodo 中的邏輯直接修改原始陣列，然後放到setTodos，這會導致React無法檢測到狀態變化，而無法正確重新渲染元件
5. 在button中直接呼叫函式，代表畫面初次渲染時觸發，當中剛好有使用到setTodos所以畫面會重新渲染，然後又觸發函式，假設畫面中無其他錯誤，會產生渲染太多次的錯誤訊息

## 第9題 程式碼放在 9-parentchild.js
首先我會先使用 createContext 與 useContext 解決prop drilling 的問題，
接下來，我會處理顯示名字和年紀，重構這一段，用一個共用元件來整理重複的邏輯

## 第10題 程式碼放在 10-input.js
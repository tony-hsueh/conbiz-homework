/*
let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5,
4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
Please write down a function to console log unique value from this array.
*/

// 從陣列中console出沒有重複過的唯一值(預期結果：9, 6)
function getUniqueNumber(items) {
  const uniqueNumMap = new Map()
  items.forEach(num => {
    uniqueNumMap.set(num, (uniqueNumMap.get(num) || 0) + 1)
  })
  const uniqueNumFromArr = [...uniqueNumMap]
  uniqueNumFromArr.forEach(([num, times]) => {
    if (times !== 1) return
    console.log(num)
  })
}
// 把重複數值移除(預期結果：1, 5, 2, 3, 4, 7, 8, 9, 0, 6)
function getUniqueNumber2(items) {
  const uniqueSet = [...new Set(items)]
  uniqueSet.forEach(val => {
    console.log(val)
  })
}

let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];

getUniqueNumber(items)
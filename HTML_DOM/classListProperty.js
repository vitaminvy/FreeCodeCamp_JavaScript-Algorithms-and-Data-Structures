//ClassList property
/**
 * add
 * contain
 * remove
 * toggle
 */
var boxElement = document.querySelector('.box');
//.classList => return DomTokenList:
//  quản lí các class của chính Element  đang gọi tới
console.log(boxElement.classList)
//Output: 
/**DOMTokenList(2) ['box', 'box-1', value: 'box box-1']
0: "box"
1: "box-1"
length: 2
value: "box box-1"
[[Prototype]]
: DOMTokenList */
boxElement.classList.add('red');
console.log(boxElement.classList.contains('red'))
boxElement.classList.remove('red');

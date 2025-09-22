/*  trình duyệt nhận được chuỗi html => dịch chuỗi html ra mô hình DOM
*/

var headingNode = document.getElementById("heading");
console.log(headingNode) // output: "<h1 id="heading">HTML DOM</h1>
// Khi trả về null => không thể lấy được"

var headingNodes = document.getElementsByClassName("heading1");
console.log(headingNodes);
/*HTMLCollection(3)
0
: 
h1.heading1
1
: 
h1.heading1
2
: 
h1.heading1
length
: 
3 */

var headingNodesTags = document.getElementsByTagName("h1");
console.log(headingNodesTags);
/**Output:
 * HTMLCollection(4) [h1#heading, h1.heading1, h1.heading1, h1.heading1, heading: h1#heading]
0
: 
h1#heading
1
: 
h1.heading1
2
: 
h1.heading1
3
: 
h1.heading1
heading
: 
h1#heading
length
: 
4
[[Prototype]]
: 
HTMLCollection
 */


// Trả về dạng nodeList
// chỉ lấy một phần tử
var headingNode = document.querySelector(".box .heading-2");
console.log(headingNode);


// lấy tất cả
var headingNode = document.querySelector(".box .heading-2");
console.log(headingNode);


// Lấy thẻ li ở box-1
// Cách 1
var listItemNodes = document.querySelectorAll(".box-1 li");
console.log(listItemNodes);

// Cách 2
//Task 1: sử dụng boxNode
var boxNode = document.querySelectorAll(".box-1")[0];
console.log(boxNode);

//Task 2: Sử dụng các li elements là con của `box-1`
console.log(boxNode.querySelectorAll("li"));


console.log(document.forms)
//HTMLCollection(2) [form#form-1, 
// form#form-2, form-1: form#form-1, form-2: form#form-2]

// Lấy form đầu tiên
console.log(document.forms[0]);
console.log(document.forms['form-1']);


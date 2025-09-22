var boxElement = document.querySelector(".box");
boxElement.innerHTML = '<h1 title="heading">Heading</h1>' // thêm h1 vào div 
console.log(boxElement.innerHTML); // output : <h1 title="heading">Heading</h1>
console.log(boxElement.outerHTML); // output: <div class="box"><h1 title="heading">Heading</h1></div>


//outer html
boxElement.outerHTML = "<span>Test</span>" // ghi đè lên ".box"
// console.log => trong bộ nhớ vẫn còn .box 
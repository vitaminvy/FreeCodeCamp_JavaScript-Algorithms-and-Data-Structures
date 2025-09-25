//Dom style: sinh ra CSS inline
var boxElement = document.querySelector('.box');
boxElement.style.width = '100px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'red';
console.log(boxElement.style)

//Set nhiều thuộc tính
Object.assign(boxElement.style,{
    width: '100px',
    height:'200px',
    backgroundColor:'green'

}
)
//Lấy ra thuộc tính css inline
console.log(boxElement.style.backgroundColor)
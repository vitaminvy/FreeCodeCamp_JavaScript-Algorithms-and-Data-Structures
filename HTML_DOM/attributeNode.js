//Set attribute
var headingElement = document.querySelector("a");
//Dùng setter 
headingElement.href = "Heading";
console.log(headingElement)

//Dùng setAttribute()
headingElement.setAttribute('id', 'heading')

//Get attribute
console.log(headingElement.getAttribute('id'));


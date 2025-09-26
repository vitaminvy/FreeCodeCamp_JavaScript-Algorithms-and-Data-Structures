var inputElement = document.querySelector('input[type="text"]');
/*
console.log(inputElement)
inputElement.onchange = function(e){
        console.log("onchane:", e.target.value);

}*/
inputElement.onkeyup = function(e){
    console.log(e.target.value)
    // trả về một keydown event
}
// onkeypress:

var inputElement = document.querySelector('input[type="checkbox"]');
console.log(inputElement)
inputElement.onchange = function(e){
        console.log("onchane:", e.target.checked);
        
} 


var inputElement = document.querySelector('select');
console.log(inputElement)
inputElement.onchange = function(e){
        console.log("onchane:", e.target.value); // in ra value của thẻ option

}
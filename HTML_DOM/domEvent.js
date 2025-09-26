//Dom events
//1.Atrribute events
//2. Assgin even using the element node

var h1Element = document.querySelectorAll("h1");
for (var i = 0; i < h1Element.length; i++){
    h1Element[i].onclick = function(e){
    console.log(e.target) ; // e: mouse event
    //e.target : trả chính phần tử tác động vào 
} //chỉ select element nhìn thấy đầu tiên trong dom

}

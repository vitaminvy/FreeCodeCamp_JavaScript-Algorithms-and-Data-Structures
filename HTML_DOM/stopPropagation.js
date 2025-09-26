document.querySelector('div').onclick =
    function(){
        console.log('div')
        
    }
document.querySelector('button').onclick =
    function(e){
        e.stopPropagation(); // ngăn chặn nổi bọt
        console.log('clickme')
        
    }
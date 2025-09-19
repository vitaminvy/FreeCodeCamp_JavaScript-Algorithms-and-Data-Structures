// 125 filter
Array.prototype.myFilter = function(cb) {
    var output = [];
    for (var index in this){
        if(this.hasOwnProperty(index)){
           var result = cb(this[index],(index),this);
           if(result)output.push(this[index]);
        }
    }
    return output;
    
}

const numbers = [5, 5, 5, 5,5,5];
console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
}));
console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); 
console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
}));

//127 some
Array.prototype.mySome = function(cb) {
    var output = false;
    for (var index in this){
        if(this.hasOwnProperty(index)){
            if (cb(this[index], index, this)){
                output = true;
                break;
            }
        }
    }
    return output;

    
}
const num = [1, 3, 3, 5];

console.log(numbers.mySome(function (number) {
    return number % 2 === 0;
}))

console.log(numbers.mySome(function (number, index) {
    return index % 2 === 0;
}));

console.log(numbers.mySome(function (number, index, array) {
    return array.length % 2 === 0;
}));


/**
Expected results:

const numbers = [1, 3, 3, 5];



 Output: true

 Output: true
 */








// Là hàm
// Được truyền qua đối số
// Được gọi lại (trong hàm nhận đối số)
function myFunction(param){
if(typeof param == 'function'){ // Phải là function mới thực thi
    param('Hoc');
    console.log(typeof param) //function
}
}
function myCallBack(value){
    console.log("value:", value)
}
myFunction(myCallBack);



// -----------------------
// được định nghĩa dưới dạng constructor Array
Array.prototype.map2 = function(callback){
    //console.log(this)// this là cái gọi tới phương thức map2
    var output = [];
   var   arrayLength = this.length;
    for (var i = 0; i < arrayLength; i++){
       var result =  callback(this[i],i)
        output.push(result);

    }
    return output;
}
Array.prototype.forEach2 = function(callback){
    var arrayLength = this.length;
    var result = 0;
    for (var i = 0; i < arrayLength; i++){
        callback(this[i],i);
        


    }
}
Array.prototype.reduce2 = function(callback,intitalValue){
    arrayLength = this.length;
    var accumulator = intitalValue;
    var i = 0;
    if(arguments.length < 2){

        accumulator = this[0];
        i = 1


    }
    for (; i < arrayLength; i++){
        accumulator  = callback(accumulator,this[i])

    }
    return accumulator;
}
Array.prototype.find2 = function(callback){
    var arrayLength = this.length;
    var result = undefined;
    for (var i = 0; i < arrayLength; i++){
        if (callback(this[i],i,this)){
            result = this[i];
            break;

        };
      
        
    }
    return result;
    

}
var courses = [
    "Javascript", 
    "PHP",
    "Ruby"
]
var num = [1,2,3,4];
var html = courses.map2(function(course){
    return `<h2>${course}<h2>`

});
var i = 0;
console.log (courses.forEach2(function(course,i){
    console.log(`course ${i + 1}: ${course}`);

}))
console.log(html.join(''))

var sum = num.reduce(function(acc, n){
    return acc + n

})
console.log(sum);

var findElement = courses.find2(function(course){
    return course[0]== "J";
})
console.log(findElement);


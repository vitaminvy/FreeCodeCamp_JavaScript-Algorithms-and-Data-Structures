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
// for each nhận vào hai đối số: cb, index

Array.prototype.forEach2 = function(callback,index, originArray){
    var result = 0;
    for (var index in this ){
        if(index,this.hasOwnProperty(index)){
             callback(this[index],index);

        }; // this.hasOwnProperty(index): ?  index thực không hay trong prototype                                              
       
        
        

    }
}

/*Output:
index 0
Javascript 0 undefined
index 1
PHP 1 undefined
index 2
Ruby 2 undefined
index map2
[Function (anonymous)] map2 undefined
index forEach2
[Function (anonymous)] forEach2 undefined
index reduce2
[Function (anonymous)] reduce2 undefined
index find2
[Function (anonymous)] find2 undefined
=> Khi dùng for in để duyệt mảng => liệt kê tất cả key enumerable trong object this(array)
Khi thêm map2, forEach2, find2 vào Array.prototype thì những method này cũng xuất
hiện trong for ... in
*/
//console.log(Array.prototype)=> 
// thấy một object chứa tất cả các method gốc mà mọi mảng trong JS thừa hưởng được
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
Array.prototype.filter2 = function(callback){
    var output = [];
    for (var index in this){
        if(this.hasOwnProperty){
           var result =  callback(this[i],i,this);
           if (result)output.push(this[index])


        }

    }
    return output;
    
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

console.log("---forEach2");
console.log (courses.forEach2(function(course,index,array){
    console.log(course,index,array);

}))
console.log(html.join(''))

console.log("------reduce------");
var sum = num.reduce(function(acc, n){
    return acc + n

})
console.log(sum);

console.log("------find------");


var findElement = courses.find2(function(course){
    return course[0]== "J";
})
console.log(findElement);
var courses = [
    {id: 1,
        name: 'Javascript',
        coin: 250
    },
    {id: 2,
        name: 'HTML,CSS',
        coin: 0
    },
    {id: 3,
        name: 'Ruby',
        coin: 0
    },
    {id: 4,
        name: 'PHP',
        coin: 400
    },
    {id: 5,
        name: 'ReactJS',
        coin: 500
    },
    {id: 6,
        name: 'Ruby',
        coin: 0
    },
]

console.log("------filter------");

var filterCourses = courses.filter(function(course){
    return course.coin > 250;
})
console.log(filterCourses)
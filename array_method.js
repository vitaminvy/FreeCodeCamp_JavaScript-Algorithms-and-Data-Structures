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
// for each: cú pháp forEach(function(element,index,array)
courses.forEach(function(course, index){
    console.log(index, course); 

}); 
// every: cú pháp forEach(function(element,index,array)
// Kiểm tra tất cả các phần tử có thoả mãn hay không => trả về boolean
var isFree = courses.every(function(course){
    return course.coin === 0;

}); 
console.log(isFree);

//some: Kiểm tra có phần tử có thoả mãn hay không => trả về boolean
var isFree = courses.some(function(course){
    return course.coin === 0;

}); 
console.log(isFree);

//find: return phần tử đầu tiên thoả mãn trong callback; không có => undefined;
var course= courses.find(function(course){
    return course.name === "Ruby";

}); 
console.log(course);
// filter: return về tất cả phần tử thoả mãn callback; không có trả về => []
var list= courses.filter(function(course){
    return course.name === "Ruby2";

}); 
console.log(list);
// map: khi muốn thay đổi tới phần tử của mảng

//map: trả về một mảng mới, không thay đổi mảng ban đầu
function courseHandler(item,index, originArray){
    return {
        id: item.id,
        name:   `Khoa hoc: ${item.name}`,
        coin: item.coin,
        coinText: `Gia: ${course.coin}`, 
        index: index,
        originArray: originArray // ARRAY GỐC
    }

}
var newCourses = courses.map(courseHandler);
    console.log(newCourses)

// array reduce
function coinHandler(accumulator,currentValue,currentIndex, originArray){
    return accumulator + currentValue.coin;
   
}
// tham số: function, giá trị khởi tạo
// Khi không có intial value, lấy giá trị đầu tiên của mảng làm giá trị khở tạo
var totalCoin = courses.reduce(coinHandler,0); // gán giá trị khởi tạo cho accumulator trong lần chạy đầu tiên
console.log(totalCoin); 
var totalCoin = courses.reduce((a,b)=>a + b.coin,0);
console.log(totalCoin);

var numbers = [100,200,220,200,480];
var totalCoin = numbers.reduce(function(total,number){
    return total + number
    
},0)
console.log(totalCoin);
 
var totalCoin = numbers.reduce((a,b)=>a + b);
console.log(totalCoin)
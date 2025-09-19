var array = ['a','b','c','d','a','b','c'];
//new Set(iterable) tạo ra một Set 
// một cấu trúc dữ liệu trong JavaScript, chỉ lưu giá trị duy nhất (unique)
console.log([...(new Set(array))]); // ...[]: rải a,b,c vào mảng

//1. Xác định điểm dừng
// 2. Logic handle
var output = [];
var array = ['a','b', 'c', 'd','a','a','c']

//Hàm kiểm tra xem một phần tử đã có trong mảng chưa
function isInArray(end,x,array){
    // duyệt hết mảng
    if (end < 0)return false;
    if(array[end] == x)return true;
    return isInArray(end - 1, x, array);
}
// 
function Loop(start,end, cb,array){
    if(start < end){
        
        if(!isInArray(start - 1, array[start], output)){
            cb(array[start]);
        }
        return Loop(start + 1,end,cb,array);

    }
    return;


}

Loop(0,array.length, function(value){

    output.push(value);}

,array)
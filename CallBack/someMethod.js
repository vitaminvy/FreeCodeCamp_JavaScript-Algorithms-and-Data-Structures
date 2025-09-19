
Array.prototype.some2 = function(callback){
    for (var index in this){
        if(this.hasOwnProperty(index)){
             if (callback(this[index],index,this))
            return true;

            

        }
    }
    return false;

}
var courses = [
    {id: 1,
        name: 'Javascript',
        coin: 250,
        isFinish: false,
    },
    {id: 2,
        name: 'HTML,CSS',
        coin: 0,
        isFinish: false,

    },
    {id: 3,
        name: 'Ruby',
        coin: 0,
        isFinish:true,

    },
    {id: 6,
        name: 'Ruby',
        coin: 0,
        isFinish: false,

    },
]
var result = courses.some2(
    function(course,index){
        return  course.isFinish;
        
    }
)
console.log(result);
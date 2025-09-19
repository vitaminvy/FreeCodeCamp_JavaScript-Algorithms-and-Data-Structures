
Array.prototype.every2 = function(callback){
    for (var index in this){
        if(this.hasOwnProperty(index)){
             if (!callback(this[index],index,this))
            return false;

            

        }
    }
    return true;

}
var courses = [
    {id: 1,
        name: 'Javascript',
        coin: 250,
        isFinish: true,
    },
    {id: 2,
        name: 'HTML,CSS',
        coin: 0,
        isFinish: false,

    },
    {id: 3,
        name: 'Ruby',
        coin: 800,
        isFinish:true,

    },
    {id: 6,
        name: 'Ruby',
        coin: 0,
        isFinish: true,

    },
]
var result = courses.every2(
    function(course,index){
        return  course.coin > 700
        
    }
)
console.log(result);
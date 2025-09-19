var depthArray = [1,2,[3,4],5,6,[7,8,9]];
var flatArray = depthArray.reduce(function(flatOut, depthItem){
    return flatOut.concat(depthItem)
    
},[]) // Nếu không truyền [] vào thì sẽ lấy 1 là number, không đúng với output mong muốn
console.log(depthArray);
console.log(flatArray);

var topic = [
    {
        topic: "FrontEnd",
        course: [
            {
                id: 1,
                title: "HTML,CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]},{
        topic: "Back-end",
        course: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
]
var newCourses  = topic.reduce(function(course,topic){
    return course.concat(topic.course)
},[])
console.log(newCourses);


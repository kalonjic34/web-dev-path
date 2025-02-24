// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course

let nameOfOnlineCourse = "Web Development Course"
let priceOfCourse = 23000
let courseGoals = ["Learn Web Development", "Become a Web Development", "Have fun!"]

// 2) Output ("alert") the three variable values

alert(nameOfOnlineCourse)
alert(priceOfCourse)
alert(courseGoals)

// 3) Try "grouping" the three variables together and still output their values thereafter

let course = {
    name: "Web Development Course",
    price: 23000,
    goals: ["Learn Web Development", "Become a Web Developer", "Have fun!"]
}

alert(course.name)
alert(course.price)
alert(course.goals)

// 4) Also output the second element in your "main goals" variable

alert(course.goals[1])

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)

let getIndexItem = function(array, arrayIndex){
    let arrayElement = array[arrayIndex];
    return arrayElement
}
// 6) Execute your custom command from (5) and output ("alert") the result

let firstGoal = getIndexItem(course.goals,1)
alert(firstGoal)
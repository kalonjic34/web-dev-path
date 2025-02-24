let age = 24
let userName = "Chris"
let hobbies = ["Reading", "Cooking", "Coding"]
let job = { 
    title: "Developer", 
    place: "Boston", 
    salary: 50000 
};

// alert(hobbies[0])
// alert(job.title)

let totalAdultYears

let calculateAdultYears = function (userAge){
    return userAge - 18
}

totalAdultYears = calculateAdultYears(age)
console.log(totalAdultYears)

age = 30

totalAdultYears = calculateAdultYears(age)
console.log(totalAdultYears);


let person = {
    name: "Chris",
    greet(){
        console.log("Hello");
    }
}

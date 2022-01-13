
//creating an object
let student = {
    name: "John",
    age: 25,
    course: "Computer Science",
}

//copying the reference
let details = student

//use second variable to modify the contents of the object
details.name = "Nicholas"
console.log(details)

//create a clone for the student object 
let clone = {};
for (let key in student) {
    student[key] = clone[key];
}

//Notice that now clone is a full independent object with duplicate details of the student obj
clone.name = "Peter";
clone.age = 24;
clone.course = "Mathematics"
console.log(clone);
/*Note you can use assign operator instead of  for loop to enhance cloning for instance

let data = Object.assign({},student) ------creates a clone of the student known as data
*/

//console.log(Object.assign(clone, [student]));

//create a function of the class
function sayHi() {
    console.log("Hello it is almost afternoon");
}

//add the method to the class
student.sayHi = sayHi;
//call the function
student.sayHi();
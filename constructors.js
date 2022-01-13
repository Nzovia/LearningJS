function Users(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

//creating a constructor
let users = new Users("Nicholas", 25, "male");
console.log(users);

//you notice that the use of new keyword, building constructoirs calls for a reusable object creation code
/*what new keyword does
1.New wmpty object is created
2.Function body is executed and assigned to this
3.The Value of this is returned

 */

//methods in constructor
function School(name) {
    this.name = name;

    //create a method
    this.greetings = function () {
        console.log("Hello, my Campus is :" + name);
    };
}
let morningG = new School("DeKUT");
morningG.greetings();
const carsInReverse = ["Ford", "Saab", "Volvo", "BWM", "Toyota", "Honda"];
for (x = 0; x < carsInReverse.length; x ++) {
    console.log(carsInReverse[x]);
};


const persons = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female",
}
for (key in persons) {
    console.log(key);
}
for (key in persons) {
    if (key == "birthDate") {
        console.log(persons.birthDate)
    }
};


let x = 0;
while (x < 1000) {
    x++;
    console.log(x);
}


let y = 0;
do {
  y++;
  console.log(y);
} while (y < 1000);


// When is a for loop better than a while loop?

//for loop is better when you want to run code a certain number of times, 
//while is better when you want to keep running that code until the condition.


// How is the readability of the code affected?

//I think for loops are more concise, and your variable is set within the loop,
//in while loops looks like you have to set the variable beforehand.


// What is the difference between a for loop and a for...in loop?

//for in loops are better suited for objects


// What is the difference between a while loop and a do...while loop?

//in while loops, test expression is checked at first but, in do...while loops code is executed at first then the condition is checked

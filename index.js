// Use a do...while loop to console.log the numbers from 1 to 1000.
// Create an object (an array with keys and values) called person with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
// Create an arrayOfPersons that contains multiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
// Use .map() to map over the arrayOfPersons and console.log() their information.
// Use .filter() to filter the persons array and console.log only males in the array.
// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
let number = 1;
do {
    console.log(number);
    number++;
} while (number < 1001);

console.log("---------------");
let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
};
console.log("---------------");
for (let key in person) {
    if (key == "birthDate") {
        let birth = person[key];
        let splitbirth = birth.split(" ");
        let year = splitbirth[splitbirth.length - 1];
        let splityear = year.split("");
        let lastNumber = splityear[splityear.length - 1];
        if (lastNumber % 2 != 0) {
            console.log(birth);
        }
    }
}
console.log("---------------");
let arrayOfPersons = [{
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female"
    },
    {
        firstName: "John",
        lastName: "joe",
        birthDate: "Jan 5, 1930",
        gender: "male"
    },
    {
        firstName: "Joan",
        lastName: "dee",
        birthDate: "Jan 5, 1931",
        gender: "female"
    } {
        firstName: "Tim",
        lastName: "Toe",
        birthDate: "Jan 5, 1935",
        gender: "male"
    }
];
console.log("---------------");
arrayOfPersons.map((person, index) => {

    console.log(person);
});
console.log("---------------");
let males = arrayOfPersons.filter((person, index) => {
    return person.gender == "male";

});
males.forEach((person, index) => {
    console.log(person);
});
console.log("---------------");
let females = arrayOfPersons.filter((person, index) => {
    return person.gender == "female";

});
females.forEach((person, index) => {
    console.log(person);
});
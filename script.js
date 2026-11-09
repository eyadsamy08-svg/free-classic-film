let users = {
    name: "#",
    age: "0",
    adress: "unknown",
    nickname:"annynmoous",
    city: undefined,
};
console.log(users);
let Str = $`{users.name} is ${users.age} years old and lives in ${users.adress}. Their nickname is ${users.nickname} and they live in ${users.city}.`;
console.log(Str);
let adjectives = ["happy", "sad", "angry", "excited", "bored"];
console.log(adjectives);
for (let i = 0; i < adjectives.length; i++) {
    console.log(`The user is feeling ${adjectives[i]}.`);
}
const userInput = prompt("Enter your favorite color:");
if (userInput) {
    console.log(`Your favorite color is ${userInput}.`);
} else {
    console.log("You did not enter a favorite color.");
}
const userAge = parseInt(prompt("Enter your age:"));
if (!isNaN(userAge)) {
    console.log(`You are ${userAge} years old.`);
}
(function() {
    const secretMessage = "This is a secret message.";
    console.log(secretMessage);
})();
let val="1";
let answer="0";
switch (val) {
case "1":
    answer = "what is the rate of this website is good or what";
    break;
case "2":
    answer = "give me for 1 out of 10 of my website";
    break;
default:
    answer = "unknown";
}  
    function multipleTraditional(a, b) {
  return a * b;
}
console.log(multipleTraditional(5,10));
const multipleShort = (a, b) => a * b;
console.log(multipleShort(5, 10));

function calculate(num1, num2, operation) {
return operation(num1, num2);
}

const sum = (a, b) => a + b;
const substract = (a, b) => a - b;

console.log(calculate(5, 10, sum)); // 15
console.log(calculate(5, 10, substract)); // -5





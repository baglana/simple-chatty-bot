const prompt = require('prompt-sync')();

const greet = (name, year) => {
    console.log(`Hello! My name is ${name}.`);
    console.log(`I was created in ${year}.`);
}

const askName = () => {
    const name = prompt("Please, remind me your name. ");
    console.log(`Nice to meet you, ${name}!`);
}

const guessAge = () => {
    console.log("Let me guess your age.");

    const rem3 = Number(prompt("Enter remainder of dividing your age by 3 "));
    const rem5 = Number(prompt("Enter remainder of dividing your age by 5 "));
    const rem7 = Number(prompt("Enter remainder of dividing your age by 7 "));

    let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

    console.log(`Your age is ${age}; that's a good time to start programming!`);
}

const count = () => {
    const number = Number(prompt("Now I will prove to you that I can count to any number you want. "));
    let current = 0;

    while (current <= number) {
        console.log(`${current} !`);
        current++;
    }
}

const test = () => {
    console.log(`
    Let's test your programming knowledge.
    
    What data type does not exist in JavaScript?
    1. Number
    2. String
    3. Boolean
    4. Char
    `);

    const correctAnswer = 4;
    let answer = Number(prompt());

    while (answer !== correctAnswer) {
        answer = Number(prompt("Please, try again. "));
    }
}

const end = () => {
    console.log("Congratulations, have a nice day!");
}


greet('Aid', '2023')  // change it as you need
askName();
guessAge();
count();
test();
end();
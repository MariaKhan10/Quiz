#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright.bold("----- Welcome to Basic TypeScript Quiz -----"));
let answer = await inquirer.prompt([
    {
        name: "Quiz",
        type: "confirm",
        message: chalk.blue("Do You Want to Attempt the Quiz ?")
    }
]);
if (!answer.Quiz) {
    console.log(chalk.red("Thank you for visiting the Application !!"));
}
else {
    let answer = await inquirer.prompt([
        {
            name: "q1",
            type: "list",
            message: chalk.yellow("Q1- What is TypeScript primarily used for?"),
            choices: ["Memory Management", "Dynamic Typing", "Static Typing", "Asynchronous operations"]
        },
        {
            name: "q2",
            type: "list",
            message: chalk.yellow("Q2- Which of the following is NOT a valid TypeScript data type?"),
            choices: ["void", "any", "dynamic", "Tuple"]
        },
        {
            name: "q3",
            type: "list",
            message: chalk.yellow("Q3- How do you define a custom type in TypeScript?"),
            choices: ["interface", "typedef", "type", "Both A and C"]
        },
        {
            name: "q4",
            type: "list",
            message: chalk.yellow("Q4- What is a union type in TypeScript?"),
            choices: ["A type that can be any value", "A type that can be one of several types", "A type that can be both a string and a number simultaneously", "A type that can be an object"]
        },
        {
            name: "q5",
            type: "list",
            message: chalk.yellow("Q5- Which TypeScript feature allows for checking the type of a variable at runtime?"),
            choices: ["Type guard", "Runtime type", "Dynamic type", "Typeof"]
        }
    ]);
    console.log("\n");
    console.log(chalk.bold.blue.underline `---------- Result -------------`);
    console.log("\n");
    let score = 0;
    if (answer.q1 === "Static Typing") {
        score++;
        console.log("1- Correct");
    }
    else {
        console.log("1- Incorrect");
    }
    if (answer.q2 === "dynamic") {
        score++;
        console.log("2- Correct");
    }
    else {
        console.log("2- Incorrect");
    }
    if (answer.q3 === "Both A and C") {
        score++;
        console.log("3- Correct");
    }
    else {
        console.log("3- Incorrect");
    }
    if (answer.q4 === "A type that can be one of several types") {
        score++;
        console.log("4- Correct");
    }
    else {
        console.log("4- Incorrect");
    }
    if (answer.q5 === "Type guard") {
        score++;
        console.log("5- Correct");
    }
    else {
        console.log("5- Incorrect");
    }
    console.log("\n");
    console.log(chalk.magentaBright.underline.bold(` You have successfully completed the Quiz: You scored ${score}/5  `));
}

#!/usr/bin/env node
import inquirer from "inquirer";
// declare variable "answer" 
const answers = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
//print the word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);

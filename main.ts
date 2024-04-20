#!/usr/bin/env node

import inquirer from "inquirer";

// declare variable "answer" 

const answers: {
    sentence: string
} = await inquirer.prompt([{

    name: "sentence",
    type: "input",
    message: "Enter your sentence to count the word: "

    }


])

const words = answers.sentence.trim().split(" ")    // space use in split for seperation of word

console.log(words);

//print the word count of the sentence to the console

console.log(`your sentence word count is ${words.length}`);




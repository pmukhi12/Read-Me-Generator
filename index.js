// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// list of questions asked to the user
const questions = require('./utils/questions')


function askTheUser () {
    return inquirer
   .prompt(questions)
   .then(answers => console.log(answers))
 }

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
askTheUser();

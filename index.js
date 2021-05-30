// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// list of questions asked to the user
const questions = require('./utils/questions');
const generateMarkdown = require('./utils/generateMarkdown');


function askTheUser () {
    inquirer
   .prompt(questions)
   .then((data) => {
    const filename = 'ReadMeFile.md';
    console.log(data);
    fs.writeFile(filename, generateMarkdown({...data}), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

//    .then(console.log);
 };

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
askTheUser();

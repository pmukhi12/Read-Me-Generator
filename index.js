// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// list of questions asked to the user
const questions = require('./utils/questions');
// function to actually generate the markdowns
const generateMarkdown = require('./utils/generateMarkdown');

// function to run inquirer
function askTheUser () {
    inquirer
    // prompt the questions
   .prompt(questions)
    // take the response and write the file
   .then((data) => {
    // variable to save fileName
    const filename = 'ReadMeFile.md';
    // file system method to actually write the file
    fs.writeFile(filename, generateMarkdown({...data}), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

 };

// call the function
askTheUser();

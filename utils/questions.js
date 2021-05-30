// questions asked in inquirer
const questions = 
    [
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
          },
          {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
          },
          {
            type: 'list',
            name: 'license',
            message: 'What is the license for your project?',
            choices: ['MIT','Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
          },
          {
            type: 'input',
            name: 'install',
            message: 'What are the installation instructions for your project?',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'How are you planning on using this project?',
          },
          {
            type: 'input',
            name: 'contributing',
            message: 'Who else contributed to this project?',
          },
          {
            type: 'input',
            name: 'tests',
            message: 'What are the applicable tests?',
          },
          {
            type: 'input',
            name: 'questions',
            message: 'What are the applicable questions?',
          },
      ];

// export questions
module.exports = questions;

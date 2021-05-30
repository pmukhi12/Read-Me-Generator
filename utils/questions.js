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
          }
      ]

      module.exports = questions
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
            name: 'license',
            message: 'What is the license for your project?',
          },
          {
            type: 'input',
            name: 'install',
            message: 'What are the installation instructions for your project?',
          },
      ]

      module.exports = questions
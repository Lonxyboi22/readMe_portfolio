// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js');

//prompts user for info then project info!
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      //validate response:
      validate: (value)=> {if(value) {return true} else {return 'I need a title to continue!'}}
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
       //validate response:
       validate: (value)=> {if(value) {return true} else {return 'I need a project description to continue!'}}
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your app?',
      //validate:
      validate: (value)=> {if(value) {return true} else {return 'I need the installation instructions to continue!'}}
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'What instructions do you have to install the app?'
    },
    {
      type: 'input',
      message: 'What instructions do you have on using your app?',
      name: 'usage'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'links',
      message: 'Enter the GitHub link to your project. (Required)',
       //validate response:
       validate: (value)=> {if(value) {return true} else {return 'I need a link to continue!'}}
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license did you use? (Required)',
      choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
       //validate response:
       validate: (value)=> {if(value) {return true} else {return 'I need a link to continue!'}}
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?'
    },
    {
      type: 'input',
      name: 'phone',
      message: 'What is your phone number?'
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
  ]);
};

promptUser()
  .then((data => {
    const pageREADME = generatePage(data);

    fs.writeFile('./README.md', pageREADME, err => {
        if (err) throw new Error(err);
        console.log('ReadMe complete! Check out README.md to see the output!');
  });
  }));


// TODO: Create a function to initialize app
// function init() {
 
// }

// Function call to initialize app
// init();

// array of questions for user
const inquirer = require('inquirer');
const fs = require("fs")
const generateMarkdown = require('./generateMarkdown');
const questions = [
    {
        name: 'github',
        message: 'what is your github username',
        default: 'test',
    },{
        name: 'email',
        message: 'what is your email?',
        default: 'test',
    },{    
        name: 'title',
        message: 'What is the title of this project?',
        default: 'test',
    }, {
        name: 'description',
        message: 'What is the description',
        default: 'test',
    }, {
        name: 'license',
        message: 'Which license to use?',
        default: 'test',
    }, {
        name : 'install',
        message: 'what command should be run to install dependencies',
        default: 'test',
    }, {
        name : 'instructions',
        message: 'what command should be run test',
        default: 'test',
    },  {
        name: 'usage',
        message: 'what does the user need to know about using the repo?',
        default: 'test'
    }, {
        name: 'contributors',
        message: 'what does the user need to know about contributing to the repo?',
        default: 'test',
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {


inquirer
  .prompt(questions)
  .then(answers => {
    console.info('Answer:', answers.title);
    const markdowntext = generateMarkdown(answers)
    fs.writeFile("README.md", markdowntext, function(err) {
        if (err) throw err;
        console.log("wrote file")
    })
  });
}



// function call to initialize program
init();





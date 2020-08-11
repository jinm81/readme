// array of questions for user
const inquirer = require('inquirer');
const fs = require("fs")
const generateMarkdown = require('./generateMarkdown');
const questions = [
    {
        name: 'title',
        message: 'What is the title of this project?',
        default: 'test',
      }
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





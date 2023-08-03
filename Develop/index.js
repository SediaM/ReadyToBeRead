// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs/promises');

function makeReadmePage(answers) {
    return `# <Your-Project-Title>

    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    ## Description
    
    
    ## Table of Contents
    
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests] (#tests)
    - [Questions](#questions)
    
    ## Installation
    
    To install necessary dependencies, run the following command:
    
    ## Usage
    
    
    ## License
    
    This project is licensed under the MIT license.
    
    ## Contributing
    
    
    
    ## Tests
    
    To run tests, run the following command:
    
    ## Questions
    
    If you have any questions about the repo, open an issue or contact me directly at --. You can find more of my work at --.`
}



inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your project name',
            name: 'Project',
        },
        {
            type: 'input',
            message: 'Please write a short description of your project',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'What kind of license should your project have?',
            name: 'License',
        },
        {
            default: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'Dependencies',
        },
        {
            default: 'input',
            message: 'What command should be run to run tests?',
            name: 'Tests',
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'Usage',
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'Contributing',
        }
    ])
    .then((answers) => {
        const readmeContent = makeReadmePage(answers);

        fs.writeFile('README.md', readmeContent)
        .then(() => console.log('File Created!'))
        .catch ((err) => console.error(err))
    })
// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize appnpm install 
// init();


const inquirer = require('inquirer');
const fs = require('fs/promises');

function renderLicenseBadge(license) {
if (license === 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
} else if (license === 'appache') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
} else if (license === 'Mozilla') {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
} else {
    return '';
}

}

function renderLicenseLink(license) {
    if (license === '') {
        return ''
    } else {
        return '- [License](#license)';
    }
  
}

function renderLicenseSection(license) {
if (license === '') {
    return ''
} else {
    return 'License';
    
}

}


function makeReadmePage(answers) {
    return `# ${answers.Project}

${renderLicenseBadge(answers.License)}
    
## Description
    
${answers.Description}

## Table of Contents
    
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(answers.License)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
    
To install necessary dependencies, run the following command:
${answers.Dependencies}
    
## Usage
    
${answers.Usage}

## ${renderLicenseSection(answers.License)}

${answers.License}
    
## Contributing
    
${answers.Contributing}
    
## Tests
    
To run tests, run the following command:
${answers.Tests}
    
## Questions
    
If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at ${answers.username}.`

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
            type: 'list',
            message: 'What kind of license should your project have?',
            name: 'License',
            choices: ['appache', 'MIT', 'Mozilla', '']
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'Dependencies',
        },
        {
            type: 'input',
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



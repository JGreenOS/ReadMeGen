// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

//node module load//

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

//using inquirer to generate questions//
const userInput = () =>
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'Title of project',
                name: 'title',
                validate: (value) => { if (value) { return true } else { return 'Requrired - Please input a value' } },
            },

            {
                type: 'input',
                message: 'Description of project',
                name: 'description',
                validate: (value) => { if (value) { return true } else { return 'Requrired - Please input a value' } },
            },

            {
                type: 'input',
                message: 'Table of Contents',
                name: 'table of contents',
                validate: (value) => { if (value) { return true } else { return 'Requrired - Please input a value' } },
            },

            {
                type: 'input',
                message: 'Installation Directions',
                name: 'installation',
                validate: (value) => { if (value) { return true } else { return 'Requrired - Please input a value' } },
            },

            {
                type: 'input',
                message: 'Usage directions',
                name: 'usage',
                validate: (value) => { if (value) { return true } else { return 'Requrired - Please input a value' } },
            },

            {
                type: 'list',
                message: 'License - select',
                name: 'License',
                choices: ["The MIT license", "Apache License", "The GPL License", "GNU License", "No License"],
                validate: (value) => { if (value) { return true } else { return 'Requrired - Please input a value' } },
            },
            {
                type: 'input',
                message: 'How to contribute',
                name: 'contributions',
                validate: (value) => { if (value) { return true } else { return 'Requrired - Please input a value' } },
            },

            {
                type: 'input',
                message: 'Tests',
                name: 'tests',
                validate: (value) => { if (value) { return true } else { return 'Requrired - Please input a value' } },
            },

            {
                type: 'input',
                message: 'Where to direct questions',
                name: 'questions',
                validate: (value) => { if (value) { return true } else { return 'Requrired - Please input a value' } },
            },

            {
                type: 'input',
                message: 'GitHub username',
                name: 'GHusername',
                validate: (value) => { if (value) { return true } else { return 'Requrired - Please input a value' } },
            },

            {
                type: 'input',
                message: 'Developer Email Address',
                name: 'EmailAddress',
                validate: (value) => { if (value) { return true } else { return 'Requrired - Please input a value' } },
            },
        ]);

const generateMD = (answers) =>
`
# Title of Project: 
    ${answers.title}

## Description
  ${answers.description}
## Installation

  ${answers.installation}

## Usage
  ${answers.usage}

## License
${answers.license}

![MIT License Link](https://img.shields.io/badge/license-MIT-blue)

## Contributions
  ${answers.contributions}

## Tests  
 ${answers.tests}


**Direct your questions to:** ${answers.questions}
 
**Contact the Developer**

GitHub: ${answers.GHusername}

Email address: ${answers.EmailAddress}
`;

userInput()
    .then((answers) => writeFileAsync('README.md', generateMD(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));

module.exports = generateMD;





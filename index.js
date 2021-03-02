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

//using inquirer to generate questions, including validation//
const userInput = () =>
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'Title of project',
                name: 'title',
                validate: (value) => { if (value) { return true } else { return 'Required - Please input a value' } },
            },

            {
                type: 'input',
                message: 'Description of project',
                name: 'description',
                validate: (value) => { if (value) { return true } else { return 'Required - Please input a value' } },
            },

            {
                type: 'input',
                message: 'Installation Directions',
                name: 'installation',
                validate: (value) => { if (value) { return true } else { return 'Required - Please input a value' } },
            },

            {
                type: 'input',
                message: 'Usage directions',
                name: 'usage',
                validate: (value) => { if (value) { return true } else { return 'Required - Please input a value' } },
            },

            {
                type: 'list',
                message: 'License - select',
                choices: [
                    "MIT", 
                    "Apache", 
                    "GPL", 
                    "GNU"
                ],
                name: 'License',
                validate: (value) => { if (value) { return true } else { return 'Required - Please input a value' } },
            },
            {
                type: 'input',
                message: 'How to contribute',
                name: 'contributions',
                validate: (value) => { if (value) { return true } else { return 'Required - Please input a value' } },
            },

            {
                type: 'input',
                message: 'Tests',
                name: 'tests',
                validate: (value) => { if (value) { return true } else { return 'Required - Please input a value' } },
            },

            {
                type: 'input',
                message: 'Where to direct questions',
                name: 'questions',
                validate: (value) => { if (value) { return true } else { return 'Required - Please input a value' } },
            },

            {
                type: 'input',
                message: 'GitHub username',
                name: 'GHusername',
                validate: (value) => { if (value) { return true } else { return 'Required - Please input a value' } },
            },

            {
                type: 'input',
                message: 'Developer Email Address',
                name: 'EmailAddress',
                validate: (value) => { if (value) { return true } else { return 'Required - Please input a value' } },
            },
        ]);
//this function generates the markdown file using the answers stored in the inquirer package
const generateMD = (answers) =>
`
# Title of Project: 
${answers.title}

## Description
${answers.description}


## Table of contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#License)
  4. [Contributions](#contributions)
  5. [Tests](#tests)
  6. [Contact Informtion](#github)



## Installation

  ${answers.installation}

## Usage
  ${answers.usage}

## License
${answers.License}

[![GitHub license](https://img.shields.io/github/license/JGreenOS/ReadMeGen?style=for-the-badge)](https://github.com/JGreenOS/ReadMeGen/blob/master/LICENSE)


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





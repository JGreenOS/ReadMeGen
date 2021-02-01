//node module load//

const inquirer = require('inquirer');
const fs = require('fs');

//using inquirer to generate questions//
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
            name: 'GH username',
            validate: (value) => { if (value) { return true } else { return 'Requrired - Please input a value' } },
        },

        {
            type: 'input',
            message: 'Developer Email Address',
            name: 'Email Address',
            validate: (value) => { if (value) { return true } else { return 'Requrired - Please input a value' } },
        },
    ])

    


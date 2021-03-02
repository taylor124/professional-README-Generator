const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./src/generateMarkdown');
const util = require('util');
const createAsync = util.promisify(fs.writeFile);



const promptUser = () => {
    return inquirer
    .prompt(
        [{
            type: 'input',
            name: 'projectName',
            message: 'Enter the title of the project (Required)',
            validate: projectName => {
                if (projectName){
                    return true;
                } else {
                    console.log('Please enter the title of the project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Enter a Description for the project (Required)',
            validate: projectDescription => {
                if (projectDescription){
                    return true;
                } else {
                    console.log('Please enter a Description for the project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectInstallation',
            message: 'Enter the Installation procees of the project (Required)',
            validate: projectInstallation => {
                if (projectInstallation){
                    return true;
                } else {
                    console.log('Please enter the Installation process of the project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectUsage',
            message: 'Describe what the app is used for (Required)',
            validate: projectName => {
                if (projectName){
                    return true;
                } else {
                    console.log('Please describe what the app is used for!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'projectLicense',
            message: 'What license does this project fall under (Required)',
            choices: ['Apache License 2.0', 
            'GNU General Public License v3.0', 
            'MIT License', 
            'BSD 2-Clause "Simplified" License', 
            'BSD 3-Clause "New" or "Revised" License', 
            'Boost Software License 1.0', 
            'Creative Commons Zero v1.0 Universal', 
            'Eclipse Public License 2.0', 
            'GNU Affero General Public License v3.0', 
            'GNU General Public License v2.0', 
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense'],
            validate: projectLicense => {
                if (projectLicense){
                    return true;
                } 
            }
        },
        {
            type: 'input',
            name: 'projectContribution',
            message: 'Were there any contributers to this project? (Required)',
            validate: projectContribution => {
                if (projectContribution){
                    return true;
                } else {
                    console.log('Answer invalid, please input a response!')
                }
            }
        },
        {
            type: 'input',
            name: 'projectTests',
            message: 'Were there any tests included? (Required)',
            validate: projectTests => {
                if (projectTests){
                    return true;
                } 
            }
        },
        {
            type: 'input',
            name: 'projectQuestions',
            message: 'What do you do when you have an issue? (Required)',
            validate: projectQuestions => {
                if (projectQuestions){
                    return true;
                } else {
                    console.log('Answer invalid, please try something else!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectEmail',
            message: 'What is your Email? (Required)',
            validate: projectEmail => {
                if (projectEmail){
                    return true;
                } else {
                    console.log('Email is not valid, please try again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectGithub',
            message: 'What is your Github username? (Required)',
            validate: projectGithub => {
                if (projectGithub){
                    return true;
                } else {
                    console.log('Github is not valid, please try again!');
                    return false;
                }
            }
        }]
    )
}

// Wait for promptUser, then creates a README.md inside "finished" folder.
async function init() {
    try {
        const response = await promptUser();
        const readmeContent = generateReadme(response);
        await createAsync('./finished/README.md', readmeContent);
        console.log(' README.md created. check the "finished" folder for the final outcome');
    }   catch(err) {
        console.log(err);
    }
}

// Function call to initialize app
init();

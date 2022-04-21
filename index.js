const inquirer = require('inquirer');

const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your location',
            name: 'location',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn  url?',
            name: 'linkedin',

        },
        {
            type: 'input',
            message: 'What is your GitHub url?',
            name: 'GitHub',
        }
    ])
    .then((response) => {
        generateHtmlDoc(response);
    }
    );

function generateHtmlDoc(inputObj){
    console.log(inputObj);
}
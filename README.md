function generateReadme(response){
  return `
  <h1>${response.projectName} <h1>
  ![badge](https://img.shields.io/badge/lisence-${response.projectLicense}-blue)<br />

  ## <h2>Description</h2>
  ${response.projectDescription}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${response.projectInstallation}

  ## Usage
  ${response.projectUsage}

  ## License
  ![badge](https://img.shields.io/badge/license-${response.projectLicense}-darkyellow)
  <br />
  This application is covered by the ${response.projectLicense} license.

  ## Contributing
  ${response.projectContribution}

  ## Tests
  ${response.projectTests}
  
  ## Github
  https://github.com/${response.projectGithub}?tab=repositories

  ## <h2 >Questions</h2>
  ${response.projectQuestions}<br />
  <br />
  Email me with any questions: ${response.projectEmail}<br /><br />
  `
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateReadme;

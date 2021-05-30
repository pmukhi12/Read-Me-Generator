// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const markdwonTemplate = 
  `# ${data.title}
  # Title
  ## Description

  ## Table of Contents 

  * [Installation](#installation)

  * [Usage](#usage)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:
  ```
  // stuff to do
  ```
  ## Usage

  ## Contributing

  ## Tests

  To run tests, run the following command:
 
  more code
 
  ## Questions;`
return markdwonTemplate
}

module.exports = generateMarkdown;

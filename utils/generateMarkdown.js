// 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license = 'MIT') {
    return 'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt';
  }; 
  if (license = 'Apache 2.0') {
    return 'https://choosealicense.com/licenses/apache-2.0/';
  };
  // ''GPL 3.0', 'BSD 3', 'None']'
  if (license = 'GPL 3.0') {
    return 'https://github.com/Illumina/licenses/blob/master/gpl-3.0.txt';
  };
  if (license = 'BSD 3') {
    return 'https://github.com/thomasjbradley/micromodel/blob/master/BSD-3-CLAUSE-LICENSE.txt';
  } else {
    return 'There is no license associated with this repository';
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license = 'MIT') {
    return `
    Copyright (c) 2012-2021 Scott Chacon and others
    
    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:
    
    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  }; 
  if (license = 'Apache 2.0') {
    return '';
  };
  // ''GPL 3.0', 'BSD 3', 'None']'
  if (license = 'GPL 3.0') {
    return '';
  };
  if (license = 'BSD 3') {
    return '';
  } else {
    return 'There is no license associated with this repository';
  };
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  const markdownTemplate = 
  `# ${data.title}
  
  ## Description
  ${data.description} 

  ## Table of Contents 

  ## License 

  ${licenseSection}

  ${licenseLink}
  
  * [Installation](#installation)

  * [Usage](#usage)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  You can reach me at ${data.email} or visit my github at https://github.com/${data.github}

  ## Installation

  To install necessary dependencies, install the following
  \`\`\`
  ${data.install}
  \`\`\`

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run the following command:
 
  ${data.tests}
 
  ## Questions;
  
  ${data.questions}

  `;

  return markdownTemplate;
};

// export the generateMarkdown function
module.exports = generateMarkdown;

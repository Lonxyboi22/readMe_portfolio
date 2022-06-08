// TODO: Create a function that returns a license badge based on which license is passed in

const { link } = require("fs");

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
  return `# ${data.title}

  ### ${data.description}
  In short, this is a very cool project!

  ## Languages used:
  Some languages used to write the aformentioned project are:
  *${data.languages}

  ## How to install ${data.title}:
  ${data.installation}

  ## Instructions on installation:
  ${data.instructions}
  
  ## How do I use the app?
  ${data.usage}

  ## Need more details?

  ### You can look at this project in more detail using the github link below!
  ### ${data.links}


  ## This project is by: ${data.name}
  ${data.name}'s description: ${data.about}.

  ## Qurestions?
  You can find this project in ${data.name}'s Github [Here](https://github.com/${data.github}/).
  If you would like to contact for more information please use the email or phone number below:
  ${data.email}
  ${data.phone}
`;
}

module.exports = generateMarkdown;

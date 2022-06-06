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
function generateMarkdown(data, projectdata) {
  return `# ${projectdata.title}

  ### ${projectdata.description}
  In short, this is a very cool project!

  Some languages used to write the aformentioned project are:
  *${projectdata.languages}





  ## This project is by: ${data.name}
  ${data.name} description: ${data.about}.
  You can find this project in their Github [Here](https://github.com/${data.github}/). 
`;
}

module.exports = generateMarkdown;

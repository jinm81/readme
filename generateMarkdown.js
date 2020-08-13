// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of contents

## Installation
\`\`\`
${data.install}
\`\`\`

\`\`\`
${data.instructions}
\`\`\`

## Usage

\`\`\`
${data.usage}
\`\`\`

## Contributing
${data.contributors}
## Github
${data.github}
## Email
${data.email}

Please make sure to update tests as appropriate.

## License


<img src = "https://img.shields.io/static/v1?label=license&message=${data.license}&color=blue">
`
;
}

module.exports = generateMarkdown;

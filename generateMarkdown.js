// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


${data.description}

## Installation

${data.install}

\`\`\`bash
${data.instructions}
\`\`\`

## Usage

\`\`\`bash
${data.usage}
\`\`\`

## Contributing
${data.contributors}

Please make sure to update tests as appropriate.

## License
<img src = "https://img.shields.io/static/v1?label=license&message=${data.license}&color=blue">
`
;
}

module.exports = generateMarkdown;

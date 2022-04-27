type params = { name: string; description: string; tabs: string; note: string }

const Example = ({ name, description = '', tabs = '', note = '' }: params) => {
  if (note !== '') {
    const [noteTitle, ...noteText] = note.split('\n')
    console.log(noteText)
    note = `
:::note ${noteTitle}
  ${noteText.join('\n')}
:::
`
  }
  return `
#### ${name}

${description}

${tabs}

${note}
`.trim()
}

export default Example

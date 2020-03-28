import { cyan, red, yellow, blue } from 'chalk'
import glob from 'glob'
import markdownlint from 'markdownlint'
import { forEachKey } from 'type-plus'

const config = markdownlint.readConfigSync('.markdownlint.json')
const files = glob.sync('**/*.md', { ignore: 'node_modules/**' })

const results = markdownlint.sync({ config, files })

forEachKey(results, k => {
  const errors = results[k]
  if (errors.length > 0) {
    console.info(`${yellow(k)} contains ${cyan(errors.length)} ${red('errors')}:`)
    console.info(errors.map(e => `  ${e.ruleDescription} (${blue(`${k}:${e.lineNumber}`)})`).join('\n'))
    console.info('')
  }
})

/* eslint-disable */
const fs = require('fs')
const path = require('path')

module.exports = function (componentName) {
  const componentDir = path.resolve(`./${componentName}`)
  const componentFile = `${componentDir}/${componentName}.js`
  const containerFile = `${componentDir}/${componentName}Container.js`
  const indexFile = `${componentDir}/index.js`

  // create directory
  try {
    fs.mkdirSync(path.resolve(`./${componentName}`))
  } catch (err) {
    console.log('Already exists')
    process.exit(1)
  }

  const componentContent = `import React, {PureComponent} from 'react'
  import PropTypes from 'prop-types'

  export default class ${componentName} extends PureComponent {
    static propTypes = {
      loginId: PropTypes.string
    }

    render () {
      return (
        <div>

        </div>
      )
    }
  }
  `

  // create component file
  try {
    fs.appendFileSync(componentFile, componentContent)
  } catch (err) {
    console.log('Could not create component file.')
    process.exit(1)
  }

  const containerContent = `import React, {PureComponent} from 'react'
  import PropTypes from 'prop-types'
  import {connect} from 'react-redux'
  import ${componentName} from './${componentName}'

  export class ${componentName}Container extends PureComponent {
    static propTypes = {
      loginId: PropTypes.string
    }

    render () {
      return (
        <${componentName} {...this.props} />
      )
    }
  }

  export default connect()(${componentName}Container)
  `

  // create container file
  try {
    fs.appendFileSync(containerFile, containerContent)
  } catch (err) {
    console.log('Could not create container file.')
    process.exit(1)
  }

  const indexContent = `export {default} from './${componentName}Container'
  `

  // create index file
  try {
    fs.appendFileSync(indexFile, indexContent)
  } catch (err) {
    console.log('Could not create index file.')
    process.exit(1)
  }

  console.log(`Created ${componentName}`)
}

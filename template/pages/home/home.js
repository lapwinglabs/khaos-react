/**
 * Module Dependencies
 */

var React = require('react')

/**
 * Home
 */

export default class Home extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>hello world!</div>
    )
  }
}

if (typeof window !== 'undefined') {
  React.render(<Home />, document.getElementById('wrapper'))
}

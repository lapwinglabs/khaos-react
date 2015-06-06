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
    var props = this.props

    return (
      <div>hello world!</div>
    )
  }
}

if (typeof window !== 'undefined') {
  console.log('hi');
  React.render(<Home />, document.getElementById('wrapper'))
}

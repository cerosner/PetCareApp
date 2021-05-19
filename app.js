var React = require('react-native')

class HelloThere extends React.Component {
  clickMe() {
    alert('Hi!')
  }
  render() {
    return (
      <div className="box" onClick={this.clickMe.bind(this)}>
        Hello {this.props.name}. Please click me.
      </div>
    )
  }
}

React.render(<HelloThere name="Component" />, document.getElementById('content'))

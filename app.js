import React from 'react'
import { View, Text, Alert } from 'react-native'

class HelloThere extends React.Component {
  clickMe() {
    Alert.alert('Hi!')
  }
  render() {
    return (
      <View className="box" onClick={this.clickMe.bind(this)}>
        <Text>
          Hello {this.props.name}. Please click me.
        </Text>
      </View>
    )
  }
}

React.render(<HelloThere name="Component" />, document.getElementById('content'))

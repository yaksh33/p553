import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  displayAlert=()=>{
    alert('I am an alert box');
  }
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <Button title="Sound 1" color="blue" onPress={this.displayAlert} />
        <Text>Sound 1</Text>
        <Button title="Sound 2" color="red" onPress={this.displayAlert} />
         <Text>Sound 2</Text>
         <Button title="Sound 3" color="orange" onPress={this.displayAlert} />
          <Text>Sound 3</Text>
          <Button title="Sound 4" color="yellow" onPress={this.displayAlert} />
           <Text>Sound 4</Text>
           <Button title="stop sound" color="black" onPress={this.displayAlert} />
            <Text>Sound 1</Text>
      </View>
    );
  }
}

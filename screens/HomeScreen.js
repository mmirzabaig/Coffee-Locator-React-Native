import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableHighlight} from 'react-native';
import {createStackNavigator} from 'react-navigation';

export default class HomeScreen extends React.Component {

  constructor(){
    super();
    this.state = {
      count: 0
    }
  }

  onPressHandle = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  render() {
    const pic = {
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View style={styles.container} >
        <View style={{width: '100%', height: 70, backgroundColor: 'white'}} />
        <Button title='Click Me' onPress={this.onPressHandle} style={{backgroundColor: '#DDDDDD', alignItems: 'center', padding: 10} } />
        <TouchableHighlight onPress={this.onPressHandle} style={{backgroundColor: '#DDDDDD', alignItems: 'center', padding: 10, borderRadius: 50} } >
          <Text> ClickHERE </Text>
        </TouchableHighlight>
        <Text style={styles.welcome}>MirzaBAIG!</Text>

        <Image source={pic} style={{width: 193, height: 110}} />
        <Text style={{color: 'white'}}>{this.state.count} </Text>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

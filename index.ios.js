/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import KeyboardAvoidingViewExample from "./keyboard";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"},

    map:{left: 0,
      right: 0,
      top:0,
      bottom:0,
      position: "absolute"}
    });

class Map extends Component {
  render() {

    return (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
      />
    );
  }
}

class destinationInput extends Component {
    constructor(props) {
      super(props);
      this.state = {text: ''};
    }

    render() {
      return (
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40}}
            placeholder="Destination"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text}
          </Text>
        </View>
      );
    }
  }

  // <Map/>

export default class mapWork extends React.Component {
  render() {

    return (
      <View style={styles.container} >
        <Map/>
        <KeyboardAvoidingViewExample/>
      </View>
    );
  }
}

AppRegistry.registerComponent('mapWork', () => mapWork);

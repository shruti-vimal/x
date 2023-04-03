import React from 'react';
import {Text,View} from 'react-native';
import Camera from '../screens/Camera.js';

export default class App extends React.Component{
  render(){
    return(
      <View>
       <Camera/>
      </View>
    )
  }
}
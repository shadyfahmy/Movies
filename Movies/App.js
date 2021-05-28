import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Components/Header/Header'
import ListContainer from './Components/ListContainer/ListContainer'


class App extends Component {

render() {
  return (
    <View style={{backgroundColor:"white", height:"100%"}}>
      <Header/>
      <ListContainer/>
    </View>
  );
}
}
export default App;

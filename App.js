
import { StyleSheet,View, Text} from 'react-native';
import React, { Component } from 'react';
import Pet from './components/pet';
import Petshop from './Petshop';
class App extends Component {
  render() {
    return (
          <View style={styles.container}>
            
            <Petshop />
          </View>
    )
  }
}
export default App;


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingBottom: 100,
    flex:1,
    backgroundColor: "#f1f1f1",
  }
  
});

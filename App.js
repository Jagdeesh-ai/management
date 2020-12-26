import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import transactions from './screens/Book-transaction';
import searchscreens from './screens/search-screen';



export default class App extends React.Component {
  render(){
    return(
    <AppContainer></AppContainer>    
    )
  }
}

const TabNavigator = createBottomTabNavigator({ 
  Transaction: { screen: transactions }, Search: { screen: searchscreens } 
  });

const AppContainer = createAppContainer({TabNavigator})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

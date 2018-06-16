/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import SearchCar from './src/SearchScreen';
import CarsTable from './src/CarsTableScreen';
import CarDetails from './src/CarDetailsScreen';
import ConsultansTable from './src/ConsultansTableScreen'; 
import MapView from './src/MapScreen'; 

const database_name = "test.db"

var SQLite = require('react-native-sqlite-storage')
var db = SQLite.openDatabase({ name: database_name, createFromLocation: '~cars.db' }, this.openCB, this.errorCB)

export default class App extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppNavigator = StackNavigator ( {
    SearchCar : { screen: SearchCar},
    CarsTable : { screen: CarsTable},
    CarDetails : { screen: CarDetails},
    ConsultansTable : { screen: ConsultansTable},
    MapView : { screen: MapView},
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  rowViewContainer: {
    flex: 1,
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#2172ed',
    margin: 10
  },
  listView: {
    marginTop: 10,
    width: 350
  },
});



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
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const database_name = "test.db"

var SQLite = require('react-native-sqlite-storage')
// var db = SQLite.openDatabase({ name: database_name, createFromLocation: '~cars.db' }, this.openCB, this.errorCB)
var db = SQLite.openDatabase({ name: database_name, createFromLocation: '~cars.db' })

// type Props = {};
export default class App extends Component<> {

  constructor(props) {
    super(props)
    console.log("==========  Konstruktor  ======= ");

    this.state = {
      make: "",
    };

    db.transaction((tx) => {
      console.log("==========  TRANSAKCJA  ======= ");

      tx.executeSql('SELECT make FROM cars2', [], (tx, results) => {
        var len = results.rows.length
        console.log("==========  SQL:   =======" + len);

        if (len > 0) {
          console.log("==========  IF   =======");

          var row = results.rows.item(0);
          console.log("==========  ROW:   =======" + row);
          console.log("==========  ROW make:   =======" + row.make);


          this.state({ make: row.make });
          console.log("==========  ROW make form state1:   =======" + row.make);
          console.log("==========  ROW make form state2:   =======" + this.state.make);

          console.log("SQL query executed " + this.state.make);
        }
      });
    });
  }

  errorCB(err) {
    console.log("SQL Error: " + err);
  }

  successCB() {
    console.log("SQL executed fine");
  }

  openCB() {
    console.log("Database OPENED");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          HEEKI: {this.state.make}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

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
});

// https://pastebin.com/24qxfzhP
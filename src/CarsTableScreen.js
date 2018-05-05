import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Button,
    Platform,
    ListView
} from 'react-native';

const database_name = "test.db"

var SQLite = require('react-native-sqlite-storage')
var db = SQLite.openDatabase({ name: database_name, createFromLocation: '~cars.db' }, this.openCB, this.errorCB)
const searchCar = ""
export default class CarsTable extends Component {
    static navigationOptions = {
        title: 'Samochody',
    };
    constructor(props) {
        super(props)
        this.state = {
          progress: [],
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => { row1 !== row2; },
          })
        };
        
        db.transaction((tx) => {
          tx.executeSql('SELECT * FROM cars2 WHERE make LIKE ? OR model LIKE ? OR year LIKE ? OR power LIKE ?', [searchCar,searchCar,searchCar,searchCar], (tx, results) => {
            var len = results.rows.length
            var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
            for (let i = 0; i < len; i++) {
              let row = results.rows.item(i);
              this.addCarToList(row)
            }
          });
        });
      }
    
      addCarToList = (car) => {
        let progress = [...this.state.progress]
        progress.push(car);
        this.setState({ progress })
      }
    
      populateDb(make, model, year, power) {
        db.transaction((tx) => {
          tx.executeSql('SELECT * FROM cars2 WHERE model=?', [make], (tx, results) => {
            var len = results.rows.length
    
            if (len > 0) {
              var row = results.rows.item(0);
              this.setState({ make: row.make });
            }
          });
        });
      }
    
      ListViewItemSeparator = () => {
        return (
          <View
            style={{
              height: .5,
              width: "100%",
              backgroundColor: "#03204c",
            }}
          />
        );
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
        var ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => { row1 !== row2; } });
        const { navigate, state } = this.props.navigation;
        const { search } = state.params;  
        searchCar = search;
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              WYNIKI WYSZUKIWANIA dla {searchCar}
            </Text>
            <Text style={styles.instructions}>
              Ponizej znajduje się lista dostępnych modeli. Aby zobaczyć szczegóły, kliknij w wybraną pozycję
            </Text>
            <ListView
              style={styles.listView}
              dataSource={ds.cloneWithRows(this.state.progress)}
              renderSeparator={this.ListViewItemSeparator}
              renderRow={(rowData) => <Text style={styles.rowViewContainer}
              onPress={() => navigate('CarDetails', { make: rowData.make, model:rowData.model, year: rowData.year, power: rowData.power })}>
              {rowData.make} {rowData.model}</Text>}
            />
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

    // https://pastebin.com/24qxfzhP
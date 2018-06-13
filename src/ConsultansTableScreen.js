import React, { Component } from 'react'
import { Text, View, StyleSheet, ListView, ActivityIndicator, Alert } from 'react-native'

class ConsultansTable extends Component {
    static navigationOptions = {
        title: 'Konsultanci',
    };
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: ''
        }
    }

    GetItem(name, email, city, street, suit, company, website, phone) {
        Alert.alert(
            name,
            "Telefon: " + phone + " \nEmail: " + email +" \nWWW: " + website,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]
        )
    }

    componentDidMount() {

        return fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
                }, function () {
                    // In this block you can do something with new state.
                });
            })
            .catch((error) => {
                console.error(error);
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

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={styles.MainContainer}>
                <Text style={styles.text}> Nasi konsultanci: </Text>
                <ListView
                    style={styles.listView}
                    dataSource={this.state.dataSource}
                    renderSeparator={this.ListViewItemSeparator}
                    renderRow={(rowData) => <Text style={styles.rowViewContainer}
                    onPress={this.GetItem.bind(this, rowData.name, rowData.email, rowData.address.city, rowData.address.street, rowData.address.suite, rowData.company.name, rowData.website, rowData.phone)} >{rowData.name}</Text>}
                />
            </View>
        );
    }
}
export default ConsultansTable

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: 'blue',
        alignItems: 'center',
        marginTop: 30,
        fontSize: 20
    },
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 10
    },
    rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        color: '#2172ed',
        margin: 5
    },
    listView: {
        marginTop: 5,
        backgroundColor: '#d6e5fc'
    }
})
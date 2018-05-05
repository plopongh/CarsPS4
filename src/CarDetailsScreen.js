import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
} from 'react-native';

export default class CarDetails extends Component {
    static navigationOptions = {
        title: 'Szczegóły samochodu',
    };

    render() {
        const { navigate, state } = this.props.navigation;
        const { make, model, year, power } = state.params;  
        return (
            <View behavior="padding" style={styles.container}>

                <View style={styles.formContainer}>
                    <Text style={styles.title}>Marka: {make}</Text>
                    <Text style={styles.title}>Model: {model}</Text>
                    <Text style={styles.title}>Rok produkcji: {year}</Text>
                    <Text style={styles.title}>Moc samochodu: {power}</Text>
                </View>

            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    titleWrapper: {
        justifyContent: 'center',
        flex: 1
    },
    title: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10
    },
    formContainer: {
        width: 350,
        height: 200,
        margin: 20,
        flex: 1
    }
});
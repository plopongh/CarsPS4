import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView, Button
} from 'react-native';

export default class CarDetails extends Component {
    static navigationOptions = {
        title: 'Podsumowanie',
    };

    render() {
        const { navigate, state } = this.props.navigation;
        const { make, model, year, power, startDate, endDate, carType } = state.params;  
        return (
            <View behavior="padding" style={styles.container}>
                <View style={styles.formContainer}>
                <Text style={styles.title}>Data najmu: {startDate}</Text>
                <Text style={styles.title}>Data zwrotu: {endDate}</Text>
                <Text style={styles.title}>Rodzaj samochodu: {carType}</Text>
                    <Text style={styles.title}>Marka: {make}</Text>
                    <Text style={styles.title}>Model: {model}</Text>
                    <Text style={styles.title}>Rok produkcji: {year}</Text>
                    <Text style={styles.title}>Moc samochodu: {power}</Text>
                    <Text style={styles.title}>Cena: 120zł</Text>
                </View>
                <View style={styles.formContainer}>
                        <Button style={styles.buttonText} title="Wypożycz" onPress={() => navigate('MapView')} />
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
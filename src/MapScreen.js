import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
} from 'react-native';
// import MapView from 'react-native-maps';

export default class MapView extends Component {
    static navigationOptions = {
        title: 'Tu jesteśmy',
    };

    render() {
        const { navigate, state } = this.props.navigation;

        return (
            <View behavior="padding" style={styles.container}>
                <View style={styles.formContainer}>
                <Text style={styles.title}>Zapraszamy po odbiór samochodu w naszym punkcie przy ulicy....</Text>
                <Text>W razie problemów prosimy skontaktować się z naszymi </Text>
                <Text color="red" fontWeight="bold" onPress={() => {navigate('ConsultansTable')} } >KONSULTANTAMI! </Text>
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
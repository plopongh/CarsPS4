import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Button
} from 'react-native';

export default class SearchCar extends Component {
    static navigationOptions = {
        title: 'Wyszukiwanie',
    };
    constructor(props) {
        super(props)
        this.state = { search: '' };
    }
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View behavior="padding" style={styles.container}>

                <View style={styles.headerContainer}>
                    <Button style={styles.consultantButton} title="Konsultanci" onPress={() => navigate('ConsultansTable')} >
                    <Image source={require('../../image/info.png')} />
                    </Button>
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        onChangeText={(text) => this.search = text}
                        placeholder="szukaj..."
                        placeholderTextColor='black'
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input} />
                </View>
                <View style={styles.formContainer}>
                    <Button style={styles.buttonText} title="DALEJ" onPress={() => navigate('CarsTable', { search: this.search })} />
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
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: 100,
    },
    logo: {
        width: 100,
        height: 100
    },
    titleWrapper: {
        justifyContent: 'center',
        flex: 1
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 30
    },
    formContainer: {
        width: 350,
        height: 200,
        marginTop: 20,
        flex: 1
    },
    buttonContainer: {
        paddingVertical: 15,
        padding: 20,
        backgroundColor: '#079992'
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 10,
        color: 'black',
        paddingHorizontal: 10,
        fontWeight: 'bold',
    },
    headerContainer: {
        width: 350,
        height: 200,
        marginTop: 0,
        flex: 1
    },
    consultantButton: {
        width: 35,
        height: 20,
        marginTop: 0,
    },
});
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Button,
    TouchableOpacity, Image
} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class SearchCar extends Component {

    static navigationOptions = {
        title: 'Wyszukiwanie',
        headerRight: (
            <TouchableOpacity onPress={() => navigate('ConsultansTable')}>
                <Image source={require('./image/info.png')} style={{ width: 35, height: 35, marginRight: 10 }} />
            </TouchableOpacity>
        ),
    };
    
    constructor(props) {
        super(props)
        this.state = { search: '', todayDate: new Date(), startDate: new Date(), endDate: new Date()}
    }

    render() {
        const { navigate, state} = this.props.navigation;
        
        return (
            <View behavior="padding" style={styles.container}>
                <View style={styles.formContainer}>
                <Text style={styles.subtitleText}>Data najmu *:</Text>
                    <DatePicker
                        style={styles.datePicker}
                        date={this.state.startDate}
                        mode="date"
                        placeholder="wybierz datę"
                        format="YYYY-MM-DD"
                        minDate= {this.todayDate}
                        maxDate="2018-12-31"
                        confirmBtnText="Gotowe"
                        cancelBtnText="Zakończ"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onChangeText={(text) => this.startDate = text}
                        onDateChange={(startDate) => { this.setState({ startDate: startDate }) }}
                    />
                    <Text style={styles.subtitleText}>Data zwrotu *:</Text>
                    <DatePicker
                        style={styles.datePicker}
                        date={this.state.endDate}
                        mode="date"
                        placeholder="wybierz datę"
                        format="YYYY-MM-DD"
                        minDate= {this.todayDate}
                        maxDate="2018-12-31"
                        confirmBtnText="Gotowe"
                        cancelBtnText="Zakończ"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onChangeText={(text) => this.endDate = text}
                        onDateChange={(endDate) => { this.setState({ endDate: endDate }) }}
                    />
                    {/* <TextInput
                        onChangeText={(text) => this.search = text}
                        placeholder="szukaj..."
                        placeholderTextColor='black'
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input} /> */}
                </View>
                <View style={styles.formContainer}>
                    <Button style={styles.buttonText} title="DALEJ" onPress={() => navigate('CarsTable', { search: this.search, startDate:this.state.startDate, endDate: this.state.endDate})} />
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
        width: 400,
        height: 25,
        marginTop: 0,
        backgroundColor: 'blue',
    },
    consultantButton: {
        width: 35,
        height: 20,
        marginTop: 0,
    },
    datePicker: {
        width: 320,
        height: 40
    },
    subtitleText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
});
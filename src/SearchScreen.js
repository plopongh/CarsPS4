import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Button,
    TouchableOpacity, Image, Picker
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

export default class SearchCar extends Component {

    static navigationOptions = {
        title: 'Wyszukiwanie',
        headerRight: (
            <TouchableOpacity onPress={() => {navigate('ConsultansTable')} }>
                <Image source={require('./image/info.png')} style={{ width: 35, height: 35, marginRight: 10 }} />
            </TouchableOpacity>
        ),
    };

    constructor(props) {
        super(props)
        this.state = { search: '', todayDate: new Date(), startDate: new Date(), endDate: new Date(), pickerMarkValue: '', pickerYearValue: '' }
        this.state = {
            types1: [{ label: 'Osobowy ', value: 0, color: '#d9d9d9' }, { label: 'Dostawczy ', value: 1, color: '#d9d9d9' }],
            value1: 0,
            value1Index: 0,
        }
    }

    render() {
        const { navigate, state } = this.props.navigation;

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
                        minDate={this.todayDate}
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
                        minDate={this.todayDate}
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

                    <Text style={styles.subtitleText}>Rodzaj samachodu:</Text>
                    <RadioForm
                        ref="radioForm"
                        radio_props={this.state.types1}
                        initial={0}
                        formHorizontal={true}
                        labelHorizontal={true}
                        buttonColor={'#d9d9d9'}
                        color={'#d9d9d9'}
                        onPress={(value, index) => {
                            this.setState({
                                value1: value,
                                value1Index: index
                            })
                        }}
                    />
                    <Text style={styles.subtitleText}>Marka samachodu:</Text>
                    <Picker
                        selectedValue={this.state.pickerMarkValue}
                        onValueChange={(itemValue, itemIndex) => this.setState({ pickerMarkValue: itemValue })} >
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Alfa Romeo" value="Alfa Romeo" />
                        <Picker.Item label="Audi" value="Audi" />
                        <Picker.Item label="BMW" value="BMW" />
                        <Picker.Item label="Citroën" value="Citroën" />
                        <Picker.Item label="Fiat" value="Fiat" />
                        <Picker.Item label="Ford" value="Ford" />
                        <Picker.Item label="Jeep" value="Jeep" />
                    </Picker>
                    <Text style={styles.subtitleText}>Rok produkcji samachodu:</Text>
                    <Picker
                        selectedValue={this.state.pickerYearValue}
                        onValueChange={(itemValue, itemIndex) => this.setState({ pickerYearValue: itemValue })} >
                        <Picker.Item label="" value="" />
                        <Picker.Item label="2005" value="2005" />
                        <Picker.Item label="2006" value="2006" />
                        <Picker.Item label="2007" value="2007" />
                        <Picker.Item label="2008" value="2008" />
                        <Picker.Item label="2009" value="2009" />
                        <Picker.Item label="2010" value="2010" />
                        <Picker.Item label="2011" value="2011" />
                        <Picker.Item label="2012" value="2012" />
                        <Picker.Item label="2013" value="2013" />
                        <Picker.Item label="2014" value="2014" />
                        <Picker.Item label="2015" value="2015" />
                    </Picker>
                    {/* <TextInput
                        onChangeText={(text) => this.search = text}
                        placeholder="szukaj..."
                        placeholderTextColor='black'
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input} /> */}
                    <View style={styles.formContainer}>
                        <Button style={styles.buttonText} title="DALEJ" onPress={() => navigate('CarsTable', { search: this.search, startDate: this.state.startDate, endDate: this.state.endDate, markValue: this.state.pickerMarkValue, yearValue: this.state.pickerYearValue, carType: this.state.types1[this.state.value1Index].label })} />
                    </View>
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
        marginTop: 10,
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
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5
    },
});
import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default class Auth0 extends Component {
    
    constructor(props) {

        super(props);
        this.state = {
            email: ""
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.textInputWrapper} >
                    <Text style={styles.icon}>@</Text>
                    <TextInput
                        keyboardType={'email-address'}
                        placeholder={'email'}
                        style={styles.textInput}
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                    />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        borderWidth: 1,
        borderColor: '#CCCCCC',

    },
    icon: {
        color: '#CCCCCC',
    },
    textInputWrapper: {
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 6,
        margin: 10,
        borderColor: '#CCCCCC',
        borderWidth: 1
    },
    textInput: {
        flex: 1,
        padding: 10,
        height: 50,
        fontSize: 20,
        color: '#333333'
    }
})
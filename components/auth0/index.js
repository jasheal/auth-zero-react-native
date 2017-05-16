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
                <TextInput
                    keyboardType={'email-address'}
                    placeholder={'email'}
                    style={styles.textInput}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        borderRadius: 6,
        padding: 10,
        height: 50, 
        width: 320,
        borderColor: '#CCCCCC',
        borderWidth: 1
    }
})
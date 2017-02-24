'use strict';

import React, { Component } from 'react';
import ReactNative, {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

const styles = require('../styles/styles.js')

class Button extends Component {
    render() {
        return (
            <View style={styles.button}>
                <TouchableHighlight
                    underlayColor='#0000ff'
                    onPress={this.props.onPress}>
                    <Text style={styles.buttonText}>{this.props.title}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = Button;
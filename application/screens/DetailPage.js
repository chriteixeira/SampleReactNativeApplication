'use strict';

import React, { Component, BackAndroid } from 'react';
import ReactNative, { View, ListView, Text } from 'react-native';

const styles = require('./../styles/styles.js');
const Button = require('./../components/Button');

class AddPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.titleBar}>
                    <Text style={styles.titleBarText}>Item Page</Text>
                </View>
                <View>
                    <Text style={styles.itemDetailText}>Name: {this.props.item.name} </Text>
                    <Text style={styles.itemDetailText}>Description: {this.props.item.description}</Text>
                </View>
                <Button title="Back" onPress={this.navBack.bind(this)} navigator={this.props.navigator} />
            </View>
        );
    }

    navBack() {
        this.props.navigator.pop()
    }

}

module.exports = AddPage
'use strict';

import React, { Component, BackAndroid } from 'react';
import ReactNative, { View, ListView, Text } from 'react-native';
import NavigationBar from 'react-native-navbar';

const styles = require('./../styles/styles.js');
const Button = require('./../components/Button');

class AddPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const leftButtonConfig = {
            title: 'Back',
            handler: () => this.navBack(),
        };

        return (
            <View style={styles.container}>
                <NavigationBar
                    title={{ title: 'Add a new item' }}
                    leftButton={leftButtonConfig}
                />

                <View>
                    <Text style={styles.itemDetailText}>Name: {this.props.item.name} </Text>
                    <Text style={styles.itemDetailText}>Description: {this.props.item.description}</Text>
                </View>
            </View>
        );
    }

    navBack() {
        this.props.navigator.pop()
    }

}

module.exports = AddPage
'use strict';

import React, { Component, BackAndroid } from 'react';
import ReactNative, { View, ListView, Text } from 'react-native';
import NavigationBar from 'react-native-navbar';

import Button from './../components/Button'
import styles from './../styles/styles.js';

import database from './../utils/database'

const firebaseApp = database.getFirebaseApp();

class AddPage extends Component {
    constructor(props) {
        super(props);
        this.itemListRef = firebaseApp.database().ref('items');
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
                    <Text style={styles.itemDetailText}>Key: {this.props.item.key} </Text>
                    <Text style={styles.itemDetailText}>Name: {this.props.item.name} </Text>
                    <Text style={styles.itemDetailText}>Description: {this.props.item.description}</Text>

                    <Button title="Remove" onPress={this.removeItem.bind(this)} navigator={this.props.navigator} />
                </View>
            </View>
        );
    }

    navBack() {
        this.props.navigator.pop()
    }
    removeItem() {
       this.itemListRef.child(this.props.item.key).remove();
       this.props.navigator.pop();
    }

}

module.exports = AddPage
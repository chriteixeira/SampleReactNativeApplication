'use strict';

import React, { Component, BackAndroid } from 'react';
import ReactNative, { View, ListView, Text, TextInput } from 'react-native';

const styles = require('./../styles/styles.js');
const Button = require('./../components/Button');

import database from './../utils/database'

const firebaseApp = database.getFirebaseApp();

class AddPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			description: ''
		}

		this.itemListRef = firebaseApp.database().ref('items');
	}

	render() {
		return (
			<View style={styles.container}>

				<View style={styles.titleBar}>
					<Text style={styles.titleBarText}>Item Page</Text>
				</View>
				<View>
					<Text style={styles.itemDetailText}>Name: </Text>
					<TextInput
						style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={(text) => this.setState({ name: text })}
						value={this.state.name}
					/>
					<Text style={styles.itemDetailText}>Description:</Text>
					<TextInput
						style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={(text) => this.setState({ description: text })}
						value={this.state.description}
					/>
				</View>
				<Button title="Add" onPress={this.itemAdd.bind(this)} navigator={this.props.navigator} />
				<Button title="Back" onPress={this.navBack.bind(this)} navigator={this.props.navigator} />
			</View>
		);
	}

	itemAdd() {
		this.itemListRef.push({ name: this.state.name, description: this.state.description });
		this.props.navigator.pop()

	}
	navBack() {
		this.props.navigator.pop()
	}

}

module.exports = AddPage
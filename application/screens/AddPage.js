'use strict';

import React, { Component, BackAndroid } from 'react';
import ReactNative, { View, ListView, Text, TextInput, ScrollView } from 'react-native';
import NavigationBar from 'react-native-navbar';

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
				<View style={styles.addPage}>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => this.setState({ name: text })}
						value={this.state.name}
						placeholder={'name'}
					/>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => this.setState({ description: text })}
						value={this.state.description}
						placeholder={'description'}
					/>
					<Button title="Add" onPress={this.itemAdd.bind(this)} navigator={this.props.navigator} />
				</View>
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
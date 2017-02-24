'use strict';

import React, { Component } from 'react';
import ReactNative, { View, ListView, Text } from 'react-native';

const Button = require('./../components/Button');
const styles = require('./../styles/styles.js');

import database from './../utils/database'

const firebaseApp = database.getFirebaseApp();

class AddPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
		};

		this.itemListRef = firebaseApp.database().ref('items');
	}

	componentDidMount() {
		this.itemListListener();
	}

	render() {
		return (
			<View style={styles.container}>

				<View style={styles.titleBar}>
					<Text style={styles.titleBarText}>Title Bar</Text>
				</View>
				<ListView dataSource={this.state.dataSource} renderRow={this._renderRow.bind(this)} />
				<Button title="+" />
			</View>
		);
	}

	_renderRow(item) {
		return (
			<ListItem item={item} />
		);
	}

	itemListListener() {
		this.itemListRef.on('value', (snapshot) => {

			var data = [];
			snapshot.forEach((child) => {
				data.push(child.val());
			});

			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(data)
			});
		});
	}

}

module.exports = AddPage
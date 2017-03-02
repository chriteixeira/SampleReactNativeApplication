'use strict';

import React, { Component } from 'react';
import ReactNative, { View, ListView, Text } from 'react-native';
import NavigationBar from 'react-native-navbar';

import Button from './../components/Button'
import ListItem from './../components/ListItem';
import styles from './../styles/styles.js';

import database from './../utils/database'

const firebaseApp = database.getFirebaseApp();

class MainPage extends Component {
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
		const rightButtonConfig = {
			title: 'Add',
			handler: () => this.navAddPage(),
		};
		return (
			<View style={styles.container}>
				<NavigationBar
					title={{ title: 'Main Page' }}
					rightButton={rightButtonConfig}
				/>
				<ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} />
			</View>
		);
	}

	renderRow(item) {
		return (
			<ListItem item={item} onPress={this.navDetailPage.bind(this, item)} />
		);
	}

	itemListListener() {
		this.itemListRef.on('value', (snapshot) => {

			var data = [];
			snapshot.forEach((child) => {
				var item = child.val();
				item.key = child.key;
				data.push(item);
			});

			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(data)
			});
		});
	}

	navAddPage() {
		this.props.navigator.push({
			index: 1
		})
	}

	navDetailPage(item) {
		this.props.navigator.push({
			index: 2,
			item: item
		})
	}
}

module.exports = MainPage
'use strict';

import React, { Component } from 'react';
import ReactNative, { ListView } from 'react-native';

const AppNavigator = require('./components/AppNavigator');

class IndexPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<AppNavigator />
		);
	}
}
module.exports = IndexPage
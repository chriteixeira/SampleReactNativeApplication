'use strict';

import React, { Component } from 'react';
import ReactNative, { Navigator } from 'react-native';

import MainPage from '../screens/MainPage';
import AddPage from '../screens/AddPage';
import DetailPage from '../screens/DetailPage';

const routes = [
    { title: 'Index Page', index: 0 },
    { title: 'Add Page', index: 1 },
    { title: 'Detail Page', index: 2 }
]

class AppNavigator extends Component {
    render() {
        return (
            <Navigator
                initialRoute={routes[0]}
                renderScene={this.renderScene.bind(this)}
            />
        );
    }

    renderScene(route, navigator) {
        if (route.index === 0) {
            return <MainPage navigator={navigator} />
        }
        else if (route.index === 1) {
            return <AddPage navigator={navigator} />
        }
        else if (route.index === 2) {
            return <DetailPage navigator={navigator} item={route.item} />
        }
    }
}

module.exports = AppNavigator
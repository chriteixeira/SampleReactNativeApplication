import React, { Component } from 'react';
import ReactNative, {
    View,
    TouchableHighlight,
    Text
} from 'react-native';

const styles = require('../styles/styles.js')

class ListItem extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <View style={styles.list}>
                    <Text style={styles.listText}>{this.props.item.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

module.exports = ListItem;
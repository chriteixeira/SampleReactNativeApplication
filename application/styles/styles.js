'use strict';

import React, { StyleSheet } from 'react-native';

var style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },

    // ListItem
    list: {
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderColor: 'transparent',
        borderWidth: 1,
        padding: 10,
    },
    listText: {
        color: '#333',
        fontSize: 16,
    },

    // Title Bar
    titleBar: {
        backgroundColor: '#fff',
        borderColor: 'transparent',
        borderBottomColor: '#eee',
        borderWidth: 1,
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    titleBarText: {
        color: '#444',
        fontSize: 16,
        fontWeight: "500"
    },
    
    // Button
    buttonText: {
        fontSize: 18,
        color: '#ffffff',
        marginTop: 4,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#48afdb',
    },

    // Item Detail
    itemDetailText: {
        fontSize: 14,
        padding: 5,

    }
})

module.exports = style

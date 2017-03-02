'use strict';

import React, { StyleSheet } from 'react-native';

var style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'stretch',
    },

    // ListItem
    list: {
        backgroundColor: '#fff',
        borderBottomColor: '#e3e3e3',
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
        borderBottomColor: '#a3a3a3',
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
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',

    },
    button: {
        backgroundColor: '#48afdb',
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 10,
        paddingVertical: 15,
    },

    // Item Detail
    itemDetailText: {
        fontSize: 14,
        padding: 5,

    },

    addPage: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },

    textInput: {
        color: '#5d5d5d',
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
})

module.exports = style

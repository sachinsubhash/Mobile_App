import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class List extends Component {
    state = {
        names: [
            {
                id: 0,
                name: 'Suhail',
            },
            {
                id: 1,
                name: 'Jeffin',
            },
            {
                id: 2,
                name: 'Sachin',
            },
            {
                id: 3,
                name: 'Kaif',
            },
            {
                id: 4,
                name: 'Dona',
            },
        ]
    }
    alertItemName = (item) => {
        alert(item.name)
    }
    render() {
        return (
            <View>
                {
                    this.state.names.map((item, index) => (
                        <TouchableOpacity
                        key = {item.id}
                        style = {style.container}
                        onPress = {() => this.alertItemName(item)}
                        >
                            <Text style={StyleSheet.text}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}
export default List

const style = StyleSheet.create ({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center'
    },
    text: {
        color: '#4f60cc'
    }
})
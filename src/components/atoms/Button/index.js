import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Tombol = ({ type, title, onPress}) => {
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Tombol

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
        paddingVertical: 10,
        borderRadius: 10
    }),
    text: (type) => ({
        fontSize: 16, 
        fontWeight: '600',
        textAlign: 'center',
        color: type === 'secondary' ? '#112340' : 'white',
        fontFamily: 'Nunito-SemiBold'
    })
})

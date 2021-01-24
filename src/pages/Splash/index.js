import React from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILlogo } from '../../assets'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() =>{
            navigation.replace('GetStarted')
        }, 3000 )
    }, []) 
    return (
        <View style={styles.page}>
            <ILlogo/>
            <Text style={styles.title}>My Doctor</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: { 
        backgroundColor: 'white',
        justifyContent: 'center', 
        flex: 1, 
        alignItems: 'center'
    },
    title: { 
        fontSize: 20, 
        fontWeight: '600', 
        color: '#112340', 
        marginTop: 20 
    }
})

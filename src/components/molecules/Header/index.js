import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Back } from '../../../assets'
import { Gap } from '../../atoms'

const Header = () => {
    return (
        <View style={styles.container}>
            <Back/>
            <Text style={styles.text}>dasdsad</Text>
            <Gap width={24}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical:30,
        backgroundColor:'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: '#112340',
    }
})

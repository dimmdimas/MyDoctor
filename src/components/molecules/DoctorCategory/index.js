import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILCatUmum } from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCategory = () => {
    return (
        <View style={styles.container}>
            <ILCatUmum style={styles.ILU}/>
            <Text style={styles.label}>DoctorCategory</Text>
            <Text style={styles.category}>DoctorCategory</Text>
        </View>
    )
}

export default DoctorCategory

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: colors.cardLight,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 10,
        width: 100,
        height: 130
    },
    ILU: {
        marginBottom: 20
    },
    label: {
        fontSize: 10,
        fontFamily: fonts.primary[300],
        color: colors.text.primary
    },
    category: {
        fontSize: 10,
        fontFamily: fonts.primary[400],
        color: colors.text.primary
    }
});

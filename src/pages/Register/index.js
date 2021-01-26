import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Input, Tombol } from '../../components'
import { colors } from '../../utils'

const Register = () => {
    return (
        <View style={styles.page}>
            <Header/>
            <View style={styles.content}>
                <Text></Text>
                <Input label="Full Name" />
                <Input label="Pekerjaan" />
                <Input label="Email" />
                <Input label="Password" />
                <Tombol title="Continue" />
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    content: {
        padding: 40,
        paddingTop: 0
    },
    page: {
        backgroundColor: colors.white,
        flex: 1
    }
})

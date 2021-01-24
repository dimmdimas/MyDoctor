import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Input, Tombol } from '../../components'

const Register = () => {
    return (
        <View>
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
    }
})

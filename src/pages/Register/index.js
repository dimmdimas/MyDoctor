import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Input, Tombol } from '../../components'

const Register = () => {
    return (
        <View>
            <Header/>
            <Text></Text>
            <Input label="Full Name"/>
            <Input label="Pekerjaan" />
            <Input label="Email" />
            <Input label="Password" />
            <Tombol title="Continue"/>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({})

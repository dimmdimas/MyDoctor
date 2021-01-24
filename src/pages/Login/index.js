import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILlogo } from '../../assets'
import { Gap, Input, Link, Tombol } from '../../components'

const Login = () => {
    return (
        <View style={styles.page}>
            <ILlogo/>
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input label="Email Address"/>
            <Gap height={24}/>
            <Input label="Password"/>
            <Gap height={10} />
            <Link title="Forgot My Password" size={12}/>
            <Gap height={40} />
            <Tombol title="Sign In"/>
            <Gap height={30} />
            <Link title="Create New Account" size={16} align="center"/>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        padding: 40,
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: '#112340',
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 153
    }
})

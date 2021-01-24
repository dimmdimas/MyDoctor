import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { bg, ILlogo } from '../../assets'
import { Tombol, Gap } from '../../components'

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={bg} style={styles.page}>
            <View>
                <ILlogo />
                <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View style={styles.container}>
                <Tombol title="Get Started"
                    onPress={() => navigation.navigate('Register')}
                />
                <Gap height={16} />
                <Tombol type="secondary" title="Sign In" 
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flex: 1
    },
    title: { 
        fontSize: 28,
        color: 'white',
        marginTop: 91,
        fontFamily: 'Nunito-SemiBold'
    }
})

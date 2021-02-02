import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap, Header, Input, Tombol} from '../../components';
import {colors, useForm} from '../../utils';

const Register = ({navigation}) => {
  const [fullName, setfullName] = useState ('');
  const [profession, setprofession] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const [form, setForm] = useForm({
      fullName: '',
      profession: '',
      email: '',
      password: ''
  })

  const onContinue = () => {
    console.log (form);
    // navigation.navigate('UploadPhoto')
  };
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack ()} title="Daftar Akun" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text />
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={value => setForm (value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profession}
            onChangeText={value => setprofession (value)}
          />
          <Gap height={24} />
          <Input
            label="Email"
            value={email}
            onChangeText={value => setEmail (value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={password}
            onChangeText={value => setPassword (value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Tombol title="Continue" onPress={onContinue} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create ({
  content: {
    padding: 40,
    paddingTop: 0,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

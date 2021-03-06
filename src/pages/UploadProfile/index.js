import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap, Header, Input, Profile, Tombol} from '../../components';
import {colors} from '../../utils';

const UpdateProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack ()} />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Profile isRemove />
        <Gap height={26} />
        <Input label="Full Name" />
        <Gap  height={24} />
        <Input label="Pekerjaan" />
        <Gap  height={24} />
        <Input label="Email" />
        <Gap  height={24} />
        <Input label="Password" />
        <Gap  height={40} />
        <Tombol title="Save Profile" onPress={() => navigation.goBack('UserProfile') }/>
      </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create ({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
      padding: 40,
      paddingTop: 0
  }
});

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import {ListDoctor} from '../../components';
import {colors, fonts} from '../../utils';

const Messages = () => {
  const [doctors] = useState ([
    {
      id: 1,
      profile: DummyDoctor2,
      name: 'Alexander asdasd',
      desc: 'Baik buuuu',
    },
    {
      id: 2,
      profile: DummyDoctor1,
      name: 'sSCCS asdasd',
      desc: 'SADASD buuuu',
    },
    {
      id: 3,
      profile: DummyDoctor3,
      name: 's asdasd',
      desc: 'buuuu',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map (doctor => {
          return (
            <ListDoctor
              key={doctor.id}
              profile={doctor.profile}
              name={doctor.name}
              desc={doctor.desc}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create ({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});

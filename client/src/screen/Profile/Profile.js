/** @format */

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{paddingHorizontal: 15}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <Image
            source={require('../../assets/dp.jpg')}
            style={{
              height: 40,
              width: 40,
              borderRadius: 50,
              height: 80,
              width: 80,
              borderRadius: 50,
            }}
          />
          <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
            Ademola Akinwale
          </Text>
          <Text style={{color: '#000', fontSize: 16}}>
            ademola_akinwale@gmail.com
          </Text>
          <Text style={{color: 'gray', fontSize: 14, marginBottom: 20}}>
            +234-8069095729
          </Text>
        </View>
      </View>

      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
};

export default Profile;

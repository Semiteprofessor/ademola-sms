/** @format */

import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Settings = ({navigation}) => {
  const menus = [
    {
      title: 'Account',
      url: 'Account',
      icon: (
        <MaterialCommunityIcons
          name="account-cog-outline"
          size={24}
          color="black"
        />
      ),
      forward: <Ionicons name="chevron-forward" size={24} color="black" />,
    },
    {
      title: 'Privacy',
      url: 'Privacy',
      icon: (
        <MaterialCommunityIcons name="lock-outline" size={30} color="black" />
      ),
      forward: <Ionicons name="chevron-forward" size={24} color="black" />,
    },
    {
      title: 'Security',
      url: 'Security',
      icon: <MaterialIcons name="security" size={24} color="black" />,
      forward: <Ionicons name="chevron-forward" size={24} color="black" />,
    },
    {
      title: 'Two - Step Verification',
      url: 'TwoStepVerification',
      icon: <Octicons name="verified" size={24} color="black" />,
      forward: <Ionicons name="chevron-forward" size={24} color="black" />,
    },
    {
      title: 'Change number',
      url: 'ChangeNumber',
      icon: (
        <MaterialIcons name="published-with-changes" size={24} color="black" />
      ),
      forward: <Ionicons name="chevron-forward" size={24} color="black" />,
    },
    {
      title: 'Request account info',
      url: 'RequestAccountInfo',
      icon: <Octicons name="info" size={24} color="black" />,
      forward: <Ionicons name="chevron-forward" size={24} color="black" />,
    },
    {
      title: 'Delete my account',
      url: 'DeleteAccount',
      icon: <AntDesign name="delete" size={24} color="black" />,
      forward: <Ionicons name="chevron-forward" size={24} color="black" />,
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={{paddingHorizontal: 15, marginTop: 40}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: -20,
            }}>
            <View style={{marginTop: 30}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 22,
                  color: 'black',
                }}>
                Settings
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          {menus.map((menu, key) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate(menu.url)}
                key={key}
                style={styles.insuranceItem}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{fontSize: 16, color: 'coral'}}>
                      {menu.icon}
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#000',
                        marginLeft: 10,
                        color: 'black',
                      }}>
                      {menu.title}
                    </Text>
                  </View>
                  <View>{menu.forward}</View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flex: 1,
    width: '90%',
    height: 50,
    borderRadius: 40,
    borderWidth: 1.5,
    borderColor: 'coral',
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  actionBtn: {
    height: 40,
    width: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  insuranceItem: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    padding: 15,
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)',
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)',
  },
});

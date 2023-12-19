/** @format */

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Messages from '../screen/Chat/Chat';
import Profile from '../screen/Profile/Profile';
import Settings from '../screen/Settings/Settings';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}>
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="message-text-outline"
              size={26}
              color={color}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="ChoosePlan"
        component={ChoosePlan}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="subscriptions" size={24} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="settings-sharp" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});

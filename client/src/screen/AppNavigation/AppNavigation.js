import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../../components/CustomDrawer';
import Home from '../Home/Home';
import Login from '../Authentication/Login/Login';
import {SignUp} from '../Authentication/SignUp';
import Profile from '../Profile/Profile';
import BottomTab from '../../components/BottomTab';
import Messages from '../Chat/Chat';

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigation = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Welcome" component={SideDrawer} />
      <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen name="SignUp" component={SignUp} />
      <AppStack.Screen name="Chat" component={BottomTab} />
      <AppStack.Screen name="Profile" component={Profile} />
    </AppStack.Navigator>
  );
};

export default AppNavigation;

const SideDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          drawerLabel: '',
          drawerIcon: ({color}) => (
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
              <Text style={{color: PRIMARY_COLOR, fontWeight: '800'}}>
                My Truck
              </Text>
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

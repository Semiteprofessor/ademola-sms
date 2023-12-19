/** @format */

import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const CustomDrawer = props => {
  const navigation = useNavigation();

  const sideMenus = [
    {
      title: 'Profile',
      url: 'Profile',
      icon: <Entypo name="user" size={18} color="black" />,
      forward: <Ionicons name="chevron-forward" size={18} color="black" />,
    },
    {
      title: 'Notification',
      url: 'Notifications',
      icon: <MaterialIcons name="notifications-on" size={18} color="black" />,
      forward: <Ionicons name="chevron-forward" size={18} color="black" />,
    },
    {
      title: 'Settings',
      url: 'Settings',
      icon: <FontAwesome name="cog" size={18} color="black" />,
      forward: <Ionicons name="chevron-forward" size={18} color="black" />,
    },
  ];

  const userInfo = {
    lastname: 'Ademola',
    othernames: 'Akinwale',
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{paddingHorizontal: 10, paddingTop: 30}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginTop: 20,
              marginBottom: 20,
              padding: 10,
              borderRadius: 5,
            }}>
            <Image
              source={require('../assets/dp.jpg')}
              resizeMode="contain"
              style={{height: 60, width: 60}}
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 15,
                  color: 'gray',
                }}>
                Good Morning
              </Text>
              <Text style={{color: '#000', fontSize: 18, fontWeight: '600'}}>
                {`${userInfo.othernames} ${userInfo.lastname}`}
              </Text>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 20}}>
          <Text style={{fontWeight: '600', color: '#000'}}>More</Text>
        </View>
        <View style={{marginTop: 30}}>
          {sideMenus.map((menu, key) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(menu.url)}
              key={key}
              style={styles.insuranceItem}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                  <View style={{fontSize: 16, color: 'coral'}}>
                    {menu.icon}
                  </View>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#000',
                      marginLeft: 10,
                      color: '#000',
                    }}>
                    {menu.title}
                  </Text>
                </View>
                <View>{menu.forward}</View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <FontAwesome name="power-off" size={20} color={'#000'} />
            <Text style={{fontSize: 13, marginLeft: 10, color: '#000'}}>
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  insuranceItem: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    padding: 15,
  },
});

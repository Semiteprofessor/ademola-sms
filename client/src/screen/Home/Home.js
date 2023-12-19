import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/sms.gif')}
        resizeMode="cover"
        style={{height: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 40,
            paddingHorizontal: 20,
          }}>
          <View></View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View style={{marginTop: 150}}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: '600',
                textAlign: 'center',
                color: 'purple',
                textTransform: 'uppercase',
              }}>
              Welcome
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: '600',
                textAlign: 'center',
                marginTop: 40,
                color: 'royalblue',
              }}>
              Ademola Akinwale
            </Text>
          </View>
          <View style={{marginTop: 150}}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                textAlign: 'center',
                color: 'purple',
              }}>
              Login to send SMS to {'\n'}your loved ones
            </Text>
          </View>

          <View style={{marginTop: 170}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={{
                backgroundColor: 'purple',
                padding: 10,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '60%',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Login
              </Text>
              <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

/** @format */

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-element-textinput';
import CustomButton from '../../../components/Form/CustomButton';

const Login = ({navigation}) => {
  const [formData, setFormData] = useState({
    // Login information
    emailId: '',
    password: '',
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{paddingHorizontal: 15}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View></View>
        </View>
        <View style={{marginTop: 80}}>
          <Text style={{fontSize: 36, fontWeight: 'bold', color: 'coral'}}>
            Login
          </Text>
        </View>
        <View style={{marginTop: 130}}>
          <View style={styles.container}>
            <TextInput
              value={formData.emailId}
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="e-Mail"
              placeholderTextColor="gray"
              onChangeText={emailId => {
                setFormData({...formData, emailId});
              }}
            />
          </View>
          <View style={styles.container}>
            <TextInput
              mode="password"
              value={formData.password}
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Password"
              placeholderTextColor="gray"
              onChangeText={password => {
                setFormData({...formData, password});
              }}
            />
          </View>

          <View style={{marginTop: 30}}>
            <CustomButton
              label="Login"
              onPress={() => navigation.navigate('Chat')}
            />
          </View>

          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
              <Text
                style={{
                  color: '#ad40af',
                  fontWeight: '700',
                  textAlign: 'center',
                  marginBottom: 10,
                  marginTop: 20,
                }}>
                Forgot your password ?
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Text>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={{color: '#f0501a', fontWeight: '700'}}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  container: {
    padding: 5,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  input: {
    height: 50,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#c4c2c2',
    paddingBottom: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  inputStyle: {fontSize: 16},
  textarea: {
    height: 80,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#c4c2c2',
    paddingBottom: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  labelStyle: {
    fontSize: 14,
    position: 'absolute',
    top: -10,
    backgroundColor: 'white',
    paddingHorizontal: 4,
    marginLeft: -4,
  },
  placeholderStyle: {fontSize: 16},
  textErrorStyle: {fontSize: 16},
});

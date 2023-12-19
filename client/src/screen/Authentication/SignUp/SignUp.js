/** @format */

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {TextInput} from 'react-native-element-textinput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../../components/Form/CustomButton';

const SignUp = ({navigation}) => {
  const [formData, setFormData] = useState({
    // Sign Up information
    surname: '',
    otherNames: '',
    emailId: '',
    phoneNo: '',
    password: '',
    confirmPassword: '',
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{
                borderRadius: 50,
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'lightgray',
                marginTop: 20,
                marginBottom: 10,
              }}>
              <MaterialCommunityIcons
                name="keyboard-backspace"
                size={24}
                style={{color: 'coral', fontWeight: 'bold'}}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View></View>
          </View>
        </View>
      </View>

      <View style={{paddingHorizontal: 15}}>
        {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Image
              source={AccessLogo}
              style={{
                resizeMode: "contain",
                marginBottom: 20,
                marginTop: 20,
              }}
            />
          </View> */}
        <View style={{marginTop: 40}}>
          <Text style={{fontSize: 36, fontWeight: 'bold', color: 'coral'}}>
            Sign Up
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 70, paddingHorizontal: 15}}>
          <View style={styles.container}>
            <TextInput
              value={formData.surname}
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Surname"
              placeholderTextColor="gray"
              onChangeText={surname => {
                setFormData({...formData, surname});
              }}
            />
          </View>
          <View style={styles.container}>
            <TextInput
              value={formData.otherNames}
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Other Names"
              placeholderTextColor="gray"
              onChangeText={otherNames => {
                setFormData({...formData, otherNames});
              }}
            />
          </View>
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
              value={formData.phoneNo}
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Phone Number"
              placeholderTextColor="gray"
              onChangeText={phoneNo => {
                setFormData({...formData, phoneNo});
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
          <View style={styles.container}>
            <TextInput
              mode="password"
              value={formData.confirmPassword}
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Confirm Password"
              placeholderTextColor="gray"
              onChangeText={confirmPassword => {
                setFormData({...formData, confirmPassword});
              }}
            />
          </View>
          <View style={{marginTop: 30}}>
            <CustomButton label="Crate Account" onPress={() => {}} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
              marginTop: 20,
            }}>
            <Text>Already have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{color: '#f0501a', fontWeight: '700'}}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

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

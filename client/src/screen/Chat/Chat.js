/** @format */

import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ImageBackground,
  FlatList,
  Dimensions,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';

export default function Messages({navigation}) {
  const [chatUser] = useState({
    name: 'Taiwo Olapade',
    profile_image: 'https://randomuser.me/api/portraits/men/0.jpg',
    last_seen: 'online',
  });

  const [currentUser] = useState({
    name: 'Rancho Dev',
  });

  const [messages, setMessages] = useState([
    {sender: 'Rancho Dev', message: 'Hey Ademola!', time: '6:01 PM'},
    {
      sender: 'Taiwo Olapade',
      message: 'Hello bro, how are you doing, How is Poland?',
      time: '6:02 PM',
    },
    {
      sender: 'Rancho Dev',
      message: 'I am good, how about you?',
      time: '6:02 PM',
    },
    {
      sender: 'Rancho Dev',
      message: `😊😇`,
      time: '6:02 PM',
    },
    {
      sender: 'Taiwo Olapade',
      message: `Can't wait to meet you.`,
      time: '6:03 PM',
    },
    {
      sender: 'Rancho Dev',
      message: `That's great ...`,
      time: '6:03 PM',
    },
    {
      sender: 'Rancho Dev',
      message: `Wwhen are you coming back to Nigeria?`,
      time: '6:03 PM',
    },
    {
      sender: 'Taiwo Olapade',
      message: `This weekend.`,
      time: '6:03 PM',
    },
    {
      sender: 'Taiwo Olapade',
      message: `Around 4 to 6 PM.`,
      time: '6:04 PM',
    },
    {
      sender: 'Taiwo Olapade',
      message: `Bro, abeg I want to ask... Can I come to Poland, Lublin to be precise?`,
      time: '6:04 PM',
    },
    {
      sender: 'Rancho Dev',
      message: `Sure... You can come... Its cool weather here bro`,
      time: '6:05 PM',
    },
    {
      sender: 'Taiwo Olapade',
      message: `Really ?????`,
      time: '6:05 PM',
    },
    {
      sender: 'Rancho Dev',
      message: `Yeah.`,
      time: '6:05 PM',
    },
    {
      sender: 'Taiwo Olapade',
      message: `Mehn!!!!!!!! Bro I miss you so much \u{1F44C} \u{1F44D} `,
      time: '6:05 PM',
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');

  function getTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  function sendMessage() {
    if (inputMessage === '') {
      return setInputMessage('');
    }
    let t = getTime(new Date());
    setMessages([
      ...messages,
      {
        sender: currentUser.name,
        message: inputMessage,
        time: t,
      },
    ]);
    setInputMessage('');
  }

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => (
        <View style={styles.headerLeft}>
          <View
            style={{
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
          <Image
            style={styles.userProfileImage}
            source={{uri: chatUser.profile_image}}
          />
          <View
            style={{
              paddingLeft: 10,
              justifyContent: 'center',
            }}>
            <Text style={{color: '#fff', fontWeight: '700', fontSize: 18}}>
              {chatUser.name}
            </Text>
            <Text style={{color: '#fff', fontWeight: '300'}}>
              {chatUser.last_seen}
            </Text>
          </View>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{paddingRight: 10}}
          onPress={() => {
            Alert.alert('Audio Call', 'Audio Call Button Pressed');
          }}>
          <Icon name="call" size={28} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.container, {backgroundColor: 'white'}]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 25,
          }}>
          <View></View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../../assets/dp.jpg')}
              style={{height: 45, width: 45, borderRadius: 50}}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          inverted={true}
          data={JSON.parse(JSON.stringify(messages)).reverse()}
          renderItem={({item}) => (
            <TouchableWithoutFeedback>
              <View style={{marginTop: 6}}>
                <View
                  style={{
                    maxWidth: Dimensions.get('screen').width * 0.8,
                    backgroundColor: '#507f94',
                    alignSelf:
                      item.sender === currentUser.name
                        ? 'flex-end'
                        : 'flex-start',
                    marginHorizontal: 10,
                    padding: 10,
                    borderRadius: 8,
                    borderBottomLeftRadius:
                      item.sender === currentUser.name ? 8 : 0,
                    borderBottomRightRadius:
                      item.sender === currentUser.name ? 0 : 8,
                  }}>
                  <Text
                    style={{
                      color: '#ffffff',
                      fontSize: 13,
                    }}>
                    {item.message}
                  </Text>
                  <Text
                    style={{
                      color: '#ced4d6',
                      fontSize: 13,
                      alignSelf: 'flex-end',
                    }}>
                    {item.time}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />

        <View style={{paddingVertical: 10}}>
          <View style={styles.messageInputView}>
            <TextInput
              defaultValue={inputMessage}
              style={styles.messageInput}
              placeholder="Message"
              onChangeText={text => setInputMessage(text)}
              onSubmitEditing={() => {
                sendMessage();
              }}
            />
            <TouchableOpacity
              style={styles.messageSendView}
              onPress={() => {
                sendMessage();
              }}>
              <Icon name="send" type="material" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileImage: {height: '100%', aspectRatio: 1, borderRadius: 100},
  container: {
    flex: 1,
    backgroundColor: '#f2f2ff',
  },
  messageInputView: {
    flexDirection: 'row',
    marginHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});

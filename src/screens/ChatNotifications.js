import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import TopComponent from '../components/TopComponent';
import {useNavigation} from '@react-navigation/native';
import ChatComponent from '../components/ChatComponent';
import images from '../theme/images';
const _chat = [
  {
    photo: images.person1,
    level: 40,
    name: 'Agent Rose',
    lastText:
      'Ok. Please kindly take the picture of the card front and back view.....',
    time: 'An hour ago',
  },
  {
    photo: images.person2,
    level: 70,
    name: 'Agent Daniel',
    lastText:
      'Ok. Please kindly take the picture of the card front and back view.....',
    time: 'An hour ago',
  },
  {
    photo: images.person3,
    level: 60,
    name: 'Agent Rue',
    lastText: 'I’ve an Amazon Giftcard i want to trade for cash......',
    time: 'An hour ago',
  },
  {
    photo: images.person4,
    level: 40,
    name: 'Agent Amaka',
    lastText:
      'Ok. Please kindly take the picture of the card front and back view.....',
    time: 'An hour ago',
  },
  {
    photo: images.person5,
    level: 40,
    name: 'Agent Shawn',
    lastText:
      'Ok. Please kindly take the picture of the card front and back view.....',
    time: 'An hour ago',
  },
  {
    photo: images.person6,
    level: 40,
    name: 'Agent Michael',
    lastText:
      'Ok. Please kindly take the picture of the card front and back view.....',
    time: 'An hour ago',
  },
];
const ChatNotifications = () => {
  const navigation = useNavigation();
  const NavigateTo = screnName => navigation.navigate(screnName);
  return (
    <View style={{flex: 1, backgroundColor: '#FFFBF7'}}>
      <TopComponent
        showCircle={true}
        navBack={NavigateTo}
        screenName="Dashboard"
      />
      <View style={{paddingLeft: 28, paddingTop: 30, paddingBottom: 20}}>
        <Text style={{fontSize: 16, color: '#626262'}}>Chats</Text>
      </View>
      <ScrollView>
        {_chat.map((x, index) => (
          
            <ChatComponent
               key={index}
              photo={x.photo}
              name={x.name}
              lastText={x.lastText}
              time={x.time}
              level={x.level}
              navTo={NavigateTo}
              screenName={'ChatBox'}
            />
      
        ))}
      </ScrollView>
    </View>
  );
};

export default ChatNotifications;

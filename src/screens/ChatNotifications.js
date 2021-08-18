import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TopComponent from '../components/TopComponent';
import ChatComponent from '../components/chat/ChatComponent';
import images from '../theme/images';
import strings from '../theme/strings';
import styles from './styles/chatNotificationsStyles'
const _chat = [
  {
    photo: images.person1,
    level: 40,
    name: strings.chatNotifications.agent1,
    lastText: strings.chatNotifications.agent1LastMessage,
    time: strings.chatNotifications.timeAgo,
  },
  {
    photo: images.person2,
    level: 70,
    name: strings.chatNotifications.agent2,
    lastText: strings.chatNotifications.agent2LastMessage,
    time: strings.chatNotifications.timeAgo,
  },
  {
    photo: images.person3,
    level: 60,
    name: strings.chatNotifications.agent3,
    lastText: strings.chatNotifications.agent3LastMessage,
    time: strings.chatNotifications.timeAgo,
  },
  {
    photo: images.person4,
    level: 40,
    name: strings.chatNotifications.agent4,
    lastText: strings.chatNotifications.agent4LastMessage,
    time: strings.chatNotifications.timeAgo,
  },
  {
    photo: images.person5,
    level: 40,
    name: strings.chatNotifications.agent5,
    lastText: strings.chatNotifications.agent5LastMessage,
    time: strings.chatNotifications.timeAgo,
  },
  {
    photo: images.person6,
    level: 40,
    name: strings.chatNotifications.agent6,
    lastText: strings.chatNotifications.agent6LastMessage,
    time: strings.chatNotifications.timeAgo,
  },
];

const ChatNotifications = () => {
  const navigation = useNavigation();
  const NavigateTo = screnName => navigation.navigate(screnName);
  return (
    <View style={styles.background}>
      <TopComponent
        showCircle={true}
        navBack={NavigateTo}
        screenName="DashBoard"
      />
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{strings.chatNotifications.title}</Text>
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

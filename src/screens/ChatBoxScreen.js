import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import BackComponent from '../components/BackComponent';
import grad from '../components/ColorEaseing';
import images from '../theme/images';
import styles from './styles/chatBoxStyle';
import strings from '../theme/strings';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [messageRecived, setMessageRecived] = useState(
    strings.chat.recivedMessage,
  );
  const [messages, setMessages] = useState([
    {sender: messageRecived, reciver: '', imageSent: strings.chat.empty},
  ]);
  let textInputRef = useRef(null);
  let scrollRef = useRef(null);
  const navigation = useNavigation();
  const NavigateBack = () => navigation.goBack();
  const options = {mediaType: 'photo'};

  return (
    <View style={styles.background}>
      <BackComponent
        showCircle={true}
        text={strings.chat.back}
        navBack={NavigateBack}
      />
      <ScrollView
        style={styles.scrollview}
        ref={ref => (scrollRef = ref)}
        onContentSizeChange={() => scrollRef.scrollToEnd({animated: true})}>
        {messages.map((x, index) =>
          x.reciver != '' ? (
            <View
              key={index}
              style={index != 0 ? styles.messageView : styles.firstMessage}>
              <LinearGradient
                style={styles.gradient}
                colors={grad.grad.colors}
                locations={grad.grad.locations}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}>
                {x.imageSent != strings.chat.empty ? (
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Image style={styles.image} source={x.imageSent} />
                  </TouchableOpacity>
                ) : (
                  <View>
                    <Text style={styles.messageText}>{x.reciver}</Text>
                  </View>
                )}
              </LinearGradient>
              <Text style={styles.timeText}>{strings.chat.timeAgo}</Text>
              <View style={styles.messageRecivedView}>
                <Text style={styles.messageText}>{x.sender}</Text>
              </View>
              <Text style={styles.timeTextSender}>{strings.chat.timeAgo}</Text>
              <Modal visible={modalVisible}>
                <View style={styles.modalCloseButtonView}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Image source={images.close} />
                  </TouchableOpacity>
                </View>
                <View style={styles.modalImageView}>
                  <Image
                    resizeMode="cover"
                    style={styles.modalImage}
                    source={x.imageSent}
                  />
                </View>
              </Modal>
            </View>
          ) : null,
        )}
      </ScrollView>
      <View style={styles.inputView}>
        <TextInput
          ref={ref => (textInputRef = ref)}
          style={styles.textInput}
          placeholder={strings.chat.placeHolder}
          onChangeText={text => setMessage(text)}
        />
        <TouchableOpacity
          onPress={() =>
            launchCamera(options, response =>
              setMessages(messages => [
                ...messages,
                {
                  reciver: message,
                  sender: strings.chat.recivedMessage,
                  imageSent: response.assets,
                },
              ]),
            )
          }>
          <Image source={images.camera} style={styles.inputImg} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            launchImageLibrary(options, response =>
              setMessages(messages => [
                ...messages,
                {
                  reciver: message,
                  sender: strings.chat.recivedMessage,
                  imageSent: response.assets,
                },
              ]),
            )
          }>
          <Image source={images.attachment} style={styles.inputImg} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => (
            setMessages(messages => [
              ...messages,
              {
                reciver: message,
                sender: strings.chat.recivedMessage,
                imageSent: strings.chat.empty,
              },
            ]),
            textInputRef.clear()
          )}>
          <LinearGradient
            style={styles.sendGradient}
            colors={grad.grad.colors}
            locations={grad.grad.locations}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}>
            <Text style={styles.sendText}>{strings.chat.sendButton}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatBox;

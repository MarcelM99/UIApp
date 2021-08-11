import React from 'react';
import {View,Text,TouchableOpacity , ImageBackground ,Image} from 'react-native';
import images from '../theme/images';
import styles from './styles/loginMethodsStyles';
const LoginMethods = ({text}) => {

    return (
        <View style={styles.backgroundView}>
          <Text>{text}</Text>
          <View style={styles.imagesView}>
              <TouchableOpacity>
              <Image source={images.facebook}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.twitterButton}>
              <ImageBackground style={styles.twitterBackground}  source={images.twitter_circle}>
                  <Image source={images.twitter}/>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity>
              <ImageBackground style={styles.twitterBackground}  source={images.google_circle}>
                  <Image source={images.google}/>
                </ImageBackground>
              </TouchableOpacity>
           
           
          </View>
      </View>
    );
}

export default LoginMethods;
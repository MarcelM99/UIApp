import React from 'react';
import { TouchableOpacity , Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import grad from '../components/ColorEaseing';
import styles from './styles/customButtonStyles';
const CustomButton = ({text,navTo,screenName}) => {
    return (
        <TouchableOpacity style={styles.buttonView}
        onPress={() => navTo(screenName)}>
        <LinearGradient
            style={styles.insideGradient}
          colors={grad.grad.colors}
          locations={grad.grad.locations}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}>
          <Text style={styles.buttonText}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    ); 
}

export default CustomButton;
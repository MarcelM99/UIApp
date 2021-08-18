import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
const styles = StyleSheet.create({
    background: {flex: 1, backgroundColor: colors.bridal_heath},
    imageView: {alignItems: 'center', marginTop: 30},
    gradientView: {
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 10,
      marginHorizontal: 80,
    },
    gradientText: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    bottomTextView: {marginHorizontal: 83},
    bottomText: {textAlign: 'center'},
  });

  export default styles;
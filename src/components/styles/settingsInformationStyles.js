import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    background: {marginLeft: 44, marginBottom: 28},
    titleText: {color: colors.dove_grey, marginBottom: 15},
    topBottomView: {
      marginRight: 44,
      height: 42,
      borderWidth: 1,
      borderColor: colors.alto,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    middleView: {
      marginRight: 44,
      height: 42,
      borderWidth: 1,
      borderColor: colors.alto,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    inputTextView: {flex: 1, marginLeft: 22},
    inputText: {fontSize: 12, color: colors.silver_chalice},
    inputView: {flex: 1, alignItems: 'center'},
    textInput: {flex: 1, fontSize: 12, color:colors.silver_chalice},
  });

  export default styles;
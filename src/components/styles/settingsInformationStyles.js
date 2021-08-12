import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {marginLeft: 44, marginBottom: 28},
    titleText: {color: '#626262', marginBottom: 15},
    topBottomView: {
      marginRight: 44,
      height: 42,
      borderWidth: 1,
      borderColor: '#D1D1D1',
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    middleView: {
      marginRight: 44,
      height: 42,
      borderWidth: 1,
      borderColor: '#D1D1D1',
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    inputTextView: {flex: 1, marginLeft: 22},
    inputText: {fontSize: 12, color: '#A6A6A6'},
    inputView: {flex: 1, alignItems: 'center'},
    textInput: {flex: 1, fontSize: 12, color: '#A6A6A6'},
  });

  export default styles;
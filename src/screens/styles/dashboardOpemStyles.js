import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{flex: 1},
    titleView:{marginLeft: 28, marginTop: 28, marginBottom: 20},
    titleText:{fontSize: 16},
    subtitleView:{alignItems: 'center', marginHorizontal: 70, marginTop: 20},
    subtitleText:{textAlign: 'center', fontSize: 10},
    oneOptionView:{
      height: 43,
      marginHorizontal: 46,
      borderWidth: 0.3,
      borderRadius: 5,
      marginTop: 20,
      marginBottom:40
    },
    textInput:{flex: 1},
    multipleOptionsView:{marginHorizontal: 46},
    dropdownCard:{marginTop: 20, borderWidth: 0.3},
    dropdownCurrency:{marginVertical: 20, borderWidth: 0.3},
    dropdownValue:{marginBottom: 20, borderWidth: 0.3},
    buttonView:{marginBottom:40}
  })

  export default styles;
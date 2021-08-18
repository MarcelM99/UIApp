import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
const styles = StyleSheet.create({
    subtitleView:{
      marginHorizontal: 36,
      flexDirection: 'row',
      alignItems: 'center',
    },
    currencyText:{
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    subtitleText:{
      color: colors.white,
      textAlign: 'center',
      fontWeight: 'normal',
    }
  })

  export default styles
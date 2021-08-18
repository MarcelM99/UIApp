import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    valueView:{
      alignItems:'center',
    height:78,
    justifyContent:'center',
    paddingTop:18
  },
  valueViewWithErning:{
    alignItems:'center',
    height:50,
    justifyContent:'center',
  },
  valueText:{
    fontSize:24,
    color:colors.mine_shaft
  },
  valueTextWithEarnings:{
    fontSize:24,
    color:colors.dusty_grey
  },
  earningsView:{
    alignItems: 'center',
    height: '35%',
    justifyContent: 'center',
  },
  earningsText:{fontSize: 10, color: colors.bridal_heath}
})

export default styles
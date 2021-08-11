import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{flex: 1, backgroundColor: '#FFFBF7'},
    titleView:{marginLeft: 28, marginTop: 28},
    title:{fontSize: 16, color: '#626262'},
    topCircleView:{marginTop: 30},
    bottomCirclesView:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 40,
      marginTop: 30,
    },
    dashedView:{marginTop:56},
    subtitleView:{marginTop:40,marginHorizontal:28,marginBottom:20},
    subtitle:{color:'#626262',marginBottom:26}
  })

  export default styles;
import { StyleSheet } from "react-native";

const styles = (percentage,height,completedColor) => StyleSheet.create({
    background:{marginHorizontal:58,
      justifyContent:'center',
      marginTop:30
    },
    activeView:{
      height:height/2,
      backgroundColor:'grey',
      width:'100%',
      position:'absolute',
      borderRadius:5,
      opacity:0.3
    },
    inactiveView:{height:height,
      backgroundColor:completedColor,
      width:percentage,
      borderRadius:5
    }
  })

  export default styles;
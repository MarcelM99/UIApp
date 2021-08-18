import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    background:{flex: 1, backgroundColor: '#FFFBF7'},
    titleView:{marginLeft: 28, marginTop: 28},
    titleText:{fontSize: 16, color: '#626262'},
    gradientStyle:{
      alignItems: 'center',
      paddingVertical: 38,
      marginTop: 20,
      marginBottom: 38,
    },
    nameView:{marginTop: 10},
    nameText:{fontSize: 22, fontWeight: 'bold', color:'#FFFBF7' },
    valueView:{flexDirection: 'row',marginTop:4},
    valueImg:{marginRight: 10},
    valueText:{color: '#FFFBF7'},
    buttonView:{marginTop:14,backgroundColor:'#FFFBF7',paddingHorizontal:22,paddingVertical:6,borderRadius:5},
    tranzactionsView:{marginTop:40,marginHorizontal:28,marginBottom:20},
    tranzactionsTitleText:{color:'#626262',marginBottom:26}
  })

  export default styles;
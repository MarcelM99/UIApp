import { StyleSheet } from "react-native";

const styels=StyleSheet.create({
    background:{flex: 1, backgroundColor: '#FFFBF7'},
    scrollview:{flex: 1},
    messageView:{alignItems: 'flex-end', marginRight: 16, marginTop: 30},
    firstMessage: {alignItems: 'flex-end', marginRight: 16, marginTop: 50},
    gradient:{
      alignItems: 'flex-end',
      paddingHorizontal: 16,
      paddingVertical: 6,
      marginRight: 8,
      marginLeft: '50%',
      borderRadius: 5,
    },
    image:{height:150,width:200},
    messageText:{fontSize: 15, color: '#FFFBF7'},
    timeText:{fontSize: 12, fontStyle: 'italic', color: '#979797'},
    timeTextSender:{fontSize: 12, fontStyle: 'italic', color: '#979797',alignSelf:'flex-start',marginLeft:20},
    messageRecivedView:{
      alignSelf: 'flex-start',
      paddingHorizontal: 16,
      paddingVertical: 6,
      marginRight: '50%',
      borderRadius: 10,
      backgroundColor: '#333333',
      marginLeft:24
    },
    inputView:{
      marginHorizontal: 16,
      marginVertical: 8,
      backgroundColor: '#F4F4F4',
      flexDirection: 'row',
      alignItems: 'center',
    },
    textInput:{flex: 1},
    inputImg:{marginRight: 13},
    sendButton:{marginRight: 10},
    sendGradient:{paddingHorizontal: 12, paddingVertical: 6, borderRadius: 5},
    sendText:{color: 'white'},
    modalCloseButtonView:{backgroundColor: 'grey',alignItems:'flex-end',paddingRight:12,paddingVertical:12},
    modalImageView:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'grey',
    },
    modalImage:{width: '100%', height: '50%'}
  })

  export default styels;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {flexDirection: 'row',marginBottom:28},
    imageBackground: {
      height: 46,
      width: 46,
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainView: {flex: 1, marginLeft: 12},
    topView: {flexDirection: 'row'},
    nameView: {flex: 0.5},
    nameText: {fontSize: 14, color: '#979797'},
    valueView: {flex: 0.5, alignItems: 'flex-end'},
    valueText: {color: '#0FE133'},
    bottomView: {flexDirection: 'row', alignItems: 'flex-end', flex: 0.5},
    statusView: {flex: 0.5},
    activeStatus: {fontSize: 10, color: '#0FE133'},
    inactiveStatus: {fontSize: 10, color: '#EB3232'},
    dateView: {flex: 0.5, alignItems: 'flex-end'},
    dateText: {fontSize: 10, color: '#979797'},
  });


  export default styles;
import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

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
    nameText: {fontSize: 14, color: colors.dusty_grey},
    valueView: {flex: 0.5, alignItems: 'flex-end'},
    valueText: {color: colors.malachite},
    bottomView: {flexDirection: 'row', alignItems: 'flex-end', flex: 0.5},
    statusView: {flex: 0.5},
    activeStatus: {fontSize: 10, color: colors.malachite},
    inactiveStatus: {fontSize: 10, color: colors.alizarin_crimson},
    dateView: {flex: 0.5, alignItems: 'flex-end'},
    dateText: {fontSize: 10, color: colors.dusty_grey},
  });


  export default styles;
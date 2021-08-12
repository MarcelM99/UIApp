import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {flex: 1, backgroundColor: '#FFFBF7'},
    titleView: {marginTop: 28, marginLeft: 28},
    titleText: {color: '#626262', fontSize: 16},
    topGradient: {
      alignItems: 'center',
      paddingVertical: 38,
      marginTop: 20,
      marginBottom: 38,
    },
    billingView: {marginLeft: 44, marginRight: 80},
    billingTitleText: {color: '#626262', marginBottom: 14},
    billingGradient: {borderRadius: 10, marginBottom: 28},
    billingGradientInnerView: {
      alignItems: 'flex-end',
      marginTop: 14,
      marginRight: 16,
    },
    billingButton: {fontSize: 10, fontWeight: 'bold', color: '#FFFBF7'},
    detailsView: {marginLeft: 32, marginBottom: 18},
    nameInputText: {
      fontWeight: 'bold',
      height: 35,
      marginRight: 10,
      color: '#FFFBF7',
    },
    cardInputText: {height: 38, marginRight: 10, fontSize: 16},
    cardTypeText: {
      fontSize: 10,
      fontWeight: 'bold',
      color: '#FFFBF7',
      marginLeft: 4,
    },
    accountSettingsView: {marginHorizontal: 44},
    accountSettingsTitleText: {color: '#626262', marginBottom: 16},
    notificationsView: {
      borderWidth: 1,
      borderColor: '#D1D1D1',
      paddingVertical: 12,
      paddingLeft: 22,
      borderRadius: 5,
      flexDirection: 'row',
    },
    notificationsText: {fontSize: 12, color: '#A6A6A6'},
    notificationsButtonView: {flex: 1, alignItems: 'flex-end', marginRight: 14},
    emailView: {
      borderWidth: 1,
      borderColor: '#D1D1D1',
      paddingVertical: 12,
      paddingLeft: 22,
      borderRadius: 5,
      flexDirection: 'row',
      marginTop: 6,
    },
    emailText: {fontSize: 12, color: '#A6A6A6'},
    emailButton: {flex: 1, alignItems: 'flex-end', marginRight: 14},
  });

  export default styles;
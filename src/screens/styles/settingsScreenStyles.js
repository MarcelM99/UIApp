import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    background: {flex: 1, backgroundColor: colors.bridal_heath},
    titleView: {marginTop: 28, marginLeft: 28},
    titleText: {color: colors.dove_grey, fontSize: 16},
    topGradient: {
      alignItems: 'center',
      paddingVertical: 38,
      marginTop: 20,
      marginBottom: 38,
    },
    billingView: {marginLeft: 44, marginRight: 80},
    billingTitleText: {color: colors.dove_grey, marginBottom: 14},
    billingGradient: {borderRadius: 10, marginBottom: 28},
    billingGradientInnerView: {
      alignItems: 'flex-end',
      marginTop: 14,
      marginRight: 16,
    },
    billingButton: {fontSize: 10, fontWeight: 'bold', color:  colors.bridal_heath},
    detailsView: {marginLeft: 32, marginBottom: 18},
    nameInputText: {
      fontWeight: 'bold',
      height: 35,
      marginRight: 10,
      color:  colors.bridal_heath,
    },
    cardInputText: {height: 38, marginRight: 10, fontSize: 16},
    cardTypeText: {
      fontSize: 10,
      fontWeight: 'bold',
      color:  colors.bridal_heath,
      marginLeft: 4,
    },
    accountSettingsView: {marginHorizontal: 44},
    accountSettingsTitleText: {color: colors.dove_grey, marginBottom: 16},
    notificationsView: {
      borderWidth: 1,
      borderColor: colors.alto,
      paddingVertical: 12,
      paddingLeft: 22,
      borderRadius: 5,
      flexDirection: 'row',
    },
    notificationsText: {fontSize: 12, color: colors.silver_chalice},
    notificationsButtonView: {flex: 1, alignItems: 'flex-end', marginRight: 14},
    emailView: {
      borderWidth: 1,
      borderColor: colors.alto,
      paddingVertical: 12,
      paddingLeft: 22,
      borderRadius: 5,
      flexDirection: 'row',
      marginTop: 6,
    },
    emailText: {fontSize: 12, color: colors.silver_chalice},
    emailButton: {flex: 1, alignItems: 'flex-end', marginRight: 14},
  });

  export default styles;
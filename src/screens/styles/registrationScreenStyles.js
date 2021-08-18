import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  background: {flex: 1, backgroundColor: colors.bridal_heath},
  resetPasswordView: {alignItems: 'center', marginTop: 10, marginBottom: 20},
  resetPasswordText: {fontSize: 11},
  registerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 55,
    alignItems: 'center',
  },
  registerButtonFirstText: {color: colors.bridal_heath},
  registerButtonSecondText: {color: colors.bridal_heath, fontWeight: 'bold'},
});

export default styles;

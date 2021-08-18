import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  background: {backgroundColor: colors.bridal_heath, flex: 1},
  buttonsView: {alignItems: 'center', borderBottomWidth: 0.3, marginTop: 20},
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  imageView: {flexDirection: 'row', marginTop: 10, marginBottom: 20},
  image: {marginRight: 6},
  buttons: {marginTop: 40, alignItems: 'center'},
  shutdownImg: {marginTop: 20},
});

export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  inputView: {
    height: 40,
    borderWidth: 0.5,
    marginVertical: 10,
    marginHorizontal: 60,
    borderRadius: 5,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {marginLeft: 16, flex: 1},
  inputImage: {marginRight: 10},
});

export default styles;

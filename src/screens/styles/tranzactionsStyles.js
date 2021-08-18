import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  background: {flex: 1, backgroundColor: colors.bridal_heath},
  titleView: {marginLeft: 28, marginTop: 28},
  title: {fontSize: 16, color: colors.dove_grey},
  topCircleView: {marginTop: 30},
  bottomCirclesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 30,
  },
  dashedView: {marginTop: 56},
  subtitleView: {marginTop: 40, marginHorizontal: 28, marginBottom: 20},
  subtitle: {color: colors.dove_grey, marginBottom: 26},
});

export default styles;

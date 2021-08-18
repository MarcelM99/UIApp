import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {widthPixel} from '../NormalizeComp';
const styles = StyleSheet.create({
  background: {height: 95},
  scrollView: {borderBottomWidth: 0.6},
  visibleView: {
    flexDirection: 'row',
    paddingLeft: 32,
    backgroundColor: colors.alabaster,
    paddingTop: 16,
  },
  navigationButton: {flexDirection: 'row'},
  textView: {paddingLeft: 5, paddingBottom: 16, width: widthPixel(210)},
  nameText: {fontWeight: 'bold', color: colors.dove_grey},
  lastmessageText: {fontSize: 12, color: colors.dusty_grey},
  timeView: {
    paddingBottom: 6,
    justifyContent: 'flex-end',
    width: widthPixel(150),
    alignItems: 'flex-end',
    paddingRight: 40,
  },
  timeText: {fontSize: 12, color: colors.dusty_grey, fontStyle: 'italic'},
  deleteMessageView: {height: '100%', width: 200, alignItems: 'center'},
});

export default styles;

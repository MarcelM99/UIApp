import {StyleSheet} from 'react-native';
import {widthPixel} from '../NormalizeComp';
 const styles = StyleSheet.create({
  background: {height: 95},
  scrollView: {borderBottomWidth: 0.6},
  visibleView: {
    flexDirection: 'row',
    paddingLeft: 32,
    backgroundColor: '#F8F8F8',
    paddingTop: 16,
  },
  navigationButton: {flexDirection: 'row'},
  textView: {paddingLeft: 5, paddingBottom: 16, width: widthPixel(210)},
  nameText: {fontWeight: 'bold', color: '#626262'},
  lastmessageText: {fontSize: 12, color: '#979797'},
  timeView: {
    paddingBottom: 6,
    justifyContent: 'flex-end',
    width: widthPixel(150),
    alignItems: 'flex-end',
    paddingRight: 40,
  },
  timeText: {fontSize: 12, color: '#979797', fontStyle: 'italic'},
  deleteMessageView: {height: '100%', width: 200, alignItems: 'center'},
});

export default styles
import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
const styels = StyleSheet.create({
  background: {flex: 1, backgroundColor: colors.bridal_heath},
  scrollview: {flex: 1},
  messageView: {alignItems: 'flex-end', marginRight: 16, marginTop: 30},
  firstMessage: {alignItems: 'flex-end', marginRight: 16, marginTop: 50},
  gradient: {
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginRight: 8,
    marginLeft: '50%',
    borderRadius: 5,
  },
  image: {height: 150, width: 200},
  messageText: {fontSize: 15, color: colors.bridal_heath},
  timeText: {fontSize: 12, fontStyle: 'italic', color: colors.dusty_grey},
  timeTextSender: {
    fontSize: 12,
    fontStyle: 'italic',
    color: colors.dusty_grey,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  messageRecivedView: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginRight: '50%',
    borderRadius: 10,
    backgroundColor: colors.mine_shaft,
    marginLeft: 24,
  },
  inputView: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: colors.wild_sand,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {flex: 1},
  inputImg: {marginRight: 13},
  sendButton: {marginRight: 10},
  sendGradient: {paddingHorizontal: 12, paddingVertical: 6, borderRadius: 5},
  sendText: {color: colors.white},
  modalCloseButtonView: {
    backgroundColor: colors.boulder,
    alignItems: 'flex-end',
    paddingRight: 12,
    paddingVertical: 12,
  },
  modalImageView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.boulder,
  },
  modalImage: {width: '100%', height: '50%'},
});

export default styels;


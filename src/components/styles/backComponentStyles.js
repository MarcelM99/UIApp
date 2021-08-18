import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.alabaster,
    borderBottomWidth: 0.2,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    marginLeft: 20,
  },
  backButtonText: {fontWeight: '700', fontSize: 15},
  circleView: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 20,
  },
});

export default styles;

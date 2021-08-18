import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  background: {backgroundColor: colors.bridal_heath, flex: 1},
  barLevelsView: {
    flexDirection: 'row',
    marginHorizontal: 58,
    marginTop: 10,
    marginBottom: 20,
  },
  emptyBarView: {flex: 1},
  mediumBarView: {flex: 1, alignItems: 'center'},
  fullBarView: {flex: 1, alignItems: 'flex-end'},
  barText: {fontSize: 10},
  bottomViewText: {marginTop: 12, marginBottom: 22, alignItems: 'center'},
  bottomText: {fontWeight: 'bold'},
});

export default styles;

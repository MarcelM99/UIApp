import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  background: {flex: 1, backgroundColor: colors.bridal_heath},
  titleView: {marginLeft: 28, marginTop: 28},
  titleText: {fontSize: 16, color: colors.dove_grey},
  linearGradient: {
    alignItems: 'center',
    paddingVertical: 38,
    marginTop: 20,
    marginBottom: 38,
  },
  nameView: {marginTop: 10},
  nameText: {fontSize: 22, fontWeight: 'bold', color: colors.bridal_heath},
  imageView: {flexDirection: 'row', marginTop: 4},
  image: {marginRight: 10},
  imageText: {color:colors.bridal_heath},
  editButton: {
    marginTop: 14,
    backgroundColor: colors.bridal_heath,
    paddingHorizontal: 22,
    paddingVertical: 6,
    borderRadius: 5,
  },
  tranzactionsView: {marginTop: 40, marginHorizontal: 28, marginBottom: 20},
  tranzactionsText: {color: colors.dove_grey, marginBottom: 26},
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F8F8F8',
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

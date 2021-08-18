import {StyleSheet} from 'react-native';
import {
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../components/NormalizeComp';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  background: {flex: 1},
  dotStyle: {alignItems: 'center', marginBottom: 30, marginHorizontal: 2},
  inactiveDot: {
    paddingLeft: 4,
    height: 10,
    paddingRight: 5,
    borderRadius: 20,
  },
  activeDot: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 2,
    height: 12,
    paddingRight: 2,
    borderRadius: 20,
  },
  activeDotMiddle: {
    height: 8,
    width: 8,
    backgroundColor: colors.white,
    borderRadius: 4,
  },
  skipButton: {
    alignItems: 'flex-end',
    marginTop: pixelSizeVertical(20),
    marginRight: pixelSizeHorizontal(20),
    marginBottom: pixelSizeVertical(40),
  },
  skipButtonText: {
    fontWeight: '700',
    color: colors.dusty_grey,
    fontSize: fontPixel(16),
  },
  blankSpace: {marginTop: pixelSizeVertical(60)},
  imageView: {
    height: '50%',
    marginBottom: pixelSizeVertical(20),
    alignItems: 'center',
  },
  image: {flex: 1},
  titleGradient: {
    fontWeight: 'bold',
    fontSize: fontPixel(28),
    textAlign: 'center',
    marginBottom: pixelSizeVertical(20),
    marginHorizontal: pixelSizeHorizontal(60),
  },
  titleText: {
    textAlign: 'center',
    fontSize: fontPixel(15),
    marginHorizontal: pixelSizeHorizontal(80),
    marginBottom: pixelSizeVertical(20),
  },
  continueButton: {marginHorizontal: pixelSizeHorizontal(50), borderRadius: 5},
  continueGradient: {
    alignItems: 'center',
    marginBottom: pixelSizeVertical(20),
    marginHorizontal: pixelSizeHorizontal(60),
    borderRadius: 5,
  },
  continueText: {
    marginVertical: pixelSizeHorizontal(8),
    fontSize: fontPixel(16),
    fontWeight: 'bold',
    color: colors.bridal_heath,
  },
});

export default styles;

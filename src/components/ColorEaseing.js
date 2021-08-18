import {Easing} from 'react-native';
import {easeGradient} from 'react-native-easing-gradient';
import colors from '../theme/colors';
import colors1 from '../theme/colors';

const grad = easeGradient({
  colorStops: {
    0: {
      color: colors1.tickle_pink,
    },
    1: {
      color: colors1.persian_blue,
    },
  },
  easing: Easing.ease,
});
const grad_inactive = easeGradient({
  colorStops: {
    0: {
      color: colors.black,
    },
    1: {
      color: colors.black,
    },
  },
  easing: Easing.ease,
});
export default {grad, grad_inactive};

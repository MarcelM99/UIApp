import {Dimensions} from 'react-native';
import {PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;
const norm = (size, based = 'width') => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const widthPixel = size => {
  return norm(size, 'width');
};

const heightPixel = size => {
  return norm(size, 'height');
};

const fontPixel = size => {
  return heightPixel(size);
};
const pixelSizeVertical = size => {
  return heightPixel(size);
};

const pixelSizeHorizontal = size => {
  return widthPixel(size);
};

export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
};

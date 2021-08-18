import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import grad from '../ColorEaseing';
import colors from '../../theme/colors';

export default class SwitchButton extends Component {
  static propTypes = {
    onValueChange: PropTypes.func,
  };

  static defaultProps = {
    onValueChange: () => null,
  };

  constructor() {
    super();

    this.state = {
      activeSwitch: 1,
      sbWidth: 100,
      sbHeight: 44,
      direction: 'ltr',
      offsetX: new Animated.Value(0),
    };

    this._switchDirection = this._switchDirection.bind(this);
  }

  _switchDirection(direction) {
    let dir = 'row';

    if (direction === 'rtl') {
      dir = 'row-reverse';
    } else {
      dir = 'row';
    }
    return dir;
  }

  _switchThump(direction) {
    const {onValueChange, disabled} = this.props;
    let dirsign = 1;
    if (direction === 'rtl') {
      dirsign = -1;
    } else {
      dirsign = 1;
    }

    if (this.state.activeSwitch === 1) {
      this.setState({activeSwitch: 2}, () =>
        onValueChange(this.state.activeSwitch),
      );

      Animated.timing(this.state.offsetX, {
        toValue: (this.props.switchWidth / 2) * dirsign,
        duration: this.props.switchSpeedChange || 100,
        useNativeDriver: true,
      }).start();
    } else {
      this.setState({activeSwitch: 1}, () =>
        onValueChange(this.state.activeSwitch),
      );
      Animated.timing(this.state.offsetX, {
        toValue: 0,
        duration: this.props.switchSpeedChange || 100,
        useNativeDriver: true,
      }).start();
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            this._switchThump(
              this.props.switchdirection || this.state.direction,
            );
          }}>
          <LinearGradient
            colors={
              this.state.activeSwitch != 1
                ? grad.grad.colors
                : [colors.silver, colors.silver]
            }
            locations={
              this.state.activeSwitch != 1 ? grad.grad.locations : [0, 1]
            }
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            style={[
              {
                width: this.props.switchWidth,
                height: this.props.switchHeight,
                borderRadius:
                  this.props.switchBorderRadius !== undefined
                    ? this.props.switchBorderRadius
                    : this.state.sbHeight / 2,
              },
            ]}>
            <View
              style={[
                {
                  flexDirection: this._switchDirection(
                    this.props.switchdirection || this.state.direction,
                  ),
                },
              ]}>
              <Animated.View
                style={{transform: [{translateX: this.state.offsetX}]}}>
                <View
                  style={[
                    switchStyles.wayBtnActive,
                    {
                      width: this.props.switchWidth / 2 + 1,
                      height: this.props.switchHeight,
                      borderRadius:
                        this.props.switchBorderRadius !== undefined
                          ? this.props.switchBorderRadius
                          : this.state.sbHeight / 2,
                      backgroundColor:
                        this.props.btnBackgroundColor || colors.bridal_heath,
                    },
                  ]}
                />
              </Animated.View>

              <View
                style={[
                  switchStyles.textPos,
                  {
                    width: this.props.switchWidth / 2,
                    height: this.props.switchHeight - 6,
                    left: 0,
                  },
                ]}></View>

              <View
                style={[
                  switchStyles.textPos,
                  {
                    width: this.props.switchWidth / 2,
                    height: this.props.switchHeight,
                    right: 0,
                  },
                ]}></View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        {this.props.children}
      </View>
    );
  }
}

const switchStyles = StyleSheet.create({
  textPos: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rtl: {
    flexDirection: 'row-reverse',
  },
  ltr: {
    flexDirection: 'row',
  },
  wayBtnActive: {
    borderWidth: 0.1,
  },
});

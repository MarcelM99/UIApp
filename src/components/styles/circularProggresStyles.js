import { StyleSheet } from "react-native";

export const dynamicStyles = props => {
    return StyleSheet.create({
      fromProps: {
        fontSize: props.fontSize ?? props.radius / 2,
        color: props.textColor
          ? props.textColor
          : props.textStyle && props.textStyle?.color
          ? props.textStyle?.color
          : props.activeStrokeColor,
      },
      input: {
        fontWeight: '900',
        textAlign: 'center',
      },
      imageView:{alignItems: 'center', paddingTop: 8},
      imageBackground:{
        width: 26,
        height: 26,
        alignItems: 'flex-end',
        paddingTop: 16,
      }
    })}
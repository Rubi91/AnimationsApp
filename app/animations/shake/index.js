import React, {Component} from 'react';
import {Animated, Easing} from 'react-native';

type PropsT = {
  doAnimation?: boolean,
  children: React.ReactNode,
};
class ShakeAnimation extends Component<PropsT> {
  _shake = new Animated.Value(0);

  static defaultProps = {
    doAnimation: false,
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.doAnimation && this.props.doAnimation) {
      this.requestShakeAnimation();
    }
  }

  requestShakeAnimation = () => {
    Animated.timing(this._shake, {
      toValue: 1,
      duration: 500,
      easing: Easing.in,
    }).start(() => {
      this._shake.setValue(0);
    });
  };

  render() {
    const animatedStyle = {
      transform: [
        {
          translateX: this._shake.interpolate({
            inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
            outputRange: [0, -6, 10, -16, 16, -10, 6, 0],
          }),
        },
      ],
    };

    return (
      <Animated.View style={animatedStyle}>{this.props.children}</Animated.View>
    );
  }
}

export default ShakeAnimation;

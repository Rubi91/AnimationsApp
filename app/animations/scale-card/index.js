import * as React from 'react'
import { Animated, TouchableWithoutFeedback, Easing } from 'react-native'

type PropsT = {
  children: React.Node
}

const ScaleCard = ({ children }: PropsT) => {
  const animationTime = 100
  const scale = new Animated.Value(1)

  const onTouchAnimationIn = () =>
    Animated.timing(scale, {
      toValue: 0.97,
      useNativeDriver: false,
      duration: animationTime,
      easing: Easing.in(Easing.linear)
    }).start()

  const onTouchAnimationOut = () =>
    Animated.timing(scale, {
      toValue: 1,
      duration: animationTime,
      easing: Easing.out(Easing.linear)
    }).start()

  return (
    <TouchableWithoutFeedback
      onPressIn={onTouchAnimationIn}
      onPressOut={onTouchAnimationOut}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default ScaleCard

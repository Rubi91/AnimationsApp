import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './index.styles'

type PropsT = {
  text: string,
  color?: string,
  onPress: Function
}

const Button = (props: PropsT) => {
  const backgroundColor = props.color
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default Button

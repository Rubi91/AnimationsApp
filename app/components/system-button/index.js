import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './index.styles'

type PropsT = {
  text: string,
  style?: Object,
  onPress?: Function
}

const SystemButton = ({ text, onPress, style }: PropsT) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
)

SystemButton.defaultProps = {
  style: {},
  onPress: () => {}
}

export default SystemButton

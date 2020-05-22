import React from 'react'
import { View } from 'react-native'
import styles from './index.styles'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import Color from '../../styles/colors'

type PropsT = {
  style?: ViewStyleProp,
  backgroundColor: string
}

const Card = ({ backgroundColor, style }: PropsT) => (
  <View style={[styles.container, { backgroundColor }, style]} />
)

Card.defaultProps = {
  style: {},
  backgroundColor: Color.SUNDOWN
}

export default Card

import * as React from 'react'
import { View } from 'react-native'
import screenStyle from '../../styles/screen'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'

type PropsT = {
  style: ViewStyleProp,
  children: React.Node
}

const Container = ({ children, style }: PropsT) => (
  <View style={[screenStyle, style]}>{children}</View>
)

Container.defaultProps = {
  style: {}
}

export default Container

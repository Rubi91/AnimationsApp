import { StyleSheet, Platform } from 'react-native'
import { wp } from '../../utilities/viewport'
import Colors from '../../styles/colors'

const borderRadius = Platform.select({
  ios: 8,
  android: 4
})

const styles = StyleSheet.create({
  container: {
    width: wp(70),
    borderRadius,
    marginTop: 10,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: { color: Colors.SMOKY }
})

export default styles

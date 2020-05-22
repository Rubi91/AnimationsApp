import { StyleSheet } from 'react-native'
import Color from '../../styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center'
  },
  text: { fontSize: 30 },
  square: {
    width: 50,
    height: 50,
    margin: 20,
    alignSelf: 'center',
    backgroundColor: Color.SUNDOWN
  }
})

export default styles

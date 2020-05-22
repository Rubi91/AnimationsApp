import { StyleSheet } from 'react-native'
import { hp, wp } from '../../utilities/viewport'
import OS from '../../utilities/platform'

const styles = StyleSheet.create({
  container: {
    width: wp(30),
    height: hp(20),
    borderRadius: OS(8, 4)
  }
})

export default styles

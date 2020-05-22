import { Text, View } from 'react-native'
import * as React from 'react'
import SystemButton from '../../components/system-button'
import ShakeAnimation from '../../animations/shake'
import styles from './index.styles'

const Shake = () => {
  const [doAnimation, setDoAnimation] = React.useState(false)

  const handleAnimation = () => {
    setDoAnimation(true)
    setTimeout(() => setDoAnimation(false), 1000)
  }
  return (
    <View style={styles.container}>
      <SystemButton
        text={'Start'}
        onPress={() => handleAnimation()}
        style={{ margin: 20 }}
      />

      <ShakeAnimation doAnimation={doAnimation}>
        <Text style={styles.text}>0.02815871 BTC</Text>
        <View style={styles.square} />
      </ShakeAnimation>
    </View>
  )
}

export default Shake

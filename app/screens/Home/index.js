import * as React from 'react'
import Button from '../../components/button'
import Colors from '../../styles/colors'
import { useNavigation } from '@react-navigation/native'
import Container from '../../components/container'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <Button
        text={'Shake'}
        color={Colors.MAUVE}
        onPress={() => navigation.navigate('Shake')}
      />
      <Button
        text={'Scale Card'}
        color={Colors.SUNDOWN}
        onPress={() => navigation.navigate('Scale')}
      />
      <Button
        text={'Opacity'}
        color={Colors.SKY}
        onPress={() => navigation.navigate('Opacity')}
      />
    </Container>
  )
}

export default HomeScreen

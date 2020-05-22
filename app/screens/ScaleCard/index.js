import React from 'react'
import { Text } from 'react-native'
import Card from '../../components/card'
import screenStyle from '../../styles/screen'
import ScaleCard from '../../animations/scale-card'
import Color from '../../styles/colors'
import { wp } from '../../utilities/viewport'
import Container from '../../components/container'

const ScaleCardScreen = () => {
  return (
    <Container style={[screenStyle, { justifyContent: 'space-between' }]}>
      <Text>Press on a card</Text>
      <ScaleCard>
        <Card backgroundColor={Color.MAUVE} />
      </ScaleCard>

      <ScaleCard>
        <Card backgroundColor={Color.SKY} style={{ width: wp(80) }} />
      </ScaleCard>

      <ScaleCard>
        <Card backgroundColor={Color.QUARTZ} style={{ width: wp(60) }} />
      </ScaleCard>

      <ScaleCard>
        <Card backgroundColor={Color.SUNDOWN} style={{ width: wp(30) }} />
      </ScaleCard>
    </Container>
  )
}

export default ScaleCardScreen

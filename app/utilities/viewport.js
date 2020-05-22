// @flow
import { Dimensions, Platform } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
)

export const wp = (percentage: number) => {
  const value = (percentage * viewportWidth) / 100

  return Math.round(value)
}

export const hp = (percentage: number) => {
  const value = (percentage * viewportHeight) / 100

  return Math.round(value)
}

export const DEVICE_SPACING = Platform.select({
  ios: 15,
  android: 16
})

export const DEVICE_BOTTOM_SPACE = Platform.select({
  ios: getBottomSpace() + 11,
  android: 16
})

import { Platform } from 'react-native'

const OS = (ios: any, android: any) => Platform.select({ ios, android })

export default OS

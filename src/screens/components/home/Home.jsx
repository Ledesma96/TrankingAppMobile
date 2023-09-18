import React from 'react'
import InfoHome from './infoHome/InfoHome'
import { View } from 'react-native'
import styles from './home.styles'

const Home = () => {
  return (
    <View style={styles.container}>
        <InfoHome></InfoHome>
    </View>
  )
}
export default Home
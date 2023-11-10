import React from 'react'
import { View } from 'react-native'
import styles from './home.styles'
import { InfoHome, Tasks } from './components/index.js'



const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <InfoHome navigation={navigation}></InfoHome>
        <Tasks></Tasks>
    </View>
  )
}
export default Home
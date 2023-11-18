import React from 'react'
import { View } from 'react-native'
import styles from './home.styles'
import * as Animatable from 'react-native-animatable';
import { InfoHome, Tasks } from './components/index.js'



const Home = ({navigation}) => {
  return (
    <Animatable.View animation="zoomIn" duration={800} style={styles.container}>
        <InfoHome navigation={navigation}></InfoHome>
        <Tasks></Tasks>
    </Animatable.View>
  )
}
export default Home
import {TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo, AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import styles from './header.styles';

const Header = ({setView,view}) => {
    const handleClick = (text) => {
        setView(text)
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => handleClick("home")}>
            <AntDesign style={styles.icons} name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick("conductores")}>
            <Ionicons style={styles.icons} name="cube-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
            <Entypo style={styles.icons} name="map" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
            <Feather style={styles.icons} name="menu" size={30} color="black" />
        </TouchableOpacity>
    </View>
  )
}

export default Header
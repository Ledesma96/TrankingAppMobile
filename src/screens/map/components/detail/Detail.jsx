import { View, Text } from 'react-native'
import React from 'react'
import styles from './detail.styles';
import * as Animatable from 'react-native-animatable';
import { FontAwesome5, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const Detail = ({driver, detailVisible}) => {
    console.log(driver);
  return (
    <Animatable.View animation={detailVisible ? "fadeInUpBig" : "fadeOutDownBig"} duration={300} style={styles.conteiner}>
      <View style={styles.line}></View>
      <FontAwesome5 name="car-alt" size={40} color="black" />
      <View style={styles.conteinerVel}>
        <Text style={styles.conteinerVelTitle}>Velocidad:</Text>
        <Text style={styles.conteinerVelText}>56 km/h</Text>
      </View>
      <View style={styles.conteinerVel}>
        <Text style={styles.conteinerVelTitle}>Última actualizacion:</Text>
        <Text style={styles.conteinerVelText}>1 min.</Text>
      </View>
      <View style={styles.conteinerPackage}>
        <Text style={styles.conteinerPackageTitle}>Retiro:</Text>
        <View style={styles.conteinerPackageView}>
          <MaterialCommunityIcons name="clock-time-four-outline" size={24} color="black" />
          <Text style={styles.conteinerPackageViewText}>19-11-2023</Text>
          <Text style={styles.conteinerPackageViewText}>8:30</Text>
        </View>
        <View style={styles.conteinerPackageView}>
          <Ionicons name="md-location-outline" size={24} color="black" />
          <Text style={styles.conteinerPackageViewText}>19-11-2023</Text>
          <Text style={styles.conteinerPackageViewText}>CABA</Text>
        </View>
      </View>
      <View style={styles.conteinerPackage}>
        <Text style={styles.conteinerPackageTitle}>Entrega:</Text>
        <View style={styles.conteinerPackageView}>
          <MaterialCommunityIcons name="clock-time-four-outline" size={24} color="black" />
          <Text style={styles.conteinerPackageViewText}>19-11-2023</Text>
          <Text style={styles.conteinerPackageViewText}>6:30</Text>
        </View>
        <View style={styles.conteinerPackageView}>
          <Ionicons name="md-location-outline" size={24} color="black" />
          <Text style={styles.conteinerPackageViewText}>19-11-2023</Text>
          <Text style={styles.conteinerPackageViewText}>CABA</Text>
        </View>
      </View>
    </Animatable.View>
  )
}

export default Detail
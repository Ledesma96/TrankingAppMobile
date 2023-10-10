import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { Card } from '../../../components/index.js';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import styles from './infoHome.styles.js';
import logisticsDrivers from '../../../data/logistics.drivers.js';

const InfoHome = ({navigation}) => {
    const driverServices = logisticsDrivers.filter(driver => driver.services === true);
  return (
    <View style={styles.container}>
    <Card style={styles.card}>
        <View style={styles.cardContainer}>
            <Ionicons style={styles.icons} name="ios-car-sport-outline" size={49} color="black" />
            <Text>Vehiculos</Text>
        </View>
        <View style={styles.cardContainer}>
            <Text style={styles.count}>22</Text>
            <Text>Total</Text>
        </View>
        <View style={styles.cardContainer}>
            <Text style={styles.count}>7</Text>
            <Text>Conduciendo</Text>
        </View>
    </Card>
    <Pressable style={styles.card} onPress={() => navigation.navigate("Driveers")}>
    <Card style={styles.card}>
        <View style={styles.cardContainer}>
            <FontAwesome5 style={styles.icons}  name="user" size={40} color="black" />
            <Text>Conductores</Text>
        </View>
        <View style={styles.cardContainer}>
            <Text style={styles.count}>{logisticsDrivers.length}</Text>
            <Text>Total</Text>
        </View>
        <View style={styles.cardContainer}>
            <Text style={styles.count}>{driverServices.length}</Text>
            <Text>Conduciendo</Text>
        </View>
    </Card>
    </Pressable>
    </View>
    
  )
}

export default InfoHome


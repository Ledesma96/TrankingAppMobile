import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { Card } from '../../../components/index.js';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import styles from './infoHome.styles.js';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';


const InfoHome = ({navigation}) => {
    const {localId} = useSelector(state => state.user)
    const [data, setData] = useState([]);
    const [inServices, setInServices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://192.168.1.45:8080/api/adminuser/${localId}`);
            const driversData = await response.data.data.drivers;
            setData(driversData);
            const driversInServices = await driversData.filter(driver => driver.dId.service === true);
            setInServices(driversInServices);
          } catch (error) {
            console.error('Error al obtener datos:', error);
          }
        };
    
        fetchData();
      }, []);
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
            <Text style={styles.count}>{data.length}</Text>
            <Text>Total</Text>
        </View>
        <View style={styles.cardContainer}>
            <Text style={styles.count}>{inServices.length}</Text>
            <Text>Conduciendo</Text>
        </View>
    </Card>
    </Pressable>
    </View>
    
  )
}

export default InfoHome


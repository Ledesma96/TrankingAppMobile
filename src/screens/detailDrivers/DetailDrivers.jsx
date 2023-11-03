import React from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import styles from "./detailDriver.styles";
import Progress from "./components/Progress";
import { Feather } from '@expo/vector-icons';
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { RefreshContext } from "../../context/RefreshdataContext";

const DetailDrivers = ({ route}) => {
  const navigation = useNavigation()
  const [refresh, setRefresh] = useContext(RefreshContext);
  const driver = route.params.id
  const {localId} = useSelector(state => state.user)

  const deleteDriver = async() => {
    try {
      const result = await axios.delete(`http://192.168.1.45:8080/api/adminuser/${localId}/delete/${driver._id}`)
      if(result.data.success){
        navigation.navigate('Driveers')
        setRefresh(refresh + 1)
        console.log('Conductor dado de baja con exito');
      } else {
        console.log('Ah ocurrido un error al eliminar este conductor');
      }
    } catch (error) {
        console.log('Ah ocurrido un error inesperado', error.message);
    }
  }
 
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerNameAndPhone}>
        <View style={styles.containerName}>
          <Text style={styles.containerViewTitle}>Conductor</Text>
          <Text style={styles.containerViewSubTitle}>
            {driver?.name_driver} {driver?.last_name_driver}
          </Text>
        </View>
        <View style={styles.containerPhone}>
          <Feather style={styles.iconPhone} name="phone-call" size={26} color="black" />
          <Text style={styles.number}>{driver?.phone}</Text>
        </View>
      </View>
      
      <View style={styles.containerView}>
        <Text style={styles.containerViewTitle}>Vehiculo:</Text>
        <Text style={styles.containerViewSubTitle}>Peugeot Partner</Text>
      </View>
      <View style={styles.containerViewImg}>
        <View style={styles.containerImg}>
          <Image width={350} height={250} source={{ uri: 'https://www.lavanguardia.com/files/image_948_465/uploads/2015/08/28/5fa28157b6339.jpeg' }} />
        </View>
      </View>
      <Progress></Progress>
      <View style={styles.bajaContainer}>
        <Pressable style={styles.bajaPrssable} onPress={() => deleteDriver()}>
          <Text style={styles.bajaText}>Dar de baja</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default DetailDrivers;

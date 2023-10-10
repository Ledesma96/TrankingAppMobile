import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import styles from "./detailDriver.styles";
import Progress from "./components/Progress";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const DetailDrivers = ({ route }) => {
  const { id } = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://hermespq-f1c3b-default-rtdb.firebaseio.com/drivers.json");
        setData(response.data);
      } catch (error) {
        console.log("Error fetching data");
      }
    };
    fetchData();
  }, []);

  const driver = data?.find((item) => item.id === id);
  console.log(driver?.image);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerView}>
        <Text style={styles.containerViewTitle}>Conductor</Text>
        <Text style={styles.containerViewSubTitle}>
          {driver?.name_driver} {driver?.last_name_driver}
        </Text>
      </View>
      <View style={styles.containerView}>
        <Text style={styles.containerViewTitle}>Vehiculo:</Text>
        <Text style={styles.containerViewSubTitle}>Peugeot Partner</Text>
      </View>
      <View style={styles.containerViewImg}>
        <View style={styles.containerImg}>
          <Image width={350} height={250} source={{ uri: driver?.location }} />
        </View>
      </View>
      <Progress></Progress>
    </ScrollView>
  );
};

export default DetailDrivers;

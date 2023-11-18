import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { Image, TouchableWithoutFeedback } from 'react-native';
import {Detail} from './components/index.js';

const Map = () => {
  const [detailVisible, setDetailVisible] = useState(false)
  const [selectedDriver, setSelectedDriver] = useState(null)
  const { localId } = useSelector((state) => state.user);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://hermespq-production.up.railway.app/api/adminuser/${localId}`);
        const driversData = response.data.data.drivers.filter((driver) => driver.dId.service);
        setData(driversData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [localId]);

  const initialRegion = {
    latitude: -34.6037,
    longitude: -58.3816,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleMarkerPress = (driver) => {
    setSelectedDriver(driver);
    setDetailVisible(true)
  }

  const handleCloseDetail = () => {
    setDetailVisible(false);
  };

  return (
    <TouchableWithoutFeedback onPress={handleCloseDetail}>
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} initialRegion={initialRegion}>
        {data?.map((driver) => (
          <Marker
            key={driver._id}
            coordinate={{
              latitude: parseFloat(driver.dId.real_time?.latitude) || 0,
              longitude: parseFloat(driver.dId.real_time?.longitude) || 0,
            }}
            title={driver.dId.name_driver}
            onPress={() => handleMarkerPress(driver)}
          >
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2554/2554896.png' }}
              style={{ height: 35, width: 35 }}
            />
          </Marker>
        ))}
      </MapView>
        {detailVisible && <Detail driver={selectedDriver}
                                  detailVisible={detailVisible}
                          ></Detail>}
    </View>
    </TouchableWithoutFeedback>
  );
  
};

export default Map;

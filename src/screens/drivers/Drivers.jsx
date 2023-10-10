import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, InputSearch } from '../../components/index';
import { View } from 'react-native';
import styles from './divers.styles';

const Conductores = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hermespq-f1c3b-default-rtdb.firebaseio.com/drivers.json');
        const driversData = response.data;
        setData(driversData);
        setOriginalData(driversData);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchText) => {
    const filteredDrivers = originalData.filter((driver) =>
      driver.last_name_driver.toLowerCase().includes(searchText.toLowerCase())
    );
    setData(filteredDrivers);
  };

  return (
    <View style={styles.container}>
      <InputSearch setItemsList={handleSearch} />
      <List data={data} navigation={navigation} />
    </View>
  );
};

export default Conductores;

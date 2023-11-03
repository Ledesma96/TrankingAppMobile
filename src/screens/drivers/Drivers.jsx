import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, InputSearch, Modal } from '../../components/index';
import { Pressable, Text, View } from 'react-native';
import styles from './divers.styles';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { RefreshContext } from '../../context/RefreshdataContext';

const Conductores = ({ navigation }) => {
  const [refresh] = useContext(RefreshContext)
  const {localId} = useSelector(state => state.user)
  const [add, setAdd] = useState(false)
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://192.168.1.45:8080/api/adminuser/${localId}`);
        const driversData = await response.data.data.drivers;
        driversData.sort((a, b) => {
          if (a.dId.service === true && b.dId.service === false) {
            return -1;
          } 
          return 0;
        });
        setData(driversData);
        setOriginalData(driversData);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, [add, refresh]);

  const handleSearch = (searchText) => {
    const filteredDrivers = originalData.filter((driver) => {
      const { dId } = driver;
      const isNameMatch = dId.name_driver.toLowerCase().includes(searchText.toLowerCase());
      const isLastNameMatch = dId.last_name_driver.toLowerCase().includes(searchText.toLowerCase());
      return isNameMatch || isLastNameMatch;
    });
    setData(filteredDrivers);
  };
  
  

  return (
    <View style={styles.container}>
      <InputSearch setItemsList={handleSearch} />
      <Text style={styles.title}>Conductores</Text>
      <List data={data} navigation={navigation} />
      <Pressable style={styles.btn} onPress={() => setAdd(true)}>
        <Text style={styles.text}>Agregar conductor</Text>
      </Pressable>
      {add && <Modal setAdd={setAdd}
                     add={add}
                     data={data}>
              </Modal>}
    </View>
  );
};

export default Conductores;

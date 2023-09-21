import React, { useState } from 'react'
import drivers from "../../data/logistics.drivers"
import { List, InputSearch } from '../../components/index'
import { View } from 'react-native'
import styles from './divers.styles'

const Conductores = () => {
  const [data, setData] = useState(drivers)
  
  const handleSearch = (searchText) => {
    const filteredDrivers = drivers.filter((driver) =>
      driver.last_name_driver.toLowerCase().includes(searchText.toLowerCase())
    );
    setData(filteredDrivers);
  };
  return (
    <View style={styles.container}>
      <InputSearch setItemsList={handleSearch}></InputSearch>
      <List data={data}/>
    </View>
    )
}

export default Conductores
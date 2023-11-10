import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './tasks.styles';

const Tasks = () => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.header}>
        <FontAwesome5 style={styles.icon} name="tasks" size={40} color="black" />
        <Text style={styles.task}>Tareas</Text>
      </View>
      <View style={styles.conteinerItems}>
        <View style={styles.items}>
          <Text style={styles.itemText}>Vencidas</Text>
          <View style={styles.itemContainerCount}>
            <Text style={styles.count}>2</Text>
          </View>
        </View>
        <View style={styles.items}>
          <Text style={styles.itemText}>Pendientes</Text>
          <View style={styles.itemContainerCount}>
            <Text style={styles.count}>9</Text>
          </View>
        </View>
        <View style={styles.items}>
          <Text style={styles.itemText}>Realizadas</Text>
          <View style={styles.itemContainerCount}>
            <Text style={styles.count}>1</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Tasks
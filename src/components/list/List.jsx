import { FlatList, Image, Pressable,Text, View} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import styles from './list.styles.js'
import Card from "../card/Card.jsx"

const List = ({data, navigation}) => {
    const renderItem = ({ item }) => (
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("DetailDriver", { id: item.dId })}
        >
          <Card style={styles.card}>
            <View style={styles.container}>
              <View style={styles.radius}>
                <Image style={styles.image} source={{ uri: item.dId.image_profile_driver }}></Image>
              </View>
              <View style={item.dId.service ? styles.circleOn : styles.circleOff}></View>
              <View style={styles.containerView}>
                <View style={styles.container_view}>
                  <Text style={styles.text}>{item.dId.name_driver}</Text>
                  <Text style={styles.text}>{item.dId.last_name_driver}</Text>
                </View>
                <Text style={styles.cityText}>{item.dId.city}</Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={32} color="black" />
            </View>
          </Card>
        </Pressable>
      );
      


  return (
    <FlatList
        style={styles.flastlist}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.dId._id}>
    </FlatList>
  )
}

export default List
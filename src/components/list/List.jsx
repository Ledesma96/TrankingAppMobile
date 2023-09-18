import { FlatList, Image, Pressable,Text, View} from 'react-native'
import React from 'react'
import styles from './list.styles.js'
import Card from "../card/Card.jsx"

const List = ({data}) => {
    const renderItem  = ({item}) => (
        <Pressable style={styles.pressable}>
            <Card style={styles.card}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{uri: item.image}}></Image>
                    <View style={styles.containerView}>
                        <View style={styles.container_view}>
                            <Text style={styles.text}>{item.name_driver}</Text>
                            <Text style={styles.text}>{item.last_name_driver}</Text>
                        </View>
                        <Text style={styles.cityText}>{item.city}</Text>
                    </View>
                </View>
            </Card>
        </Pressable>
    )


  return (
    <FlatList
        style={styles.flastlist}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}>
    </FlatList>
  )
}

export default List
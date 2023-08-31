import React,{useState} from 'react'
import { FlatList, View,TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Modal from './Modal'

const ListContainer = ({itemsList, setItemsList}) => {
    const [modalVisible, setModalVisible] = useState(false)

    const pressAdress = () =>{
        setModalVisible(true)
    }

    const renderList = ({ item, index }) => (
        <TouchableOpacity style={styles.touchable} onPress={pressAdress}>
            <Text style={styles.text}>{item?.value}</Text>
            <Ionicons name="ios-trash-sharp" size={24} color="black" />
        </TouchableOpacity>
    );

    const deleteItem = (index) => {
        const newItemList = itemsList;
        itemsList.splice(index, 1);
        setItemsList(newItemList);
        setModalVisible(false)
    }
  return (
    <>
    <View style={styles.cointainer}>
        <FlatList
        style={styles.flastlist}
        data={itemsList}
        renderItem={renderList}
        keyExtractor={item => item.id}>
        </FlatList>
    </View>
    <Modal modalVisible={modalVisible}
            deleteItem={deleteItem}
            setModalVisible={setModalVisible}></Modal>
    </>
  )
}

export default ListContainer

const styles = StyleSheet.create({
    cointainer:{
        width:"98%",
        justifyContent:"center",
        alignItems:"center",
    },
    flastlist:{
        width:"100%",
        marginTop:10
    },
    touchable:{
        width:"85%",
        padding:15,
        marginTop:15,
        borderRadius:10,
        alignItems:"center",
        backgroundColor:"#dcdcdc",
        flexDirection:"row",
        justifyContent: 'space-between',
        alignSelf:"center"
    }
})
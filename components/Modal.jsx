import React from 'react'
import { View, Modal as NewModal, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { BlurView } from 'expo-blur'

const Modal = ({modalVisible, deleteItem, setModalVisible}) => {
  return (
        <NewModal visible={modalVisible} animationType="slide" transparent={true}>
            <BlurView intensity={1}  style={styles.blurContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalMessage}>
                        <Text style={styles.modalMessageText}>Estas seguro de eliminar este elemento?</Text>
                    </View>
                    <View style={styles.modalContainerButton}>
                        <TouchableOpacity style={styles.modalButtonConfirm}>
                            <Text style={styles.modalButtonText} onPress={deleteItem}>Eliminar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButtonCancel}>
                            <Text style={styles.modalButtonText} onPress={() => setModalVisible(false)}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BlurView>
        </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
    blurContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    modalContent: {
        backgroundColor:"white",
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    modalMessage: {
        width:"80%",
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalMessageText:{
        textAlign:"center",
        fontSize: 20,
        fontWeight: "bold",
    },
    modalContainerButton:{
        flexDirection:"row-reverse"
    },
    modalButtonConfirm: {
        padding:10,
        width:100,
        borderRadius:10,
        margin: 15,
        backgroundColor:"green"
    },
    modalButtonCancel:{
        padding:10,
        width:100,
        borderRadius:10,
        margin:15,
        backgroundColor:"#FF4500"
    },
    modalButtonText:{
        color:"white",
        textAlign:"center",
        fontWeight:"bold"
    }
  })
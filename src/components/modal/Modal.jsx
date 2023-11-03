import React from "react";
import {
  View,
  Modal as NewModal,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { BlurView } from "expo-blur";
import styles from "./modal.styles";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Modal = ({ add, setAdd, data }) => {
  const {localId} = useSelector(state => state.user)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");

  const handleData = async () => {
    const newDriver = {
      name_driver: firstName,
      last_name_driver: lastName,
      email_driver: email,
      DNI_driver: dni,
      image_profile_driver:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqRPBOeet4nYclhDLrDZwF2w2kBObHgLVdg&usqp=CAU",
      service: false,
      city: "-----"
    };
    try {
      const response =  await axios.post(`http://192.168.1.45:8080/api/adminuser/${localId}`,
        newDriver
      );
      
      if (response.status === 201) {
        console.log("Datos enviados correctamente:", response.data.message);
        setAdd(false);
      } else {
        console.log(
          "Error al enviar datos. Estado de respuesta:",
          response.data.status
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <NewModal visible={add} animationType="slide" transparent={true}>
      <BlurView intensity={1} style={styles.blurContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalForm}>
            <TextInput style={styles.inputs} placeholder="Nombre" onChangeText={(text) => setFirstName(text)}></TextInput>
            <TextInput style={styles.inputs} placeholder="Apellido" onChangeText={(text) => setLastName(text)}></TextInput>
            <TextInput style={styles.inputs} placeholder="Email" onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput style={styles.inputs} placeholder="Dni" onChangeText={(text) => setDni(text)}></TextInput>
          </View>
          <View style={styles.modalContainerButton}>
            <TouchableOpacity style={styles.modalButtonConfirm}>
              <Text style={styles.modalButtonText} onPress={() => handleData()}>Agregar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButtonCancel}>
              <Text
                style={styles.modalButtonText}
                onPress={() => setAdd(false)}
              >
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </NewModal>
  );
};

export default Modal;

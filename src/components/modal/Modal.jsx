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

const Modal = ({ add, setAdd, data, setSuccesMessage, setErrorMessage }) => {
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
      const response =  await axios.post(`https://hermespq-production.up.railway.app/api/adminuser/${localId}`,
        newDriver
      );
      console.log(response.status);
      if (response.status === 201) {
        setAdd(false);
        setSuccesMessage(response.data.message);
        setTimeout(() => {
          setSuccesMessage(null)
        }, 3000)
      } else {
        setErrorMessage(response.data.status)
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
      }
    } catch (error) {
      setErrorMessage(error.message)
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    }
  };

  return (
    <NewModal visible={add} animationType="slide" transparent={true}>
      <BlurView intensity={1} style={styles.blurContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalForm}>
            <View style={styles.contentInput}>
              <View style={styles.contentBackground}>
                <Text style={styles.label}>Nombres</Text>
              </View>
              <TextInput style={styles.inputs} placeholder="Ingrese nombres" onChangeText={(text) => setFirstName(text)}></TextInput>
            </View>
            <View style={styles.contentInput}>
              <View style={styles.contentBackground}>
                <Text style={styles.label}>Apellido</Text>
              </View>
              <TextInput style={styles.inputs} placeholder="Ingrese Apellido" onChangeText={(text) => setLastName(text)}></TextInput>
            </View>
            <View style={styles.contentInput}>
              <View style={styles.contentBackground}>
                <Text style={styles.label}>Email</Text>
              </View>
              <TextInput style={styles.inputs} placeholder="Ingrese email" onChangeText={(text) => setEmail(text)}></TextInput>
            </View>
            <View style={styles.contentInput}>
              <View style={styles.contentBackground}>
                <Text style={styles.label}>Dni</Text>
              </View>
              <TextInput style={styles.inputs} placeholder="Ingrese dni" onChangeText={(text) => setDni(text)}></TextInput>
            </View>
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

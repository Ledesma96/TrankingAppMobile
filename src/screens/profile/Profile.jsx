import { View, Text, Image, Pressable, TextInput, Button } from "react-native";
import styles from "./profile.styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker"
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../../features/user/userSlice";
import axios from "axios";

const Profile = () => {
  const image = useSelector(state => state.user.imageCamera)
  const email = useSelector(state => state.user.user)
  const [newImage, setNewImage] = useState(true)
  const localId = useSelector(state => state.user.localId);
  const [company, setCompany] = useState("company");
  const [newCompany ,setNewCompany] = useState(company);
  const [changeConpany, setCgangeCompany] = useState(true);

  const dispatch = useDispatch()


  const verifyCameraPermissions = async() =>{
    const {granted} = await ImagePicker.requestCameraPermissionsAsync()
    if(!granted){
      return false
    }
    return true
  }

  const pickImage = async() => {
    const isCameraOk = await verifyCameraPermissions()

    if(isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.8
      })
      if(!result.canceled){
        dispatch(setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`))
        confirmImage(localId, image)
      }
    }
  }

  const confirmImage = async(localId, image) => {
    try {
      await axios.put(`https://hermespq-f1c3b-default-rtdb.firebaseio.com/usersImage/${localId}.json`, { photo: image });
      console.log('Imagen cargada con éxito en usersImage');
    } catch (error) {
      console.error('Error al cargar la imagen', error);
    }
  }

  const onChangeCompany = () => {
    setCgangeCompany(false)
  }

  const saveCompany = () => {
    setCompany(newCompany)
    setCgangeCompany(true)
  }

  const cancelCompany = () => {
    setCompany(company)
    setCgangeCompany(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          source={{
            uri:image ? image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqRPBOeet4nYclhDLrDZwF2w2kBObHgLVdg&usqp=CAU" ,
          }}
          style={styles.image}
        />
        
      </View>
      <Pressable style={styles.camera} onPress={() => pickImage()}>
        <Ionicons name="md-camera-reverse" size={40} color="white" />
      </Pressable>
      <View style={styles.containerInfo}>
        <View style={styles.containerInfoView}>
          <Text style={styles.title}>Email:</Text>
          <Text style={styles.info}>{email}</Text>
        </View>
        <View style={styles.containerInfoView}>
          <Text style={styles.title}>Compañía:</Text>
          {changeConpany ? (
            <>
              <Text style={styles.info}>{company}</Text>
              <AntDesign name="edit" size={24} color="black" onPress={() => onChangeCompany()} />
            </>
          ) : (
            <>
              <TextInput  style={styles.input}
                          value={newCompany}
                          onChangeText={(text) => setNewCompany(text)}>
              </TextInput>
              <MaterialCommunityIcons style={styles.icons} name="check-bold" size={24} color="black" onPress={() => saveCompany()} />
              <Foundation style={styles.icons} name="x" size={24} color="black" onPress={() => cancelCompany()}/>
            </>
          )}
        </View>
        <View style={styles.containerInfoView}>
          <Text></Text>
        </View>
        <View style={styles.containerInfoView}>
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

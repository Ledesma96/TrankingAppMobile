import { View, Text, Image, Pressable, TextInput } from "react-native";
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
import { logout } from "../../db";
import { logoutt } from "../../features/user/userSlice";

const Profile = () => {
  const email = useSelector(state => state.user.user)
  const {localId, name, last_name, dni, imageProfile} = useSelector(state => state.user);
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

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();
  
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
      });
  
      if(!result.canceled) {
        const localUri = result.assets[0].uri
        dispatch(
          setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        )
        confirmImage(localId, localUri);
      }
    }
  };
  
  const confirmImage = async (localId, imageBuffer) => {
    try {
      const formData = new FormData();
        formData.append('file', {
        uri: imageBuffer,
        type: 'image/jpeg',
        name: 'image.jpg',
      });
  
      const response = await axios.post(`http://192.168.1.45:8080/api/adminuser/update-admin/${localId}`, formData)
      .then((response) => {
        console.log('imagen cargada correctamente');
      })
      .catch((error) => {
        console.error('Error al cargar la imagen', error.message);
      });
    } catch (error) {
      console.error('Error al cargar la imagen', error);
      return null;
    }
  };
  

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

  const logOut = () => {
    logout()
      .then(() => {
        dispatch(logoutt())
        .then(()=> {
          console.log('exitoso');
          console.log('sesion cerrada');
        })
        .catch((error) => {
          console.log(error);
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          source={{
            uri:imageProfile ? imageProfile : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqRPBOeet4nYclhDLrDZwF2w2kBObHgLVdg&usqp=CAU" ,
          }}
          style={styles.image}
        />
      </View>
      <Pressable style={styles.camera} onPress={() => pickImage()}>
        <Ionicons name="md-camera-reverse" size={40} color="white" />
      </Pressable>
      <View style={styles.relevant}>
          <Text style={styles.nameAndId}>{name} {last_name}</Text>
          <Text style={styles.nameAndId}>Id: {localId}</Text>
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.containerInfoView}>
          <Text style={styles.title}>Email:</Text>
          <Text style={styles.info}>{email}</Text>
        </View>
        <View style={styles.containerInfoView}>
          <Text style={styles.title}>Dni:</Text>
          <Text style={styles.info}>{dni}</Text>
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
        <View style={styles.containerLogOut}>
          <Pressable style={styles.pessableLogOut}  onPress={() => logOut()}>
            <Text style={styles.textLogOut} >Cerrar sesion</Text>
          </Pressable>
        </View>
        <View style={styles.containerInfoView}>
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

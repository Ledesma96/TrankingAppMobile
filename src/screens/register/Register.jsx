import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./register.styles";
import axios from "axios";

const Register = ({ navigation }) => {
  const [visible, setVisible] = useState(true)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [emptyField, setEmptyField] = useState(false);

  const onHandleChangeItem = (field, text) => {
    switch (field) {
      case "name":
        setName(text.trim());
        break;
      case "lastName":
        setLastName(text.trim());
        break;
      case "confirmPassword":
        setConfirmPassword(text.trim());
        break;
      case "password":
        setPassword(text.trim());
        break;
      case "email":
        setEmail(text.trim());
        break;
      default:
        break;
    }
  };

  const addUser = async() => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      lastName === "" 
    ) {
      setEmptyField(true);
      return;
    }
    if (password !== confirmPassword) {
      setEmptyField(true);
      return;
    }
    const newUser = {
      name_owner: name,
      email_owner: email,
      password: password,
      last_name_owner: lastName,
    };
    try {
      const response = await axios.post(`http://192.168.1.45:8080/api/adminuser/register`, newUser);
      if (response.status == 201){
        navigation.navigate(`Login`)
      } else {
        console.log('error creating user');
      }
    } catch (error) {
      console.log(error.message);
    }
   
   
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInputs}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={name}
          onChangeText={(text) => onHandleChangeItem("name", text)}
          placeholderTextColor="rgba(31, 6, 143, 0.8)"
        ></TextInput>
        {emptyField ? <Text>Campo obligatorio</Text> : <></>}
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          value={lastName}
          onChangeText={(text) => onHandleChangeItem("lastName", text)}
          placeholderTextColor="rgba(31, 6, 143, 0.8)"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}onChangeText={(text) => onHandleChangeItem("email", text)}
          placeholderTextColor="rgba(31, 6, 143, 0.8)"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={visible}
          value={password}
          onChangeText={(text) => onHandleChangeItem("password", text)}
          placeholderTextColor="rgba(31, 6, 143, 0.8)"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Confirmar password"
          secureTextEntry={visible}
          value={confirmPassword}
          onChangeText={(text) => onHandleChangeItem("confirmPassword", text)}
          placeholderTextColor="rgba(31, 6, 143, 0.8)"
        ></TextInput>
      </View>
      <Pressable style={styles.passwordVisible} onPress={() => setVisible(!visible)}>
        {visible ? <Text style={styles.textVisible}>Mostrar contraseña</Text> : <Text style={styles.textVisible}>Ocultar contraseña</Text>}
      </Pressable>
      <Pressable style={styles.pessableRegister} onPress={() => addUser()}>
        <Text style={styles.textRegister}>Registrarse</Text>
      </Pressable>
      <Pressable
        style={styles.pressableLogin}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.textLogin}>¿Ya tienes cuenta?</Text>
        <Text style={styles.textLoginLogin}>Iniciar sesión</Text>
      </Pressable>
    </View>
  );
};

export default Register;

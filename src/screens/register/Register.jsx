import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./register.styles";
import axios from "axios";
import { API_KEY, AUTH_URL } from "../../firebase";

const Register = ({ navigation }) => {
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

  const addUser = () => {
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
      name: name,
      email: email,
      password: password,
      lastName: lastName,
    };
    console.log(newUser);
    axios.post(`${AUTH_URL}accounts:signUp?key=${API_KEY}`, newUser)
    .then((response) => {
      navigation.navigate("Login");
    })
    .catch ((error) => {
      console.log(error);
    })
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
          value={password}
          onChangeText={(text) => onHandleChangeItem("password", text)}
          placeholderTextColor="rgba(31, 6, 143, 0.8)"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Confirmar password"
          value={confirmPassword}
          onChangeText={(text) => onHandleChangeItem("confirmPassword", text)}
          placeholderTextColor="rgba(31, 6, 143, 0.8)"
        ></TextInput>
      </View>
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

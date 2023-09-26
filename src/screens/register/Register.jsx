import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./register.styles";
import {users} from "../../data/users.js";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [dni, setDni] = useState("");
  const [company, setCompany] = useState("");
  const [emptyField, setEmptyField] = useState(false);

  const onHandleChangeItem = (field, text) => {
    switch (field) {
      case "name":
        setName(text.trim());
        break;
      case "lastName":
        setLastName(text.trim());
        break;
      case "company":
        setCompany(text.trim());
        break;
      case "confirmPassword":
        setConfirmPassword(text.trim());
        break;
      case "dni":
        setDni(text.trim());
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
      lastName === "" ||
      dni === "" ||
      company === ""
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
      dni: dni,
      company: company,
    };
    const id = users.length > 0 ? users.length + 1 : 1;
    newUser.id = id;
    users.push(newUser);
    console.log(newUser);
    //navigation.navigate("Login");
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
          placeholder="DNI"
          value={dni}
          onChangeText={(text) => onHandleChangeItem("dni", text)}
          placeholderTextColor="rgba(31, 6, 143, 0.8)"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Compañía"
          value={company}
          onChangeText={(text) => onHandleChangeItem("company", text)}
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

import { View, TextInput, Pressable, Text } from "react-native";
import React, {useState} from "react";
import styles from "./login.styles";
import { useDispatch } from "react-redux";
import { users } from "../../data/users"
import { login } from "../../features/user/userSlice";

const Login = ({ navigation }) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleChangeItem = (field, text) => {
    switch (field) {
      case "email":
        setEmail(text);
        break;
      case "password":
        setPassword(text);
        break;
      default:
        break;
    }
  }

  const logIn = () => {
    const user = users.find(user => user.email === email && user.password === password)
    if(user){
      dispatch(login(user))
    } else {
      console.log("Email o contraseña equivocado")
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerInputs}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => onHandleChangeItem("email", text)}
          placeholderTextColor="rgba(31, 6, 143, 0.8)"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => onHandleChangeItem("password", text)}
          placeholderTextColor="rgba(31, 6, 143, 0.8)"
        ></TextInput>
      </View>
      <Pressable style={styles.placecholderLogin} onPress={() => logIn()}>
        <Text style={styles.textLogin}>Login</Text>
      </Pressable>
      <View>
        <Pressable
          style={styles.placecholderRegister}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.textRegister}>¿No tienes cuenta?</Text>
          <Text style={styles.textRegisterRegister}>Registrate</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

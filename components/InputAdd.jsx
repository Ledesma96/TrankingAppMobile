import { useState} from 'react'
import { BlurView } from 'expo-blur'
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    Modal,
  } from 'react-native'

const InputAdd = ({setItemsList}) => {
    const [inputText, setInputText] = useState("");
    const [inputEmpty, setInputEmpty] = useState(false)
    
    const onHandleChangeItem = text => setInputText(text)


    const addAdress = () => {
        if(inputText === ""){
            setInputEmpty(true)
            setTimeout(() => {
                setInputEmpty(false)
            }, 1000)
        } else {
            setItemsList(prevState => [
                ...prevState,
                {id: Math.random(), value: inputText}
            ])
            setInputText("")
            setInputEmpty(false)
        }
    }
  return (
    <>
    <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder='Add new adress'
        value={inputText}
        onChangeText={onHandleChangeItem}></TextInput>
        <Button title='Agregar' color={"#FF4500"} onPress={addAdress}></Button>
    </View>
   <Modal visible={inputEmpty} animationType="fade" transparent={true}>
        <BlurView intensity={1}  style={styles.blurContainer}>
            <View style={styles.modalContent}>
                <View style={styles.modalMessage}>
                    <Text style={styles.modalMessageText}>Por favor completa el campo</Text>
                </View>
            </View>
        </BlurView>
    </Modal>
    </>
  )
}

export default InputAdd

const styles = StyleSheet.create({
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
        shadowOffset: { width: 2, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    inputContainer: {
        marginTop:25,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
      },
    input: {
        width: 250,
        height: 50,
        marginRight:15,
        fontSize: 17,
        paddingLeft: 12,
        borderBottomWidth:1,
        borderColor:"#FF4500",
      }
})
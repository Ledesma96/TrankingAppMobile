import { useState} from 'react'
import styles from './inputSearch.styles'
import {Button, TextInput, View } from 'react-native'

const InputSearch = ({setItemsList}) => {
    const [inputText, setInputText] = useState("");

    const onHandleChangeItem = (text) => {
        setInputText(text.trim())
        setItemsList(text.trim())
    }
    
  return (
    <>
    <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder='Search...'
        value={inputText}
        onChangeText={onHandleChangeItem}></TextInput>
    </View>
    </>
  )
}

export default InputSearch

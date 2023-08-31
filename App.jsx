import { StyleSheet, View } from 'react-native';
import InputAdd from './components/InputAdd';
import ListContainer from './components/ListContainer.jsx';
import { useState } from 'react';

export default function App() {
  const [itemsList, setItemsList] = useState([])
  return (
    <View style={styles.container}>
      <InputAdd setItemsList={setItemsList}></InputAdd>
      <ListContainer  itemsList={itemsList}
                      setItemsList={setItemsList}></ListContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

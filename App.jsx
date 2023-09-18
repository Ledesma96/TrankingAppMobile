import { StyleSheet} from 'react-native';
import { useState } from 'react';
import {Home, Drivers} from './src/screens/components/index.js';
import {Header} from "./src/components/index.js"
import { useFonts } from 'expo-font';
import fonts from './src/global/fonts.js';

export default function App() {
  const [fontsLoaded] = useFonts(fonts)
  const [view, setView] = useState("home")
  if(!fontsLoaded){
    return null
  }

  switch(view){
    case "home":
    return <><Home></Home><Header view={view} setView={setView}></Header></>

    case "conductores" :
      return <><Drivers></Drivers><Header view={view} setView={setView}></Header></>
    default :
      return <><Home></Home><Header view={view} setView={setView}></Header></>
  }

}

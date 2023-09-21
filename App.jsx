import { useFonts } from 'expo-font';
import fonts from './src/global/fonts.js';
import HomeNavigator from './src/navigation/HomeNavigation';

export default function App() {
  const [fontsLoaded] = useFonts(fonts)
  if(!fontsLoaded){
    return null
  }

  return (
    <HomeNavigator />
  )
}

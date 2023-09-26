import HomeNavigator from "../HomeNavigation/HomeNavigation";
import DriversNavigator from "../Drivers/DriversNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./Botton.styles.js"
import colors from "../../constants/colors.js";
const BottomTab = createBottomTabNavigator()
import { Entypo, AntDesign, Feather,MaterialCommunityIcons } from '@expo/vector-icons';

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator 
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: colors.quinary,
      tabBarInactiveTintColor: colors.quaternary,
      tabBarStyle: styles.container,
    }}
    >
      <BottomTab.Screen name="Home" component={HomeNavigator} 
      options={{
        tabBarIcon: () => (
          <AntDesign style={styles.icons} name="home" size={30}  />
        )
      }}/>
      <BottomTab.Screen name="Drivers" component={DriversNavigator} 
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons style={styles.icons} name="steering" size={30} />
        )
      }}/>
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
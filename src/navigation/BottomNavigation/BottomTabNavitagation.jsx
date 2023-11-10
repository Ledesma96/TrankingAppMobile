import HomeNavigator from "../HomeNavigation/HomeNavigation";
import DriversNavigator from "../Drivers/DriversNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./Botton.styles.js"
import colors from "../../constants/colors.js";
const BottomTab = createBottomTabNavigator()
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Entypo, AntDesign, Feather,MaterialCommunityIcons } from '@expo/vector-icons';
import { Profile, Map } from "../../screens/index.js";

function BottomTabNavigator() {
  const navigation = useNavigation();
  return (
    <BottomTab.Navigator 
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: colors.quinary,
      tabBarInactiveTintColor: colors.quaternary,
      tabBarStyle: styles.container,
      headerRight: () => (
        <FontAwesome5
          name="user"
          size={24}
          color="black"
          style={{ marginRight: 16 }} 
          onPress={() => {
            navigation.navigate('Profile')
          }}          
        />
      ),
    }}
    >
      <BottomTab.Screen name="Home" component={HomeNavigator} 
      options={{
        tabBarIcon: () => (
          <AntDesign style={styles.icons} name="home" size={30}  />
        )
      }}/>
      <BottomTab.Screen name="Map" component={Map}
      options={{
        tabBarIcon: () => (
          <Entypo style={styles.icons} name="map" size={30} color="black" />
        )
      }}></BottomTab.Screen>
      <BottomTab.Screen name="Drivers" component={DriversNavigator} 
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons style={styles.icons} name="steering" size={30} />
        ),
        headerLeft : () => (
          <AntDesign name="arrowleft" size={30} color="black" style={styles.back} onPress={() => navigation.goBack()}  />
        )
      }}/>
      <BottomTab.Screen name="Profile" component={Profile}
      options={{
        tabBarIcon: () => (
          <FontAwesome5 style={styles.icons} name="user" size={30}/>
        ),
        headerLeft : () => (
          <AntDesign name="arrowleft" size={30} color="black" style={styles.back} onPress={() => navigation.goBack()}  />
        ),
        
      }} />
    </BottomTab.Navigator>
  );
}



export default BottomTabNavigator;
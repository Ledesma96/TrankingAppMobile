import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Drivers } from "../../screens/index.js";

const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Homeee" component={Home} />
      <Stack.Screen name="Drivers" component={Drivers} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailDrivers, Drivers } from "../../screens/index.js";

const Stack = createNativeStackNavigator();

function DriversNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Driveers"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Driveers" component={Drivers} />
      <Stack.Screen name="DetailDriver" component={DetailDrivers} />
    </Stack.Navigator>
  );
}

export default DriversNavigator;

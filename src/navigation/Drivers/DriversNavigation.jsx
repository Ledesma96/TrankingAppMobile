import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Drivers } from "../../screens/index.js";

const Stack = createNativeStackNavigator();

function DriversNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Drivers"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Driveers" component={Drivers} />
    </Stack.Navigator>
  );
}

export default DriversNavigator;

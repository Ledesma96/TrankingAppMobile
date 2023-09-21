import { NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {Home, Drivers} from "../screens/index.js"

const Stack = createNativeStackNavigator()

function HomeeNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Drivers" component={Drivers} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HomeeNavigator
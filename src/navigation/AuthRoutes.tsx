import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/Login/LoginScreen";

const Stack = createStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator id="auth-stack" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

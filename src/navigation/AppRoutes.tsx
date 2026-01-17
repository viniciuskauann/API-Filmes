import { createStackNavigator } from "@react-navigation/stack";
import { TabRoutes } from "../navigation/TabRoutes";
import { DetailsScreen } from "../screens/Detail/DetailScreen";

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Detalhes" }}
      />
    </Stack.Navigator>
  );
}

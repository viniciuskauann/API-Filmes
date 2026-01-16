import { createStackNavigator } from "@react-navigation/stack";
import { TabRoutes } from "./TabRoutes";
import { DetailsScreen } from "@/src/screens/Details/DetailsScreen";

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

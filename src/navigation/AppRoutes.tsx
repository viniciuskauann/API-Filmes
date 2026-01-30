import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Movie } from "../types/movie";
import { TabNavigator } from "./TabRoutes";
import { DetailsScreen } from "../screens/Detail/DetailScreen";

export type RootStackParamList = {
  Tabs: undefined;
  Details: { movie: Movie };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator id="app-stack" screenOptions={{ headerShown: false }}>
      {/* TABS PRECISAM SER A TELA PRINCIPAL */}
      <Stack.Screen name="Tabs" component={TabNavigator} />

      {/* TELAS FORA DAS TABS */}
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

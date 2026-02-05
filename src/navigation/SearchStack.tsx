import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "../screens/Search/SearchScreen";
import { DetailsScreen } from "../screens/Detail/DetailScreen";
import { SearchStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<SearchStackParamList>();

export function SearchStack() {
  return (
    <Stack.Navigator id="search-stack" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

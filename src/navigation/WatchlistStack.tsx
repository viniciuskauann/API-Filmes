import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WatchlistScreen } from "../screens/Watchlist/WatchlistScreen";
import { DetailsScreen } from "../screens/Detail/DetailScreen";
import { WatchlistStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<WatchlistStackParamList>();

export function WatchlistStack() {
  return (
    <Stack.Navigator id="watchlist-stack" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Watchlist" component={WatchlistScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

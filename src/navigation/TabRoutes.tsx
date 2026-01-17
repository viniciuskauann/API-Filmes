import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/Home/HomeScreen";
import { WatchlistScreen } from "../screens/Watchlist/WatchlistScreen";
import { SearchScreen } from "../screens/Search/SearchScreen";


const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Watchlist" component={WatchlistScreen} />
    </Tab.Navigator>
  );
}

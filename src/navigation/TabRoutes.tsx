import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/Home/HomeScreen";
import { WatchlistScreen } from "../screens/Watchlist/WatchlistScreen";
import { SearchScreen } from "../screens/Search/SearchScreen";


const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator id="tab-navigator">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
        initialParams={{ id: 'home' }} 
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ tabBarLabel: 'Search' }}
        initialParams={{ id: 'search' }} 
      />
      <Tab.Screen
        name="Watchlist"
        component={WatchlistScreen}
        options={{ tabBarLabel: 'Watchlist' }}
        initialParams={{ id: 'watchlist' }} 
      />
    </Tab.Navigator>
  );
}
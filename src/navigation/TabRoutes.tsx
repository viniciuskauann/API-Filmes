import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import { HomeStack } from "./HomeStack";
import { SearchStack } from "./SearchStack";
import { WatchlistStack } from "./WatchlistStack";
import { TabParamList } from "../types/navigation";
import { useTheme } from "../context/ThemeContext";

const Tab = createBottomTabNavigator<TabParamList>();

export function TabNavigator() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      id="MainTab"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarIcon: ({ color }) => {
          const icons = {
            HomeStack: "home",
            SearchStack: "search",
            WatchlistStack: "bookmark",
          } as const;

          return (
            <View>
              <Ionicons name={icons[route.name]} size={22} color={color} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{ title: "Search" }}
      />
      <Tab.Screen
        name="WatchlistStack"
        component={WatchlistStack}
        options={{ title: "Watchlist" }}
      />
    </Tab.Navigator>
  );
}

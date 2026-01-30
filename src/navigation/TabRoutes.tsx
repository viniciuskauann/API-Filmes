import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import { HomeScreen } from "../screens/Home/HomeScreen";
import { SearchScreen } from "../screens/Search/SearchScreen";
import { WatchlistScreen } from "../screens/Watchlist/WatchlistScreen";
import { useTheme } from "../context/ThemeContext";

/* =========================
   TIPAGEM DO NAVIGATOR
========================= */
export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Watchlist: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

/* =========================
   TIPAGEM SEGURA DOS ÍCONES
========================= */
type IoniconName = keyof typeof Ionicons.glyphMap;

const TAB_ICONS: Record<
  keyof TabParamList,
  { active: IoniconName; inactive: IoniconName }
> = {
  Home: {
    active: "home",
    inactive: "home-outline",
  },
  Search: {
    active: "search",
    inactive: "search-outline",
  },
  Watchlist: {
    active: "bookmark",
    inactive: "bookmark-outline",
  },
};

/* =========================
   TAB NAVIGATOR
========================= */
export function TabNavigator() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      id="TabNavigator"
      screenOptions={({ route }) => ({
        headerShown: false,

        /* ===== TAB BAR STYLE ===== */
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,

          // 🔥 fundo levemente elevado
          elevation: 20, // Android
          shadowColor: "#000", // iOS
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },

        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,

        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: theme.fonts.medium,
        },

        /* ===== ICON COM DESTAQUE ===== */
        tabBarIcon: ({ color, focused }) => {
          const iconName = focused
            ? TAB_ICONS[route.name].active
            : TAB_ICONS[route.name].inactive;

          return (
            <View style={{ opacity: focused ? 1 : 0.6 }}>
              <Ionicons
                name={iconName}
                size={22}
                color={color}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Watchlist" component={WatchlistScreen} />
    </Tab.Navigator>
  );
}

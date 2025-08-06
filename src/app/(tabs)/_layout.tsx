import { Tabs } from "expo-router";
import {
  HomeIcon,
  BookMarkedIcon,
  LayoutDashboardIcon,
} from "lucide-react-native";

export default function TabsLayout() {
  const ICON_SIZE: number = 24;

  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { height: 55 } }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
          tabBarIcon: ({ color }) => (
            <HomeIcon color={color} size={ICON_SIZE} />
          ),
        }}
      />

      <Tabs.Screen
        name="pokedex"
        options={{
          title: "도감",
          tabBarIcon: ({ color }) => (
            <BookMarkedIcon color={color} size={ICON_SIZE} />
          ),
        }}
      />

      <Tabs.Screen
        name="dashboard"
        options={{
          title: "대시보드",
          tabBarIcon: ({ color }) => (
            <LayoutDashboardIcon color={color} size={ICON_SIZE} />
          ),
        }}
      />
    </Tabs>
  );
}

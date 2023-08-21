import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Home",
          headerTitleAlign: "center",
          tabBarLabel: "Home",
          headerStatusBarHeight: 0,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About",
          headerTitleAlign: "center",
          tabBarLabel: "About",
          headerStatusBarHeight: 0,
        }}
      />
    </Tabs>
  );
};

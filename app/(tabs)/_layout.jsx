import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Movie",
          headerTitleAlign: "center",
          tabBarLabel: "Movie",
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

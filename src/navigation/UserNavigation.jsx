import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PostViewScreen from "../screens/PostViewScreen";
import AddPostScreen from "../screens/AddPostScreen";

const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PostView" component={PostViewScreen} />
      <Stack.Screen name="AddPost" component={AddPostScreen} />
    </Stack.Navigator>
  );
};

export default UserNavigation;

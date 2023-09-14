import UploadPhoto from "./UploadPhoto";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import PostScreen from "./PostScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Docter"
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="doctor" size={24} color={color} />
            );
          },
        }}
        component={UploadPhoto}
      />
      <Tab.Screen
        name="Posts"
        options={{
          tabBarIcon: ({ color }) => {
            return <MaterialIcons name="post-add" size={24} color={color} />;
          },
        }}
        component={PostScreen}
      />
    </Tab.Navigator>
  );
}

export default HomeScreen;

import { StyleSheet, View } from "react-native";
import RootNavigation from "./navigation/RootNavigation";
import { AuthContext } from "./context/AuthContext";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <RootNavigation />
    </View>
  );
};

export default Main;

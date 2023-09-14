import { getHeaderTitle } from "@react-navigation/elements";
import { Appbar } from "react-native-paper";

const TestCustomNavigationBar = ({ navigation, back, route, options }) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title}></Appbar.Content>
    </Appbar.Header>
  );
};

export default TestCustomNavigationBar;

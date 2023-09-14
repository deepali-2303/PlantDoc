import React, { useCallback, useContext, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Pressable,
  Text,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleSubmit = useCallback(() => {
    signIn(email, password).catch(() => alert("Invalid email or password"));
  }, [email, password]);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          onChangeText={(value) => setEmail(value)}
          value={email}
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          onChangeText={(value) => setPassword(value)}
          value={password}
          style={styles.input}
          placeholder="Password"
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Button
            onPress={handleSubmit}
            style={styles.loginButton}
            textColor="white"
          >
            Login
          </Button>
        </TouchableOpacity>
        <Button onPress={() => navigation.navigate("Signup")}>
          <Text
            style={{
              color: "#66ccff",
              textDecorationColor: "#66ccff",
              textAlign: "center",
            }}
          >
            Don't have a account?
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  form: {
    width: 300,
  },
  input: {
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: "#66ccff",
    color: "white",
    marginVertical: 10,
  },
  link: {
    position: "absolute",
    bottom: 0,
  },
});

export default LoginScreen;

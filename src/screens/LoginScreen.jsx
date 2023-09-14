import React, { useCallback, useContext, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 10,
  },
});

export default LoginScreen;

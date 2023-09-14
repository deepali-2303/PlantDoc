import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

const AddComment = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="Add your comment"
          multiline
        />
        <TouchableOpacity style={styles.submit}>
          <Ionicons name="add-circle" size={40} color="green" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 1,
    right: 0,
    left: 0,
    paddingHorizontal: 3,
  },
  inputContainer: {
    padding: 3,
    gap: 3,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  input: {
    width: "100%",
    maxHeight: 100,
  },
  submit: {
    position: "absolute",
    right: 0,
  },
});

export default AddComment;

import React, { useCallback, useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { FIREBASE_DB as db } from "../../firebase";
import { AuthContext } from "../context/AuthContext";
import { addDoc, collection } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Button } from "react-native-paper";

const AddPostScreen = () => {
  const [image, setImage] = useState("");
  const [question, setQuestion] = useState("");
  const { auth } = useContext(AuthContext);
  const navigation = useNavigation();

  const addPost = useCallback(async () => {
    try {
      const colRef = collection(db, "posts");
      await addDoc(colRef, {
        email: auth.email,
        username: auth.displayName,
        image: image,
        question: question,
        likes: 0,
      });
      navigation.navigate("Home");
    } catch (error) {
      console.log(error.message);
      alert("Failed to post your question");
    }
  }, [image, question]);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          onChangeText={(value) => setImage(value)}
          value={image}
          style={styles.input}
          placeholder="Image"
        />
        <TextInput
          onChangeText={(value) => setQuestion(value)}
          value={question}
          style={styles.question}
          placeholder="Question"
          multiline
        />
        <Button onPress={addPost} style={styles.loginButton} textColor="white">
          Post
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
  },
  form: {
    width: 300,
  },
  input: {
    marginVertical: 10,
  },
  question: {
    marginVertical: 10,
    height: 100,
  },
  loginButton: {
    backgroundColor: "green",
    color: "white",
    marginTop: 10,
  },
});

export default AddPostScreen;

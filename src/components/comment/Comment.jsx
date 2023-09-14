import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Comment = ({ comment }) => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image src={comment.user_profile_pic} style={styles.profile_pic} />
        <View>
          <Text>
            <MaterialIcons name="verified" size={15} style={styles.verified} />
            <Text style={styles.username}>{comment.username}</Text>
          </Text>
          <Text>{comment.createdAt} days ago</Text>
        </View>
      </View>
      <Text style={styles.content}>{comment.comment}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c8cbce",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  user: {
    flex: 1,
    flexDirection: "row",
    gap: 3,
    alignItems: "center",
    marginBottom: 5,
  },
  profile_pic: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  username: {
    fontSize: 15,
    fontWeight: "700",
  },
  daysAgo: {},
  content: {
    paddingLeft: 5,
  },
  likes: {},
  verified: {
    marginRight: 3,
  },
});

export default Comment;

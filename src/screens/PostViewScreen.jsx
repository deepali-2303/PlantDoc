import React from "react";
import { FlatList, StyleSheet, View, Image, Text } from "react-native";
import Comment from "../components/comment/Comment";
import AddComment from "../components/comment/AddComment";
import Data from "../../data.json";
import { useRoute } from "@react-navigation/native";

const ImageDescription = ({ post }) => {
  return (
    <View style={styles.imageContainer}>
      <Image src={post.crop_img} style={styles.postImage} />
      <Text style={styles.question}>{post.question}</Text>
    </View>
  );
};

const PostView = () => {
  const route = useRoute();
  const post = Data.posts.find((post) => post.id === route.params.id);

  return (
    <>
      <View style={styles.container}>
        <ImageDescription post={post} />
        <View style={styles.commentContainer}>
          <FlatList
            style={styles.comments}
            data={post.comments}
            renderItem={({ item }) => <Comment comment={item} />}
            keyExtractor={(item) => item.id}
          />
          <AddComment />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  commentContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  imageContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#b8b9bd",
    elevation: 5,
    paddingBottom: 10,
  },
  postImage: {
    height: 250,
    marginBottom: 5,
  },
  question: {
    paddingLeft: 15,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "#0d2c37",
  },
  comments: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#ebedeb",
    marginBottom: 60,
  },
});

export default PostView;

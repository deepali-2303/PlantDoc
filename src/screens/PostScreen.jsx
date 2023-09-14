import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Data from "../../data.json";
import Post from "../components/post/Post";

const PostScreen = () => {
  return (
    <View>
      <FlatList
        data={Data.posts}
        renderItem={({ item }) => <Post post={item} />}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {},
});

export default PostScreen;

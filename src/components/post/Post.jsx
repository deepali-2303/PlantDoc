import React, { useCallback } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const UserDetails = ({ post }) => {
  return (
    <View style={styles.user}>
      <Image src={post.profile_pic} style={styles.userImage} />
      <View style={styles.details}>
        <Text style={styles.userName}>{post.username}</Text>
        <Text>
          <Text style={styles.state}>{post.state} </Text>
          <Text style={styles.daysAgo}>{post.created_at} days ago</Text>
        </Text>
      </View>
    </View>
  );
};

const ImageDescription = ({ post }) => {
  const navigation = useNavigation();

  const handleClick = useCallback(() => {
    navigation.navigate("PostView", { id: post.id });
  }, []);

  return (
    <Pressable onPress={handleClick}>
      <Image src={post.crop_img} style={styles.postImage} />
      <Text style={styles.question}>{post.question}</Text>
    </Pressable>
  );
};

const Analytics = ({ post }) => {
  return (
    <View style={{ padding: 10 }}>
      <View style={styles.analytics}>
        <Text style={{ fontSize: 15, fontWeight: "700", color: "gray" }}>
          {post.likes} likes
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "700", color: "gray" }}>
          {post.replies} reply
        </Text>
      </View>
      <View style={styles.analyticsDivision} />
      <View style={styles.analyticsIcons}>
        <TouchableOpacity style={styles.analyticsLikeIcon}>
          <AntDesign name="like2" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.analyticsReplyIcon}>
          <MaterialIcons name="comment" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Post = ({ post }) => {
  return (
    <View style={styles.post}>
      <UserDetails post={post} />
      <ImageDescription post={post} />
      <Analytics post={post} />
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    borderTopColor: "#b8b9bd",
    borderTopWidth: 10,
  },
  user: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
    padding: 5,
  },
  details: {
    flexGrow: 1,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: "700",
  },
  state: {
    fontSize: 15,
  },
  daysAgo: {
    color: "gray",
    fontSize: 15,
    textAlign: "right",
  },
  timeIcon: {
    width: 10,
    height: 10,
  },
  postImage: {
    width: "100%",
    height: 200,
    marginBottom: 5,
  },
  question: {
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "#0d2c37",
  },
  analytics: {
    padding: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  analyticsDivision: {
    width: "100%",
    height: 5,
    borderRadius: 20,
    backgroundColor: "#dbdcde",
    paddingRight: 10,
    paddingLeft: 10,
  },
  analyticsIcons: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "row",
  },
  analyticsLikeIcon: {},
  analyticsReplyIcon: {},
});

export default Post;

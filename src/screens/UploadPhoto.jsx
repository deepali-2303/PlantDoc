import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { uploadImageToFirebase } from "../../firebase";

const storage = getStorage();
const storageRef = ref(storage, "images/uploadedImages.jpg");

function UploadPhoto() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Camera permission is required to use this feature.");
      }
    })();
  }, []);

  const selectImage = () => {
    setModalVisible(true);
  };

  const closeImagePicker = () => {
    setModalVisible(false);
  };

  const takePhoto = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        const { uri } = result.assets[0];

        const filename = uri.substring(uri.lastIndexOf("/") + 1);
        // const testFilename = uri.split("/").pop();
        // console.log(
        //   "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF=>>>>>>>>>>>>>>>>>>",
        //   filename,
        //   testFilename
        // );
        const uploadRes = await uploadImageToFirebase(uri, filename, (v) =>
          console.log(v)
        );
        setSelectedImage({ uri });
        setModalVisible(false);
        console.log("uploadRes--------------->", uploadRes);
      }
    } catch (error) {
      Alert.alert("Error Uploading Image" + error.message);
    }
  };

  const chooseFromGallery = async () => {
    // No permissions request is necessary for launching the image library
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const { uri } = result.assets[0];
        const filename = uri.substring(uri.lastIndexOf("/") + 1);
        // const testFilename = uri.split("/").pop();
        // console.log(
        //   "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF=>>>>>>>>>>>>>>>>>>",
        //   filename,
        //   testFilename
        // );
        const uploadRes = await uploadImageToFirebase(uri, filename, (v) =>
          console.log(v)
        );
        setSelectedImage({ uri });
        setModalVisible(false);
        console.log("uploadRes--------------->", uploadRes);
      }
    } catch (error) {
      Alert.alert("Error Uploading Image" + error.message);
    }
  };

  const clearImage = () => {
    setSelectedImage(null); // Clear the selected image
  };

  return (
    <View style={styles.container}>
      <Text>Upload Image</Text>
      <TouchableOpacity style={styles.cameraIcon} onPress={selectImage}>
        <Icon name="camera" size={25} color="white" />
      </TouchableOpacity>
      {selectedImage && <Button title="Clear" onPress={clearImage} />}
      {selectedImage && <Image source={selectedImage} style={styles.image} />}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeImagePicker}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalOption} onPress={takePhoto}>
            <Text style={styles.optionText}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={chooseFromGallery}
          >
            <Text style={styles.optionText}>Choose from Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={closeImagePicker}
          >
            <Text style={styles.optionText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalOption: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  optionText: {
    fontSize: 18,
  },
});

export default UploadPhoto;

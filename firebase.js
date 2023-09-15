import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbyKcVLj8cR3BLnxF-9TC_pzj8IaPhP9c",
  authDomain: "plantdoc-60885.firebaseapp.com",
  projectId: "plantdoc-60885",
  storageBucket: "plantdoc-60885.appspot.com",
  messagingSenderId: "686648187504",
  appId: "1:686648187504:web:706f5722ed6aab0ac272b5",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export const uploadImageToFirebase = async (uri, filename, onProgress) => {
  const fetchResponse = await fetch(uri);
  const theBlob = await fetchResponse.blob();

  const imageRef = ref(getStorage(), `images/${filename}`);

  const uploadTask = uploadBytesResumable(imageRef, theBlob);

  return new Promise((resolve, reject) =>
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress && onProgress("Upload is " + progress + "% done");
      },
      (error) => {
        // Handle unsuccessful uploads
        reject(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve({
          downloadURL,
          metadata: uploadTask.snapshot,
        });
      }
    )
  );
};

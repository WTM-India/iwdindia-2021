import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBhuefIeNSIp-MptPexZrOPdpZ0L2oxaak",
  authDomain: "iwd-india-2021.firebaseapp.com",
  projectId: "iwd-india-2021",
  storageBucket: "iwd-india-2021.appspot.com",
  messagingSenderId: "169650240127",
  appId: "1:169650240127:web:99682d87dcd1e78f615d4a"
};

firebase.initializeApp(firebaseConfig);
firebase
  .firestore()
  .enablePersistence({ synchronizeTabs: !0 })
  .catch(() => {
    console.warn("DB offline support not available");
  });
  
export default {
  firestore: firebase.firestore(),
  auth: firebase.auth(),
  firebase: firebase,
  notificationSupported: firebase.messaging.isSupported(),
  messaging: firebase.messaging.isSupported() ? firebase.messaging() : null,
};
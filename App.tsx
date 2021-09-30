import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5tT80vx6JOFynCvV9qiHPTQ3ssDrJZF4",
  authDomain: "durable-destiny-275715.firebaseapp.com",
  projectId: "durable-destiny-275715",
  storageBucket: "durable-destiny-275715.appspot.com",
  messagingSenderId: "280109639330",
  appId: "1:280109639330:web:e635bd47f179e1625e59fb",
  measurementId: "G-HKXXW5WLVM"
};

firebase.initializeApp(firebaseConfig);

const dbh = firebase.firestore();

export default function App() {

  useEffect(() => {
    dbh.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const user = JSON.stringify(doc.data());
        console.log(`${doc.id} => ${user}`);
      });
  });
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

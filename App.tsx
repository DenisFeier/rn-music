import React from 'react';
import { StatusBar } from 'expo-status-bar';
import firebase from 'firebase/app'
import 'firebase/firestore';

import { firebaseConfig } from './config';
import Router from './src/components/Routes'


firebase.initializeApp(firebaseConfig);

// const dbh = firebase.firestore();

// interface UserModel {
//   age: number;
//   name: string;
//   gender: string;
// }

export default function App() {

  // useEffect(() => {
  //   dbh.collection("users").get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       const user = JSON.stringify(doc.data());
  //       console.log(`${doc.id} => ${user}`);
  //     });
  // });
  // }, [])

  return (
    <>
      <Router />
      <StatusBar style="light"/>
    </>
  );
}

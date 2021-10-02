import React from 'react';

import { firebaseConfig } from './config';
import firebase from 'firebase/app'
import 'firebase/firestore';
import Login from './src/screen/Login';

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
    <Login />
  );
}

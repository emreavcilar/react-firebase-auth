import React, { Component, Fragment } from 'react';
import RoutesComponent from './ui/components/common/routes-component';
import * as firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from '@react-firebase/auth'

var firebaseConfig = {
  apiKey: "*******************",
  authDomain: "*******************",
  databaseURL: "*******************",
  projectId: "*******************",
  storageBucket: "*******************",
  messagingSenderId: "*******************",
  appId: "*******************"
};

firebase.initializeApp(firebaseConfig)
class App extends Component {
  render() {
    return (
      <Fragment>
            <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
                <RoutesComponent />
            </FirebaseAuthProvider>
      </Fragment>
    );
  }
}

export default App;

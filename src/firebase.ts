import firebase from "firebase"
import "firebase/database"

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: "https://challenge-js-1-default-rtdb.firebaseio.com",
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MID,
}

firebase.initializeApp(config)

const databaseRef = firebase.database().ref()

export const registersRef = databaseRef.child("register")

export default firebase

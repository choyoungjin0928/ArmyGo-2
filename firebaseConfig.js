import * as firebase from "firebase/app";
// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";
// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey: "AIzaSyBCD74VEFmHXji0eTvDk-SB-aNE2vmAMNg",
  authDomain: "armygo-ada71.firebaseapp.com",
  databaseURL: "https://armygo-ada71.firebaseio.com",
  projectId: "armygo-ada71",
  storageBucket: "armygo-ada71.appspot.com",
  messagingSenderId: "658213503679",
  appId: "1:658213503679:web:9afdec0930e8f098493c0a",
  measurementId: "G-4BF0NRJPZC",
};
//사용 방법입니다.
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const firebase_db = firebase.database();

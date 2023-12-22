import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB3m-U55jRpYmcGNLXFuxkmwS_qRt5HzDg",
  authDomain: "dashboard-swiper.firebaseapp.com",
  projectId: "dashboard-swiper",
  storageBucket: "dashboard-swiper.appspot.com",
  messagingSenderId: "77618508439",
  appId: "1:77618508439:web:1e28c6d8bd4515cd17efd2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export { db }


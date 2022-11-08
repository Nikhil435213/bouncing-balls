import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyC1Hf0_rdWLBzDPJPcO9CJN4y6M6-EgKH4",
//   authDomain: "react-auth-6788d.firebaseapp.com",
//   projectId: "react-auth-6788d",
//   storageBucket: "react-auth-6788d.appspot.com",
//   messagingSenderId: "131797845021",
//   appId: "1:131797845021:web:3f7ff4766e2b89ca5d32f4",
//   measurementId: "G-VWPBR1NSLL",
// };

const firebaseConfig = {
  apiKey: "AIzaSyC61zhsr1puijQn1bY4zSLiNYz7T-Q0Row",
  authDomain: "react-netflix-a644d.firebaseapp.com",
  projectId: "react-netflix-a644d",
  storageBucket: "react-netflix-a644d.appspot.com",
  messagingSenderId: "363901302064",
  appId: "1:363901302064:web:f13ddf7fe1953c283244f5",
  measurementId: "G-NYJ1C8PZEF"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyALS-CgjrX7WbYkxVD4OsMQWNronewkV1M",
  authDomain: "proyectoreact1-bc7f1.firebaseapp.com",
  projectId: "proyectoreact1-bc7f1",
  storageBucket: "proyectoreact1-bc7f1.appspot.com",
  messagingSenderId: "19311840680",
  appId: "1:19311840680:web:9f8c4831418fcf37b5219d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportamos nuestra base de datos a toda la app
export const db = getFirestore(app);
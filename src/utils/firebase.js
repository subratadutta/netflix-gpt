// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBaxLIZcijts1QLN8L2MYZsVyEQEujWM0Y',
  authDomain: 'netflix-gpt-a4820.firebaseapp.com',
  projectId: 'netflix-gpt-a4820',
  storageBucket: 'netflix-gpt-a4820.appspot.com',
  messagingSenderId: '28792022094',
  appId: '1:28792022094:web:d4d9a3a0366b25aad5cf1f',
  measurementId: 'G-FMR3BMWW7E',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

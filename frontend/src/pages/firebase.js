// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC9Q03y07o0nRlXViqrSg_7JyVmbRZsnYs',
  authDomain: 'lao-foundation.firebaseapp.com',
  projectId: 'lao-foundation',
  storageBucket: 'lao-foundation.appspot.com',
  messagingSenderId: '573148192828',
  appId: '1:573148192828:web:155a7ef5d5ce98a1eda339',
  measurementId: 'G-X68N80JT12',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const storage = getStorage(app)

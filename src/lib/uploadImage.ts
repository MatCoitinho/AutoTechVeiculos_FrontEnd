import firebase from 'firebase/compat/app';
import {getStorage} from 'firebase/storage'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY ,
  authDomain:process.env.NEXT_PUBLIC_AUTH_DOMAIN ,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket:process.env.NEXT_PUBLIC_STORAGE_BUCKET ,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID
};
console.log(firebaseConfig)

//export default function UploadImage(image: File) { 
  
    export const app = initializeApp(firebaseConfig);
    export const storage =  getStorage(app)



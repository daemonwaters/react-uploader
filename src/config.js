  import {getFirestore} from 'firebase/firestore'
  import {getStorage,getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'

  import {} from 'firebase/storage'
  // Import the functions you need from the SDKs you need
  import { initializeApp } from 'firebase/app'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB2RHhESOpikuyEXz-FENYQ2nwR96J6lq0",
    authDomain: "fir-uploader-13143.firebaseapp.com",
    projectId: "fir-uploader-13143",
    storageBucket: "fir-uploader-13143.appspot.com",
    messagingSenderId: "676725768475",
    appId: "1:676725768475:web:60d48c8933e70266c953be"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const storage = getStorage(app);
  export {getDownloadURL, ref, uploadBytesResumable};

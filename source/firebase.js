import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDmj60oqgb-RKso9c9nepZklmkIQgkwKW0',
  authDomain: 'simple-finances-d9c83.firebaseapp.com',
  projectId: 'simple-finances-d9c83',
  storageBucket: 'simple-finances-d9c83.appspot.com',
  messagingSenderId: 'simple-finances-d9c83.appspot.com',
  appId: '1:603871591382:web:9649bffd10a0987cf94277',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

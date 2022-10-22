import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // New import

const firebaseConfig = {
  apiKey: 'AIzaSyB81O_-81CsmbKH_8b3Nhblw_fYdPbCnvM',
  authDomain: 'book-app-f3e10.firebaseapp.com',
  projectId: 'book-app-f3e10',
  storageBucket: 'book-app-f3e10.appspot.com',
  messagingSenderId: '701343248529',
  appId: '1:701343248529:web:e26e94efa074f465708f30',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

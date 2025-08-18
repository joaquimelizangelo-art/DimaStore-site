// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyD6JTyBBHF1cz32ovhgFEKrnFqufnOAQZg",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "dimastore0123.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "dimastore0123",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "dimastore0123.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "816012507920",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:816012507920:web:167986c3f8bfbb2e148395",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-T5FFTXRTPM"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Configurar persistência de autenticação
setPersistence(auth, browserLocalPersistence);

console.log('Firebase inicializado com sucesso'); 
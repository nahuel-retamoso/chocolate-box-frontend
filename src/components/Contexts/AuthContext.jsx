import { createContext, useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import {app} from '../../firebase/firebaseconfig'

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    
    console.log('useEffect AuthContext')
    return () => {
      unsubscribe();
    };
  }, [auth]);

  async function login(email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
  }

  async function signup(email, password, firstName, lastName) {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    
    await updateProfile(user, {
      displayName: firstName + " " + lastName
    });
  
    return user;
  }

  async function logout() {
    return await signOut(auth);
  }

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
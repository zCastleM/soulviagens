import { useState } from "react";
import AuthContext from "./contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth, logoutFirebase } from "./firebase/auth";

const MyApp = ({ Component, pageProps }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = async () => {
      await logoutFirebase();
      setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
};
export default MyApp;

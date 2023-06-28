import { createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  logout: () => {},
});

export default AuthContext;

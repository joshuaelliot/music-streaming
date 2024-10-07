import  { createContext, useContext, useState } from "react";

// Crear el contexto de autenticación
const AuthContext = createContext();

// Proveedor de contexto para la autenticación
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para acceder al estado de autenticación
export function useAuth() {
  return useContext(AuthContext);
}

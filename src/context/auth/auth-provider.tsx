import { useCallback, useState } from "react";
import { AuthContext, type User } from "./auth-context";
import { useNavigate } from "react-router-dom";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const login = useCallback((userData: User) => {
    setUser(userData);
    localStorage.setItem("token", "your-token-here"); // Replace with actual token
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

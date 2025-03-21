import { createContext, useContext, useState } from "react";

const AppContext = createContext({
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const isAuthenticated = Boolean(user);

  const login = async (username, password) => {
    try {
      // This simulates user authentication for different roles
      if (username === "admin" && password === "admin") {
        setUser({
          id: 1,
          name: "Admin User",
          username: username,
          role: "admin",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        });
      } else if (username === "cashier" && password === "cashier") {
        setUser({
          id: 2,
          name: "Cashier User",
          username: username,
          role: "cashier",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        });
      } else if (username === "user" && password === "user") {
        setUser({
          id: 3,
          name: "Regular Customer",
          username: username,
          role: "customer",
          avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        });
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
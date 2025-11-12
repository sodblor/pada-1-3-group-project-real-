"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    try {
      const u = JSON.parse(localStorage.getItem("auth_users") || "[]");
      const me = JSON.parse(
        localStorage.getItem("auth_current_user") || "null"
      );
      if (Array.isArray(u)) setUsers(u);
      if (me) setCurrentUser(me);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("auth_users", JSON.stringify(users));
    } catch {}
  }, [users]);

  useEffect(() => {
    try {
      localStorage.setItem("auth_current_user", JSON.stringify(currentUser));
    } catch {}
  }, [currentUser]);

  const signup = (user) => {
    const exists = users.some(
      (u) => u.email?.toLowerCase() === user.email?.toLowerCase()
    );
    if (exists) {
      return { ok: false, error: "Email already registered" };
    }
    setUsers((prev) => [...prev, user]);
    setCurrentUser(user);
    return { ok: true };
  };

  const login = (email, password) => {
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setCurrentUser(found);
      return { ok: true };
    }
    return { ok: false, error: "Invalid email or password" };
  };

  const logout = () => setCurrentUser(null);

  return (
    <AuthContext.Provider value={{ users, currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

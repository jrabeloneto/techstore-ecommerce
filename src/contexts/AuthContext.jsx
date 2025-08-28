import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Carregar usuário do localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('techstore-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Salvar usuário no localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('techstore-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('techstore-user');
    }
  }, [user]);

  const login = async (email, password) => {
    setLoading(true);
    
    // Simulação de API de login
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const userData = {
            id: Date.now(),
            name: email.split('@')[0],
            email: email,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
          };
          setUser(userData);
          setLoading(false);
          resolve(userData);
        } else {
          setLoading(false);
          reject(new Error('Email e senha são obrigatórios'));
        }
      }, 1000);
    });
  };

  const register = async (name, email, password) => {
    setLoading(true);
    
    // Simulação de API de registro
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password) {
          const userData = {
            id: Date.now(),
            name: name,
            email: email,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
          };
          setUser(userData);
          setLoading(false);
          resolve(userData);
        } else {
          setLoading(false);
          reject(new Error('Todos os campos são obrigatórios'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('techstore-user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};


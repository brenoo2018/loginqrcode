import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {login} from '../services/auth';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * Faz a requisição e salva os dados no async storage
   */
  async function loginUser(credentials) {
    const response = await login(credentials);

    setUser(response.user);

    /**
     * envia automaticamente o token a cada requisição antes do login
     */

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@token', response.token);
    setLoading(false);
  }

  /**
   * Carrega o usuário no async storage
   */
  useEffect(() => {
    async function loadUserStorage() {
      const storagedUser = await AsyncStorage.getItem('@user');
      const storagedToken = await AsyncStorage.getItem('@token');

      if (storagedUser && storagedToken) {
        /**
         * envia automaticamente o token a cada requisição após o login
         */
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
        setLoading(false);
      } else if (!storagedUser && !storagedToken) {
        setLoading(false);
      }
    }

    loadUserStorage();
  }, []);

  /**
   * Desfaz o login async storage limpando o usuário do async storage
   */

  async function logoutUser() {
    await AsyncStorage.clear();
    await setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        logged: Boolean(user),
        user,
        loading,
        loginUser,
        logoutUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

"use client";

import React, { useState, createContext, useEffect } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
import { baseUrlProd } from "../../utils/urlBase";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  phone: string;
  email: string;
}

interface State {
  loading: boolean;
  data: User | null;
  error: string | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
}

export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  error: null,
  data: null,
  setAuthState: () => {},
});

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<State>({
    loading: true,
    error: null,
    data: null,
  });
  const fetchUser = async () => {
    setAuthState({
      error: null,
      data: null,
      loading: true,
    });
    try {
      const jwt = getCookie("jwt");

      if (!jwt) {
        return setAuthState({
          error: null,
          data: null,
          loading: false,
        });
      }
      const response = await axios.get(
        ` ${baseUrlProd}api/auth/authenticated`,
        { headers: { Authorization: `Bearer ${jwt}` } }
      );

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
    } catch (error: any) {
      setAuthState({
        error: error.response.data.errorMessage,
        data: null,
        loading: false,
      });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

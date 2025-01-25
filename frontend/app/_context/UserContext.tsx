"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

type UserContextType = {
  userAddress: string | null;
  userRole: string | null;
  updateBalance: number;
  setUserAddress: (address: string | null) => void;
  setUserRole: (role: string | null) => void;
  setUpdateBalance: (balance: number) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userAddress, setUserAddress] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [updateBalance, setUpdateBalance] = useState(0);

  return (
    <UserContext.Provider
      value={{ userAddress, userRole, setUserAddress, setUserRole, updateBalance, setUpdateBalance }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

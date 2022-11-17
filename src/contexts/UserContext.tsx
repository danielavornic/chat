import { createContext, useState } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }: any) => {
  const [nickname, setNickname] = useState({});

  return (
    <UserContext.Provider value={{ nickname, setNickname }}>
      {children}
    </UserContext.Provider>
  );
};

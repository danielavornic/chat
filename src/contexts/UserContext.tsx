import { createContext, useState } from 'react';

interface UserContextProps {
  nickname: string;
  setNickname: (nickname: string) => void;
}

export const UserContext = createContext<UserContextProps>({
  nickname: '',
  setNickname: () => {},
});

export const UserProvider = ({ children }: any) => {
  const [nickname, setNickname] = useState('');

  return (
    <UserContext.Provider value={{ nickname, setNickname }}>
      {children}
    </UserContext.Provider>
  );
};

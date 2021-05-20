import React, { useState } from 'react';
import UserLoggedType from '../models/UserLogged';
import useTimeout from '../useTimeout';

interface UserContextType extends UserLoggedType {
  isLoading: boolean;
  isAuthenticated: boolean;
  interactionsWithPageRout: number;
  addInteractions: () => void;
}

export const UserLoggedContext = React.createContext<UserContextType>({
  isLoading: false,
  isAuthenticated: false,
  id: undefined,
  userName: undefined,
  interactionsWithPageRout: 0,
  addInteractions: ()=>{}, 
});

const UserLoggedContextProvider: React.FC = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [userLogged, setUserLogged] = useState<UserLoggedType | null>(null);
  const [interactionsWithPageRout, setInteractionsWithPageRout] = useState<number>(0);

  useTimeout(() => {
    setUserLogged({
      id: "eric",
      userName: "eric",
    });
    setLoading(false);
  }, 1000);

  const addInteractionHandler = () => {
    setInteractionsWithPageRout(prevState => prevState + 1);
  };

  return (
    <UserLoggedContext.Provider value={{
      isLoading,
      isAuthenticated: !!userLogged,
      id: userLogged?.id,
      userName: userLogged?.userName,
      interactionsWithPageRout,
      addInteractions: addInteractionHandler,
    }}>
      {props.children}
    </UserLoggedContext.Provider>
  );
}

export default UserLoggedContextProvider;

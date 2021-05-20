import React, { useState } from 'react';
import UserLogged from '../models/UserLogged';

type userLoggedContextObj ={
  userName: string
  interactionsWithPageRout : number
  addInteractions: ()=> void;
}

export const UserLoggedContext = React.createContext<userLoggedContextObj>({
  userName: "eric",
  interactionsWithPageRout: 0,
  addInteractions: ()=>{}, 
});
  

const UserLoggedContextProvider: React.FC = (props) =>{
  const [userLogged, setUserLogged] = useState<UserLogged>(new UserLogged("eric") );
  

  const addInteractionHandler = () => {
    
    setUserLogged(prevState => ({
      ...prevState,
      interactionsWithPageRout: prevState.interactionsWithPageRout+1
  }));
  };

  const contextValue: userLoggedContextObj = {
    userName: userLogged.userName ,
    interactionsWithPageRout: userLogged.interactionsWithPageRout,
    addInteractions : addInteractionHandler
  };
  
  return (
    <UserLoggedContext.Provider value={contextValue}>
      {props.children}
    </UserLoggedContext.Provider>
  );
}




export default UserLoggedContextProvider;
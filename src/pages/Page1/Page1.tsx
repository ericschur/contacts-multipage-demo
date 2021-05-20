import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { UserLoggedContext } from '../../store/userLogged-context'
import React, { useContext } from 'react';

const Page1 : React.FC = () => {

  const userLoggedCtx = useContext(UserLoggedContext);

  const addInteractionHandler = () => {
    userLoggedCtx.addInteractions();
  }

  return (
    <div>
      <Button key="homepage" variant="contained" color="primary" onClick={addInteractionHandler}>
        <NavLink to="/homepage">volver</NavLink>
      </Button>
    </div>
  );
};

export default Page1;

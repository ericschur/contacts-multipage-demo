import { NavLink } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";
import { UserLoggedContext } from '../../store/UserLoggedContext'
import React, { useContext } from 'react';


const rutas = [
  { path: "page1", label: "Page 1" },
  { path: "page2", label: "Page 2" }
];

const HomePage: React.FC = () => {
  const userLoggedCtx = useContext(UserLoggedContext);

  const addInteractionHandler = () => {
    userLoggedCtx.addInteractions();
  }

  return (
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      {rutas.map(ruta => (
        <NavLink to={`/${ruta.path}`} onClick={addInteractionHandler}>
          <Button key={ruta.label} variant="contained" color="primary">
            {ruta.label}
          </Button>
        </NavLink>
      ))}
    </ButtonGroup>
  );
};

export default HomePage;

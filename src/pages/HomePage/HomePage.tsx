import { NavLink } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";
import { UserLoggedContext } from '../../store/userLogged-context'
import React, { useContext } from 'react';


const rutas = [
  { path: "page1", label: "Page 1" },
  { path: "page2", label: "Page2" }
];

const HomePage: React.FC = () => {
  const userLoggedCtx = useContext(UserLoggedContext);

  const addInteractionHandler = () => {
    userLoggedCtx.addInteractions();
  }

  return (
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      {rutas.map(ruta => (
        <div>
          <Button key={ruta.label} variant="contained" color="primary" onClick={addInteractionHandler}>
            <NavLink to={`/${ruta.path}`}>{ruta.label}</NavLink>
          </Button>
        </div>
      ))}
    </ButtonGroup>

  );
};

export default HomePage;

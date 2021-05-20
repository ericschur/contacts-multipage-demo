import React, {Fragment,useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { UserLoggedContext } from '../store/userLogged-context'

const  MainHeader = () => {
  const userLoggedCtx = useContext(UserLoggedContext);
  return (
    <Fragment>
      <CssBaseline />
        <AppBar>
          <Toolbar>
            <Typography variant="h6">
            <span>El usuario {userLoggedCtx.userName} navego a distintas rutas {userLoggedCtx.interactionsWithPageRout.toString()} veces´</span> 
            </Typography>
          </Toolbar>
        </AppBar>
      <Toolbar />
    </Fragment>
  );
}

export default MainHeader;

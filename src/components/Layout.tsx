import { useContext, Fragment } from 'react';
import { UserLoggedContext } from '../store/UserLoggedContext';
import MainHeader from './MainHeader';
import Skeleton from '@material-ui/lab/Skeleton';

const Layout: React.FC = (props) => {
  const { isAuthenticated } = useContext(UserLoggedContext);

  if (!isAuthenticated) {
    return <>
      <Skeleton variant="text" animation="wave" />
      <Skeleton variant="text" animation="wave" />
      <Skeleton variant="text" animation="wave" />
    </>;
  }

  return (
    <Fragment>
      <MainHeader />
      <main>
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;

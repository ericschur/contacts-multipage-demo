import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import NotFound from "./pages/NotFound";

import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/homepage" />
        </Route>
        <Route path="/homepage" exact>
          <HomePage />
        </Route>
        <Route path="/page1" exact>
          <Page1 />
        </Route>
        <Route path="/page2" exact>
          <Page2 />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

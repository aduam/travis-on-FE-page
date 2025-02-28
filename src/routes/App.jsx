import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';

const App = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </HashRouter>
  );
};

export default App;

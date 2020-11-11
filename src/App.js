// App.js

import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import routes from './Config/routes.js';

import PrivateRoute from './Componentes/PrivateRoute';
import PublicRoute from './Componentes/PublicRoute';

import Login from './Paginas/Login'
import Dashboard from './Paginas/Dashboard'
import PageNotFound from './Paginas/PageNotFound'
import ErrorPage from './Paginas/ErrorPage';
import VerificaClaveUnica from './Paginas/VerificaClaveUnica';
import Miperfil from './Paginas/Miperfil';

function App() {
  return (
    <Router>
      <Switch>

        {
          /*routes.map((route) => (
           <Route
             key={route.path}
             path={route.path}
             component={route.component}
             exact
           />
          ))*/
        }
        <PublicRoute component={Login} path="/login" exact />
        <PublicRoute component={VerificaClaveUnica} path="/verificaclaveunica" exact />
        <PublicRoute component={ErrorPage} path="/errorpage" exact />
        <PublicRoute component={PageNotFound} path="/404" exact />

        <PrivateRoute component={Dashboard} path="/" exact />
        <PrivateRoute component={Dashboard} path="/dashboard" exact />
        <PrivateRoute component={Miperfil} path="/miperfil" exact />
        <Route
          path='/*'
          component={PageNotFound}
        />

      </Switch>
    </Router>
  );
}

export default App;

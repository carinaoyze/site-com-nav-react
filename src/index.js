import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import HomePage from './pages/HomePage';
import Sobre from './pages/Sobre';
import NotFoundPage from './pages/NotFoundPage';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Switch>
          <Route path = "/" component={HomePage} exact />
          <Route path = "/sobre" component = {Sobre} />
          <Route component = {NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


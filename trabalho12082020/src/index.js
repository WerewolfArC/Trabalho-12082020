import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Animal from './pages/Animal'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Animal} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
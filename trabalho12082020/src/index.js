import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Mango from './pages/Owner/Mango'
import Mia from './pages/Owner/Mia'

const home = () => {
  return (
    <>
      <h1>Ir para <a href={'/mango'}>Mango</a></h1>
      <h1>Ir para <a href={'/mia'}>Mia</a></h1>
    </>
  )
}

const erro = () => {
  return (
    <>
      <h1> <strong> Está pagina não existe </strong> </h1>
      <h2><a href={'/'}>Clique aqui para voltar a página principal</a></h2>
    </>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={home} exact />
      <Route path="/mango" component={Mango} exact />
      <Route path="/mia" component={Mia} exact />
      <Route path="/" component={erro} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
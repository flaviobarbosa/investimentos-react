import React from 'react';

import { Switch, Route } from 'react-router-dom';

import NotaCorretagem from './components/NotaCorretagem/NotaCorretagem';

const routes = (props) => {
  return (
    <Switch>
      <Route exact path='/' render={() => <h1>Principal</h1>} />
      <Route exact path='/nota' render={() => <NotaCorretagem />} />
    </Switch>
  );
};

export default routes;

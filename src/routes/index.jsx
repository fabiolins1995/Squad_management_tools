/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Views/Home';
import Team from '../Views/Team';
/*----------------------------------------------------------------------------
Routes
----------------------------------------------------------------------------*/

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/team" component={Team} />
      <Route exact path="/team/:id/edit" component={Team} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

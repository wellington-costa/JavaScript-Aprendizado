import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '.././components/Login';
import Page404 from '../pages/Page404';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
      <MyRoute path="/home" component={Home} />
    </Switch>
  );
}

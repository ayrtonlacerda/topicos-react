import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from '../pages/auth'
import Home from '../pages/home'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={() => <Auth />} />
      <Route path='/home' exact component={() => <Home />} />
    </Switch>
  );
}

export default Routes
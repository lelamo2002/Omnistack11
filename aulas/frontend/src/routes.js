import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register'
import Home from './pages/Home'
import IncidentRegister from './pages/IncidentRegister'

export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Logon}/>
      <Route path="/incidentreg" exact component={IncidentRegister}/>
      <Route path="/register" component={Register} />
      <Route path="/home" component={Home} />
    </Switch>
    </BrowserRouter>
  )
}
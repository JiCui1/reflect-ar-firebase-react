import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectRun from './components/project/ProjectRun'
import ProjectEdit from './components/project/ProjectEdit';
import Login from './components/auth/LogIn'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar />
          <Switch>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/project/:id/edit' component = {ProjectEdit} />
            <Route path='/project/:id' component = {ProjectRun} />
            <Route path='/login' component = {Login} />

            
          </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
 
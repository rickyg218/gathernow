import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import logIn from './components/logIn';
import Navigation from './components/Navigation';
import CreateAccount from './components/CreateAccount';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/logIn" component={logIn} />
            <Route exact path = "/CreateAccount" component={CreateAccount}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

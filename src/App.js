import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';

import 'antd-mobile/lib/date-picker/style/css';
import Home from './pages/Home';
import logIn from './pages/LogIn';
import Navigation from './components/Navigation';
import CreateAccount from './pages/CreateAccount';
import Footer from './components/Footer';
// import Menu from './components/NavBar';

// import NavBar from './components/NavBar';
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
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

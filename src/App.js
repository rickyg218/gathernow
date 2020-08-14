import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBarMenu from "./components/NavBar/index";
import { Button } from 'antd-mobile';
import { Form, Input, Checkbox } from 'antd';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';
import DatePicker from 'antd-mobile/lib/date-picker';
import 'antd-mobile/lib/date-picker/style/css';
import Home from './pages/Home';
import logIn from './pages/LogIn';
import Navigation from './components/Navigation';
import CreateAccount from './pages/CreateAccount';

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

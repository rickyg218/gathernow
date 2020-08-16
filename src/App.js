import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import CreateAccount from './pages/CreateAccount';
import Navigation from './components/NavBar';
import Footer from './components/Footer';

import 'antd-mobile/dist/antd-mobile.css';
import 'antd-mobile/lib/date-picker/style/css';
import './App.css';
// import './index';






class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation/>
          <Switch>
            <Route exact path ="/CreateAccount" component={CreateAccount}/>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="LogIn" component={LogIn} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

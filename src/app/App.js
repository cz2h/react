import './components/css/App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

// Main pages
import Nav from './components/nav/Navbar';
import Dashboard from './components/dashboard/Dashboard';

import Create from './components/graph/Create';
import Detail from './components/graph/Detail';
import LoginCompoent from './components/auth/Login';
import Register from './components/auth/Register';



var React = require('react');
// var Nav = require('./components/Navbar');

class App extends React.Component {


  render() {
    console.log('App rendered');

    return (
      <BrowserRouter>
        <Nav />
        <div className="dashboard container">
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route exact path="/project/:project_id" component={Detail}></Route>
            <Route exact path="/create" component={Create}></Route>
            <Route exact path="/signin" component={LoginCompoent} ></Route>
            <Route exact path="/signup" component={Register}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

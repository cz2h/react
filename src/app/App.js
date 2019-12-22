import './components/css/App.css';
import Nav from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Main pages
import Graph from './components/Graph';
import Login from './components/Login';
import About from './components/About';
import Welcome from './components/Welcome';

var React = require('react');
// var Nav = require('./components/Navbar');

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome}></Route>
          <Route exact path="/graph" component={Graph}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;

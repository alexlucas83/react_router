import React, { Component } from 'react';
import './App.css';
import {Route,Switch,NavLink} from "react-router-dom";
import Home from './component/Home';
import History from './component/History';

class App extends Component {
  render() {
    return (
      <div className="nav">
                <NavLink exact to="/" activeClassName="selected"> Home </NavLink>
                <NavLink to="/notre-histoire" activeClassName="selected"> History </NavLink>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/" component={History}/>
          </Switch>
      </div>
    );
  }
}

export default App;

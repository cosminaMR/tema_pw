import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import {Menu} from './components/menu';
import {Footer} from './components/footer';
import {Home} from './components/home';
import {About} from './components/about';
import Employees from './components/employees';
import {EmployeeAdd} from './components/employeeAdd';
import {Login} from './components/login';
import {Register} from './components/register';
class App extends Component {
  render() {
    return (  
       <React.Fragment>
     <Menu/>
          <Router>
            <Switch>
              <Route exact path = "/" component = {Home}/>
              <Route exact path = "/home" component = {Home}/>
              <Route exact path = "/about" component = {About}/>
              <Route exact path = "/employees" component = {Employees}/>
              <Route exact path = "/employee/add" component = {EmployeeAdd}/>
              <Route exact path = "/user/login" component = {Login}/>
              <Route exact path = "/user/register" component = {Register}/>
            </Switch>
          </Router>
          <Footer/>
      </React.Fragment>
    );
  }
}

export default App;

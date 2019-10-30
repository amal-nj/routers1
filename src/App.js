import { Route, BrowserRouter as Router, Switch, Link ,NavLink} from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Gallary from "./Components/Gallary";
import Contact from "./Components/Contact";
import { Navbar, Nav, Jumbotron, Card } from "react-bootstrap";
import Home from './Home'
import List from "./List";
import HeroDetails from './HeroDetails';
import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  render() {
    return (
    <div className="App">
      <Router>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallary">Gallary</Link>
          <Link to="/contact">Contact</Link>

        </nav> */}

        <Navbar className="Navbar" bg="dark">
          <Navbar.Brand href="#home">SEI Super Heros</Navbar.Brand>
          <Nav className="mr-auto text-left">
            <NavLink to="/" className="NavLink">Home </NavLink>
            <NavLink to="/list" className="NavLink">List </NavLink>
            <NavLink to="/heros" className="NavLink">Heros </NavLink>
          </Nav>
        </Navbar>
     

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/list" component={List} />
          <Route path="/gallary" component={Gallary} />
          <Route path="/contact" component={Contact} />
          <Route path="/Hero/:id" render={(props) => <HeroDetails {...props}/>}></Route>

        </Switch>
      </Router>
    </div>
    )
  }
}


import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

const Home = () => <div><h1>Home</h1><Links/></div>
const About = () => <div><h1>About</h1><Links/></div>
const Contact = () => <div><h1>Contact</h1><Links/></div>

const Links = () =>
  <ul class="nav nav-tabs">
    <li role="presentation"><Link activeStyle={{color:'green'}} to="/">Home</Link></li>
    <li role="presentation"><Link activeStyle={{color:'green'}} to="/about">About</Link></li>
    <li role="presentation"><Link activeClassName="text-success" to="/contact">Contact</Link></li>
  </ul>

class App extends React.Component {

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Router>
    )
  }
}

export default App;

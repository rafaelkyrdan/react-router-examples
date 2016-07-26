import React from 'react';
import { Router, Route, Redirect, Link, IndexRoute, hashHistory } from 'react-router';

const Outer = () => <div><Links/><h1>Our Home</h1></div>
const About = () => <div><Links/><h1>About Us</h1></div>
const Contact = () => <div><Links/><h1>Contact</h1></div>

const Links = () =>
  <ul className="nav nav-tabs">
    <li role="presentation"><Link to="/">Home</Link></li>
    <li role="presentation"><Link to="/about">About</Link></li>
    <li role="presentation"><Link to="/about-us">About Us</Link></li>
    <li role="presentation"><Link to="/contact">Contact</Link></li>
  </ul>

const Message = (props) => {
  return <div><h1>{props.params.message || 'Hello'}</h1><Greetings/></div>
}

const Greetings = () =>
  <ul className="nav nav-tabs">
    <li role="presentation"><Link to="/">Hello</Link></li>
    <li role="presentation"><Link to="/Hi">Hi</Link></li>
    <li role="presentation"><Link to="/YO">YO</Link></li>
  </ul>

const Home = () => <h1>Home</h1>
const HomeBody = () => <div>this is the home body</div>
const Other = () => <h1>Other</h1>
const OtherBody = () => <div>this is the Other body</div>
const Container = (props) => <div><OtherLinks/>{props.header}{props.body}</div>
const OtherLinks = () =>
  <ul className="nav nav-tabs">
    <li role="presentation"><Link to="/">Home</Link></li>
    <li role="presentation"><Link to="/other">Other</Link></li>
  </ul>

const Page = (props) => <div><LinskWithQuery/><h1>{props.location.query.message || 'empty query'}</h1></div>

const LinskWithQuery = () =>
  <ul className="nav nav-tabs">
    <li role="presentation"><Link to={ { pathname:'/', query:{message: 'Hello there'}} }>Hello</Link></li>
    <li role="presentation"><Link to={ { pathname:'/', query:{message: 'HI'}} }>Hi</Link></li>
    <li role="presentation"><Link to={ { pathname:'/', query:{message: 'YO'}} }>YO</Link></li>
  </ul>

class HomeApp extends React.Component {
  componentWillMount(){
    this.context.router.setRouteLeaveHook(this.props.route, this.rounteWillLeave);
  }
  rounteWillLeave( nextLocation ){
    console.log(`leaving home for ${nextLocation.pathname}`);
  }
  render(){
    return <div><Links/><h1>Our Home</h1></div>
  }
}

HomeApp.contextTypes = { router: React.PropTypes.object.isRequired };


class App extends React.Component {

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={HomeApp}></Route>
        <Route path="/about-us" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Redirect from="/about" to="/about-us"></Redirect>
      </Router>
    )
  }
}

export default App;

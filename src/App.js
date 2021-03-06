import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Work from "./pages/Work";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className='main'>
       <Nav/>
      <Switch>
        <Route exact path="/" component={About}/>
        <Route path="/work" component={Work}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
      </div>
      </BrowserRouter>
    )
  }
}


export default App;

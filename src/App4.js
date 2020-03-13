import React from 'react';
import './App3.css';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import H from './components/home';
import P from './components/public';
import F from './components/feedback';
import C from './components/complaint';
import Nav3 from './components/nav3';
import Pro from './components/profile';

function App() {
  return (
    <Router>
        
<div>
    <Nav3/> 

    <Route exact path="/" component={P}/>
    <Route  path="/home" component={H}/>
    <Route  path="/feedback" component={F}/>
    <Route  path="/complaint" component={C}/>
    <Route  path="/profile" component={Pro}/>
</div>
    </Router>
  );
}

export default App;

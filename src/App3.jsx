import React from 'react';
import './App3.css';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import News from './components/news';
import Nav2 from './components/nav2';
import F from './components/form_proj';
import S from './components/signupform';
import A from './components/App7';
import W from './components/What';
import O from './components/open';
import H from './components/why';
import Nav3 from './components/nav3';
import Nav4 from './components/nav4';
import Nav6 from './components/authority_nav6';
import P from './components/profile';
function App() {
  return (
    <Router>
        
<div>
    <Nav2/> 

    <Route exact path="/" component={Home}/>
    <Route  path="/about" component={About}/>
    <Route  path="/news" component={News}/>
    <Route  path="/form_proj" component={F}/>
    <Route  path="/signupform" component={S}/>
    <Route  path="/App7" component={A}/>
    <Route  path="/open" component={O}/>
    <Route  path="/what" component={W}/>
    <Route  path="/why" component={H}/>
    <Route  path='/n' component={Nav3}/>
    <Route  path='/n1' component={Nav4}/>
    <Route  path='/n2' component={Nav6}/>
    <Route  path="/profile" component={P}/>
</div>
    </Router>
  );
}

export default App;

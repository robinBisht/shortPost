import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import MenuBar from './components/Menubar'
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';


function App() {
  return (
    <Router>
      <Container>
      <MenuBar />
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      </Container>
    </Router>
  );
}

export default App;

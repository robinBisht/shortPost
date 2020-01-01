import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import {AuthProvider} from './context/auth'
import AuthRoute from './utils/AuthRoute'

import MenuBar from './components/Menubar'
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';


function App() {
  return (
    <AuthProvider>
      <Router>
      <Container>
      <MenuBar />
      <Route exact path='/' component={Home}/>
      <AuthRoute exact path="/login" component={Login} />
      <AuthRoute exact path="/register" component={Register} />
      </Container>
    </Router>
    </AuthProvider>
  );
}

export default App;

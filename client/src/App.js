import React from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'


import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <h1>Acura</h1>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

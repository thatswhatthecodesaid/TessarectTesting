import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TestsCreate from './Components/TestsCreate/TestsCreate';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Navbar from './Components/UI_Components/Navbar/Navbar';
import Footer from './Components/UI_Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/create' component={TestsCreate} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


import Login from './Component/Login';
import Home from './Component/Home';
import Todos from './Component/Todos';
import Albums from './Component/Albums';
import Posts from './Component/Posts';
import Info from './Component/Info';
import Photos from './Component/Photos';
import Comments from './Component/Comments';


function App() {
  const [loggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('user')) != null);
  function handleClick() {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  }

  return (
    <Router>
      <>
      {/* navbar-expand-md */}
      {/* navbar-brand */}
      {/* navbar-toggler-icon */}
        <nav class="navbar  navbar-nav " data-toggle="collapse">
          <button onClick={handleClick}>Log out</button>
          <ul class="navbar-nav">
            <li  class="nav-item nav-link">
              <Link to="/" >Home</Link>
            </li>
            <li class="nav-item nav-link">
              <Link to="/login">Log-in</Link>
            </li>
            <li class="nav-item nav-link">
              <Link to="/todos">Todos</Link>
            </li>
            <li class="nav-item nav-link">
              <Link to="/albums">Albums</Link>
            </li>
            <li class="nav-item nav-link">
              <Link to="/posts">Posts</Link>
            </li>
            <li class="nav-item nav-link">
              <Link to="/info">Info</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              {loggedIn ? <Redirect to="/" /> : <Login setLogdIn={setIsLoggedIn} />}
            </Route>
            <Route path="/todos">
              {loggedIn ? <Todos /> : <Redirect to="/login" />}
            </Route>
            <Route path="/albums">
              {loggedIn ? <Albums /> : <Redirect to="/login" />}
            </Route>
            <Route path="/posts">
              {loggedIn ? <Posts /> : <Redirect to="/login" />}
            </Route>
            <Route path="/info">
              {loggedIn ? <Info /> : <Redirect to="/login" />}
            </Route>

            <Route path={'/Comments/:id'} component={Comments} />

            <Route path={'/Photos/:id'} component={Photos} />
          </Switch>
        </nav>
      </>
    </Router>
  )
}

export default App;
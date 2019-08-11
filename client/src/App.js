import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/Header';
import Search from './Components/Search';
import Profile from './Components/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Header/>
        <Route exact path="/" component={Search}/>
        <Route exact path="/profile/:platform/:gamertag" component={Profile}/>
      </div>
    </Router>
  );
}

export default App;

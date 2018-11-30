import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Helmet } from "react-helmet";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
	Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
			    <h1>Focus management when routing</h1>
        </header>
      </div>
    );
  }
}

export default App;

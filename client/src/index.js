import React from 'react';
import {Router, Route, BrowserHistory} from 'react-router'
//import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App.js';
import Login from './Login.js';
import Home from './home.js';
import Cart from './cart.js';
import Mas from './mas.js';
import Nav from './nav.js';
import Navbar from './navbar.js';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Nav />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

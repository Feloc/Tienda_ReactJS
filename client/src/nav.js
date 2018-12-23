import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Login from './Login'
import Home from './home'
import Cart from './cart'
import Mas from './mas'
import Navbar from "./navbar"


class Nav extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/mas" component={Mas} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default Nav;

import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'


class Navbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }

    render() {
        return (
          <nav class="navbar navbar-expand-lg navbar-light bg-light" >
              <div class="container-fluid">

                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item" className={this.getNavLinkClass("/")}><NavLink to="/home" >Home</NavLink>
                        <a class="nav-link" href="#"></a>
                      </li>
                      <li class="nav-item" className={this.getNavLinkClass("/")}><NavLink to="/cart" >Carrito</NavLink>
                        <a class="nav-link"></a>
                      </li>

                      <li class="nav-item" className={this.getNavLinkClass("/")}><NavLink to="/.." >Cerrar sesion</NavLink>
                        <a class="nav-link"> </a>
                      </li>

                    </ul>
                  </div>
              </div>
          </nav>
        )
    }
};
Navbar = withRouter(Navbar);

export default Navbar;

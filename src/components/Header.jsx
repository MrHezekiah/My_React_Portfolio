import React, { Fragment } from 'react';
import {NavLink as RRNavLink} from 'react-router-dom';
import {Nav, NavItem, NavLink} from 'reactstrap';

class Header extends React.Component{
  render(){
   return(
    <Fragment>
      <header>
        <Nav>
          <NavItem>
            <NavLink exact to ="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to ="/projects" actionClassName="active" tag={RRNavLink}>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to ="/about" actionClassName="active" tag={RRNavLink}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to ="/contact" actionClassName="active" tag={RRNavLink}>Contact</NavLink>
          </NavItem>
        </Nav>
      </header>
    </Fragment>

        )
    }
}


export default Header;

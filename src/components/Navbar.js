import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import withAuth from './withAuth.js';
import styled from 'styled-components'
import { withRouter } from "react-router";


const NavDivSC = styled.div`
  display:flex;
  justify-content: center;
  flex-direction:column;
  padding:20px 0 20px 0;
`
const MenuPSC = styled.p`
 font-size:15px;
 text-align:center;
 margin:0;
 color: #707070;

`

const LogoImgSC = styled.img`
  height: 25px;
  margin: 0;
`

class Navbar extends Component {
 
  render() {  
    const currentPath = this.props.location.pathname;
    return (
      <nav>
          <NavLink to='/vowls' activeClassName="selected">
            <NavDivSC>
                <div> 
                  {currentPath === '/vowls' ?
                  <LogoImgSC src="../images/Menu-icons/Vowl-icon-pink.png" alt=""/>
                  : <LogoImgSC src="../images/Menu-icons/Vowl-icon-grey.png" alt=""/>}
                </div>
                <MenuPSC>vowls</MenuPSC>
            </NavDivSC>
          </NavLink>

          <NavLink to='/foods' activeClassName="selected"> 
            <NavDivSC>
              <div>
                {currentPath === '/foods' ?
                <LogoImgSC src="../images/Menu-icons/Food-icon-pink.png" alt=""/>
                : <LogoImgSC src="../images/Menu-icons/Food-icon-grey.png" alt=""/>}
              </div>
              <MenuPSC>foods</MenuPSC>
            </NavDivSC>
          </NavLink>

          <NavLink to='/meals' activeClassName="selected">
            <NavDivSC>
              <div>
                {currentPath === '/meals' ?
                  <LogoImgSC src="../images/Menu-icons/Meal-icon-pink.png" alt=""/>
                  :<LogoImgSC src="../images/Menu-icons/Meal-icon-grey.png" alt=""/> }
              </div>
              <MenuPSC>meals</MenuPSC>
            </NavDivSC>
          </NavLink>

          <NavLink to='/profile' activeClassName="selected">
            <NavDivSC>
              <div>
                {currentPath === '/profile' ?
                  <LogoImgSC src="../images/Menu-icons/Profile-icon-pink.png" alt=""/>
                  : <LogoImgSC src="../images/Menu-icons/Profile-icon-grey.png" alt=""/>}
              </div>
              <MenuPSC>profile</MenuPSC>
            </NavDivSC>
          </NavLink>
      </nav>
    )
  }
}

export default withRouter(withAuth(Navbar));
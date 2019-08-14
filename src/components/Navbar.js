import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import withAuth from './withAuth.js';
import styled from 'styled-components'


const NavDivSC = styled.div`
  display:flex;
  justify-content: center;
  flex-direction:column;
  padding:30% 0 20% 0;
`
const MenuPSC = styled.p`
 font-size:15px;
 text-align:center;
 margin:1%;
 color: #707070;
`

const LogoImgSC = styled.img`
  height: 25px;
  margin: 0;
`

class Navbar extends Component {
  render() {  
    return (
      <nav>
          <NavLink to='/vowls'>
            <NavDivSC>
                <div>
                  <LogoImgSC src="../images/Menu-icons/Vowl-icon-grey.png" alt=""/>
                </div>
                <MenuPSC>vowls</MenuPSC>
            </NavDivSC>
          </NavLink>

          <NavLink to='/foods'>
            <NavDivSC>
              <div>
              <LogoImgSC src="../images/Menu-icons/Food-icon-grey.png" alt=""/>
              </div>
              <MenuPSC>foods</MenuPSC>
            </NavDivSC>
          </NavLink>

          <NavLink to='/meals'>
            <NavDivSC>
              <div>
              <LogoImgSC src="../images/Menu-icons/Meal-icon-grey.png" alt=""/>
              </div>
              <MenuPSC>meals</MenuPSC>
            </NavDivSC>
          </NavLink>

          <NavLink to='/profile'>
            <NavDivSC>
              <div>
              <LogoImgSC src="../images/Menu-icons/Profile-icon-grey.png" alt=""/>
              </div>
              <MenuPSC>profile</MenuPSC>
            </NavDivSC>
          </NavLink>
      </nav>
    )
  }
}

export default withAuth(Navbar);
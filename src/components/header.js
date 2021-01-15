import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa';
import { menuData } from '../data/MenuData'
import { Button } from "./Button";
import './styles/style.css';




const Header = () => {
  React.useEffect(() => {
        const menuT = document.getElementById("menu-logo");
        const mobileM = document.getElementById('testmy');
        menuT.addEventListener('click', () => {
         mobileM.classList.add("mobile-menu");
         console.log(mobileM.classList);
          document.querySelector('navMenu').classList.remove('mobiles');
  });
  })

  return (
  <>
    <Nav>
      <NavLink to='/' className="nav_logo">ALRAJHI MOSQUE</NavLink>
      <span id='menu-logo'>
      <Bars />
      </span>
      
      <NavMenu dir="rtl" className="test mobile" id="testmy">
       {menuData.map((menu, index) => (
         <NavLink to={menu.link} key={index} className="nav-link">
        {menu.title}
         </NavLink>
       ))}
      </NavMenu>
      <NavBtn>
        <Button primary='true' round='ture' to='/contributed'>ساهم</Button>
      </NavBtn>
    </Nav>
  </>

  )
}

export default Header


const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 1000;
  position: relative;

`

const NavLink = styled(Link)`
  color: #fff;
  display:flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

`

 const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width:768px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
  }
 `

 const NavMenu = styled.div`
 display: flex;
 align-items: center;


 @media screen and (max-width:768px) {
  display: none;
 }
 `
 const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right:24px;
  color: #fff;

  @media screen and (max-width:768px) {
    display: none;
  }
`
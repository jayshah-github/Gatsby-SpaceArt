import React , { useState,useEffect }from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import {menuData} from '../data/MenuData'
import { Button } from "./Button"
import {DiScala} from 'react-icons/di'

const NewHeader = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
console.log(props.bgChange)

useEffect(() => {
  if (navbarOpen) {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
  }
  return () => {
    document.body.style.overflow = 'unset';
    document.body.style.paddingRight = '0px';
  };
}, [navbarOpen]);

  return(
    <Nav bgChange={props.bgChange}>
      <NavLinkLogo to="/" ><SocialIcon/>SPACE ARTS</NavLinkLogo>
      <Bars onClick={() => setNavbarOpen(!navbarOpen)} />
       {navbarOpen ? (
         
        <Navbox>
            <ImCross css={`color:"#fff";margin:1rem;`} onClick={() => setNavbarOpen(!navbarOpen)}/>
            {menuData.map((item,index)=>(
            <NavLink  to={item.links} key={index} >{item.title}</NavLink>
          ))}
            {/* <NavBtn>
        <Button primary="true" round="true" to="/trips" >Book a Flight</Button>
      </NavBtn> */}
        </Navbox>
      ) : (
        
        <Navbox open>
            <NavMenu>
        {menuData.map((item,index)=>(
            <NavLink  to={item.links} key={index} >{item.title}</NavLink>
          ))}
      </NavMenu>
      {/* <NavBtn>
        <Button primary="true" round="true" to="/trips" >Consult Now</Button>
      </NavBtn> */}
        </Navbox>
      )}
      
    
    </Nav>
  )
}

export default NewHeader
const SocialIcon= styled(DiScala)`

transform:scale(1.2);
margin-right:10px;
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    background: #101522;
    justify-content: flex-start;
  
    transition: all 0.3s ease-in;
    color:#fff;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`
const Nav = styled.nav`

height:80px;
display:flex;
justify-content:space-between;
padding:0.5rem 0;
z-index:100;
margin:0 auto;
position:relative;

background: ${props => (props.bgChange ? "#101522" : "transparent")}; 

@media (max-width: 768px) {


padding:0 ;


}
`

const NavLinkLogo= styled(Link)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
margin-left:2rem;
margin-right:2rem;
height:100%;
@media screen and (max-width:768px){
    margin-left:1rem;
margin-right:1rem;
}
font-size:1.2rem;
cursor: pointer;

@media (max-width: 768px) {

  color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding:0.5rem ;
height:100%;

  }


`

const NavLink= styled(Link)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100%;
cursor: pointer;

@media (max-width: 768px) {

  color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding:0.5rem ;
height:18%;

  }


`

const Bars= styled(FaBars)`
display:none;
color:#fff;
transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};


@media screen and (max-width:768px){
  display:block;
  position:absolute;
  top:0;
  right:0;
  transform: translate(-100%,75%);
  font-size:1.8rem;
  cursor: pointer;
}

`

const NavMenu= styled.div`
display:flex;
align-items:center;
margin-right:2rem;
@media screen and (max-width:768px){
  display:none;
}

`

const NavBtn= styled.div`
display:flex;
align-items:center;
margin-right:24px;
@media screen and (max-width:768px){
  display:none;

}

`
import React, { Component } from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand"></img>

                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link"><span fontSize="20px">Pizzas</span></Link>
                            
                    </li>
                    <li className="nav-item ml-5">
                    <h1><span className="heading">The Yummi Pizza</span></h1>
                    </li>
                    
                    
                </ul>1q1

                <Link to='/cart' className="ml-auto">
                    <ButtonContainer cart style={{background:"white"}}>
                        
                        My cart
                    </ButtonContainer>
                </Link>

            </NavWrapper>
         );
    }
}

const NavWrapper=styled.nav`
background:var(--mainDark);
.nav-link{
    color:var(--lightBlue)!important;
    font-size:1.3rem;
    text-transform: capitalize;
}

.heading{
    color:var(--mainYellow) !important;
    font-size:2rem
    text-transform:capitalize;
    alignSelf:center;
    margin-left:10;
    text-align:center;
}
`
 
const ButtonContainer=styled.button`
text-transform: capitalize;
font-size: 1.4res;
background: transparent;
border:0.5rem solid
cursor:pointer
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--lightBlue);
    color:var(--mainBlue);
}
`
export default Navbar;

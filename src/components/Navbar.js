import React,{useContext} from 'react';
import {BookContext} from '../contexts/BookContext';
import styled from 'styled-components';

const NavbarStyled = styled.div`
    background: #6d3d6d;
    text-align: center; 
    color: white; 
    padding: 5px 10px; 


`

const Navbar = ()=> {
   const { books} = useContext(BookContext)

    return (
        <NavbarStyled>
            <h1> Book List </h1>
             <p>You have {books.length} books to read. </p>
        </NavbarStyled>
        
         
            
      
    )
}

export default Navbar;
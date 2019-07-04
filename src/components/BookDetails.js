import React,{useContext} from 'react';
import {BookContext} from '../contexts/BookContext';
import styled from 'styled-components';

const StyledBookEntry = styled.li`
    border-radius:4px; 
    width:90%;
    background: #704770; 
    padding:10px;
    margin:10px auto; 
    cursor:pointer; 
    :hover {
        opacity:0.7;
        background:#a06aa0; 
        text-decoration:line-through; 
    }
`

const StyledTitle = styled.div`
    font-weight:bold;
    color:#fff; 
    font-size:1.2em;
    `
const StyledAuthor = styled.div`
    color:#ddd; 
    font-size:0.9em;
    `



export default function BookDetails({book}) {

    const {dispatch} = useContext(BookContext)

    return (
        <StyledBookEntry onClick={()=>dispatch({type:"REMOVE_BOOK",id:book.id})}>
            <StyledTitle>{book.title}</StyledTitle>
            <StyledAuthor>{book.author}</StyledAuthor>     
        </StyledBookEntry>
    )
}

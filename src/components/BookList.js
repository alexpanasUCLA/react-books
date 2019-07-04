import React,{useContext} from 'react';
import {BookContext} from '../contexts/BookContext';
import BookDetails from './BookDetails';
import styled from 'styled-components';

const StyledUl = styled.ul`
    padding:5px;
    list-style-type: none; 
    background:#553055; 
`


export default function BookList() {
    const {books} = useContext(BookContext)
    return books.length? (
        <StyledUl>
        { books.map(book=>{
            return <BookDetails book={book} key={book.id}/>
        })}
        </StyledUl>
    ):(
     <div> There is no books to read.</div>
    )
}







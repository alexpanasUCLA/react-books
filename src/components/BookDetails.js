import React,{useContext} from 'react';
import {BookContext} from '../contexts/BookContext';

export default function BookDetails({book}) {

    const {removeBook} = useContext(BookContext)

    return (
        <li onClick={()=>removeBook(book.id)}>
            <div>{book.title}</div>
            <div>{book.author}</div>     
        </li>
    )
}

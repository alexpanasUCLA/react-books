import React,{useContext} from 'react';
import {BookContext} from '../contexts/BookContext';

export default function BookDetails({book}) {

    const {dispatch} = useContext(BookContext)

    return (
        <li onClick={()=>dispatch({type:"REMOVE_BOOK",id:book.id})}>
            <div>{book.title}</div>
            <div>{book.author}</div>     
        </li>
    )
}

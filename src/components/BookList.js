import React,{useContext} from 'react';
import {BookContext} from '../contexts/BookContext';
import BookDetails from './BookDetails';


export default function BookList() {
    const {books} = useContext(BookContext)
    return books.length? (
        <ul>
        { books.map(book=>{
            return <BookDetails book={book} key={book.id}/>
        })}
        </ul>
    ):(
     <div> There is no books to read.</div>
    )
}







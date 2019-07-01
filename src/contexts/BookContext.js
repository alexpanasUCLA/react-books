// Create context to share with app's components 

import React,{createContext,useState} from 'react'
import uuid from 'uuid/v1'

// Create and export BookContext with info on Books 

export const BookContext = createContext();


const BookContextProvider=(props) =>{

    // useState hook to keep data on books 
    const [books, setBooks] = useState([
        {title:'React' , author:'React author',id:0},
        {title:'Next.js' , author:'Next.js author',id:1},
    ])



    // method to add book to a state object books managed by setBooks
    const addBook = (title,author)=>{
        setBooks([...books,{title,author,id:uuid()}])
    }

    // method to remove book by using filter

    const removeBook =id=>{
        setBooks(books.filter(book=>book.id !== id))
    }

    return (
        <BookContext.Provider value={{books,addBook,removeBook}}> 
            {props.children}       
        </BookContext.Provider>
    )
}

export default BookContextProvider;

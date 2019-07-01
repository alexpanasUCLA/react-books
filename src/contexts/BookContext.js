// Create context to share with app's components 

import React,{createContext,useReducer} from 'react'
import {BookReducer} from '../reducers/BookReducer'

// Create and export BookContext with info on Books 

export const BookContext = createContext();


const BookContextProvider=(props) =>{

    const [books, dispatch] = useReducer(BookReducer,[])


    return (
        <BookContext.Provider value={{books,dispatch}}> 
            {props.children}       
        </BookContext.Provider>
    )
}

export default BookContextProvider;

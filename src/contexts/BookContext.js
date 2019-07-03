// Create context to share with app's components 

import React,{createContext,useReducer,useEffect} from 'react'
import {BookReducer} from '../reducers/BookReducer'

// Create and export BookContext with info on Books 

export const BookContext = createContext();

// Custom hook to enable use Reducer
const BookContextProvider=(props) =>{
    

    const [books, dispatch] = useReducer(BookReducer,[],
        ()=>{
            const localData = localStorage.getItem('books');
            return localData?JSON.parse(localData):[]
        })

    useEffect(() => {
        localStorage.setItem('books',JSON.stringify(books))
    }, [books])


    return (
        <BookContext.Provider value={{books,dispatch}}> 
            {props.children}       
        </BookContext.Provider>
    )
}

export default BookContextProvider;

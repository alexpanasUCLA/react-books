import React,{useState,useContext} from 'react';
import {BookContext} from '../contexts/BookContext';



export default function BookForm() {
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch({type:"ADD_BOOK",book:{title,author}})
        setTitle('')
        setAuthor('')

    }
   
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
            <input type="text" value={author} onChange={e=>setAuthor(e.target.value)}/>
            <button type="submit">Add new Book</button>


        </form>
    )
}

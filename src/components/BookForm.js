import React,{useState,useContext} from 'react';
import {BookContext} from '../contexts/BookContext';
import styled from 'styled-components';

const StyledForm = styled.form`
padding:20px; 
`
const StyledInputText = styled.input`
        width:100%;
        padding:10px;
        box-sizing:border-box;
        margin:6px 0;
        background:#3c1f3c; 
        color:white;
        font-size: 0.9em;
        border:0
`
  
  
const StyledButtonSubmit = styled.button`
        border-radius:50px;
        cursor:pointer; 
        background:linear-gradient(to top,#2a1b29,#a05d98,#553057);
        box-shadow: 0 15px 30px rgba(0,0,0,0.5);
        padding:8px 20px;
        margin:10px auto;
        color:white; 
        border: 1px solid #3c1f3c;
        display:block;
        font-size:0.9em;
        width:60%;
`


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
        <StyledForm onSubmit={handleSubmit}>
            <StyledInputText placeholder='Book title' type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
            <StyledInputText placeholder='Author' type="text" value={author} onChange={e=>setAuthor(e.target.value)}/>
            <StyledButtonSubmit type="submit">ADD BOOK</StyledButtonSubmit>
        </StyledForm>
    )
}

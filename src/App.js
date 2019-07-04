import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

const AppStyled = styled.div`
  background: #6d3d6d;
  margin: 20px auto; 
  width:90%; 
  max-width:600px; 
`

function App() {


  return (
    <AppStyled>
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <BookForm/>
      </BookContextProvider>  
    </AppStyled>
  );
}

export default App;

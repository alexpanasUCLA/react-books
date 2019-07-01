import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import BookList from './components/BookList';

const AppStyled = styled.div`
  background: green;
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
      </BookContextProvider>  
    </AppStyled>
  );
}

export default App;

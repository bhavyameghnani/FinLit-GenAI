// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import Feature from './components/Feature';
import ContentForm from './components/ContentForm';
import { Container } from '@mui/material';
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <Feature />
      <Container>
        <ContentForm />
      </Container>
    </div>
  );
};

export default App;

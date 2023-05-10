// import logo from './logo.svg';
import './App.css';

// import { useState } from 'react';
// import Header from './components/Header'
// import Footer from './components/Footer'

import{ Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;

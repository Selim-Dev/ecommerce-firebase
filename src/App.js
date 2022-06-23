import React, { Component } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import SigninAndSignUpPage from './pages/sign-in-and-signup/sign-in-and-signup.component';
const App = () => (
  <React.Fragment>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/signin" element={<SigninAndSignUpPage />} />
    </Routes>
  </React.Fragment>
);

export default App;

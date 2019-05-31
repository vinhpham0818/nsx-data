import React from 'react';
import logo from '../../asstes/images/logo.svg';
import './App.css';
import HeaderComp from '../../components/header-component/header-component';
import MainRouter from '../../router';
import ProductPage from '../product/product';

function App() {
  return (
    <div>
      <div className="main-header">
        <HeaderComp></HeaderComp>
        <MainRouter></MainRouter>
      </div>
    </div>
  );
}

export default App;

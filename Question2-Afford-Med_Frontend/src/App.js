import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductListing/ProductList'; // Assuming correct paths
import ProductDetail from './components/ProductDetails/ProductDetail'; // Corrected import

const App = () => {
  return (
    <ProductList />
  );
}

export default App;

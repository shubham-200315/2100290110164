// ProductList.js
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../Api'; // Import the fetchProducts function
import ProductCard from '../ProductCard';
import FilterBar from '../ProductFiltering/ProductFilter';
import Pagination from '../ProductPagination/Pagination';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const data = await fetchProducts(currentPage, filters); // Call fetchProducts from API
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProductsData();
  }, [currentPage, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <FilterBar onFilterChange={handleFilterChange} />
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}

export default ProductList;

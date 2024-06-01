import React, { useState } from 'react';
const ProductFilter = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        category: '',
        company: '',
        minPrice: '',
        maxPrice: '',
        minRating: '',
        available: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
          ...prevFilters,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onFilterChange(filters);
      };
    
  return (
    <form onSubmit={handleSubmit}>
    <input type="text" name="category" placeholder="Category" value={filters.category} onChange={handleChange} />
    <input type="text" name="company" placeholder="Company" value={filters.company} onChange={handleChange} />
    <input type="number" name="minPrice" placeholder="Min Price" value={filters.minPrice} onChange={handleChange} />
    <input type="number" name="maxPrice" placeholder="Max Price" value={filters.maxPrice} onChange={handleChange} />
    <input type="number" name="minRating" placeholder="Min Rating" value={filters.minRating} onChange={handleChange} />
    <select name="available" value={filters.available} onChange={handleChange}>
      <option value="">All</option>
      <option value="true">In Stock</option>
      <option value="false">Out of Stock</option>
    </select>
    <button type="submit">Apply Filters</button>
  </form>
  )
}

export default ProductFilter
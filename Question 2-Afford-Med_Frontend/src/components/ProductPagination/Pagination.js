import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handleClick = (page) => {
      onPageChange(page);
    };
  
    return (
      <div>
        {pageNumbers.map(page => (
          <button key={page} onClick={() => handleClick(page)}>{page}</button>
        ))}
      </div>
    );
}

export default Pagination
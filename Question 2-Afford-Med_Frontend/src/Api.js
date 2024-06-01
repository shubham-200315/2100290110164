

const API_BASE_URL = 'http://localhost:5000'; // Update with your actual API base URL

export const fetchProducts = async (page, filters) => {
  const queryParams = new URLSearchParams({
    n: 5,
    page,
    minPrice: filters.minPrice || '',
    maxPrice: filters.maxPrice || '',
    sortBy: filters.sortBy || '',
    order: filters.order || '',
    category: filters.category || '',
    company: filters.company || '',
    rating: filters.rating || '',
    availability: filters.availability || ''
  });

  const response = await fetch(`${API_BASE_URL}/categories/Laptop/products?${queryParams}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export const fetchProductDetails = async (productId) => {
  const response = await fetch(`${API_BASE_URL}/products/${productId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product details');
  }
  return response.json();
};

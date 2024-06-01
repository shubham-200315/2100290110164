import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/categories/Laptop/products?n=5&page=1&minPrice=500&maxPrice=10000&sortBy=price&order=asc",
          {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MjI5MjA2LCJpYXQiOjE3MTcyMjg5MDYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ0ODUxZGQ3LTk4Y2EtNGFjNS1iYTIzLWE3NDQyYTE1OTA2YiIsInN1YiI6InNodWJoYW0uMjEyNWNzaXQxMDcwQGtpZXQuZWR1In0sImNvbXBhbnlOYW1lIjoiS0lFVCBHcm91cCBPZiBJbnN0aXR1dGlvbiIsImNsaWVudElEIjoiZDQ4NTFkZDctOThjYS00YWM1LWJhMjMtYTc0NDJhMTU5MDZiIiwiY2xpZW50U2VjcmV0IjoiS3dtRnVKeUNMUUJtR2J2aSIsIm93bmVyTmFtZSI6IlNodWJoYW0gSmFpc3dhbCIsIm93bmVyRW1haWwiOiJzaHViaGFtLjIxMjVjc2l0MTA3MEBraWV0LmVkdSIsInJvbGxObyI6IjIxMDAyOTAxMTAxNjQifQ.YnWTX0HbGi6brKS4tO-YeroHYWU8P2uZCFBpKSE5AkA"
            }
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border rounded-md p-4">
            <h2 className="text-lg font-semibold mb-2">{product.productName}</h2>
            <p className="text-gray-700 mb-2">Price: ${product.price}</p>
            <p className="text-gray-700 mb-2">Rating: {product.rating}</p>
            <p className="text-gray-700 mb-2">Discount: {product.discount}%</p>
            <p className="text-gray-700 mb-2">Availability: {product.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

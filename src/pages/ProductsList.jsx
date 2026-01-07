import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='products-container'>
      {products.map(item => (
        <Link key={item.id} to={`/products/${item.id}`}>
          <img src={item.image} alt={item.title} />
        </Link>
      ))}
    </div>
  );
}

export default ProductsList;

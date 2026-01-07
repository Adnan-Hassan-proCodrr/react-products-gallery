import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{textAlign:'center', marginTop:'2rem'}}>Loading product...</p>;
  if (!product) return <p style={{textAlign:'center', marginTop:'2rem'}}>Product not found</p>;

  return (
    <div className='details-page'>
      <div className='product-card'>
        <img src={product.image} alt={product.title} />
      </div>
      <div className='product-detail'>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h3>Price: ${product.price}</h3>
        <p>Category: {product.category}</p>
      </div>
    </div>
  );
}

export default ProductDetailPage;

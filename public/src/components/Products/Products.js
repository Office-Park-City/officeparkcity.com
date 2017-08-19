import React from 'react';
import classNames from 'classnames';
import products from '../../settings/products';
import Product from './Product';

const Products = ({ addToCart }) => {

	const productList = products.map(product => <Product key={product.slug} product={product} addToCart={addToCart}/>)

  return (
		<ul style={{display:'flex', zIndex:1000, justifyContent:'space-around'}}>
			{productList}
		</ul>
  )
}

export default Products;

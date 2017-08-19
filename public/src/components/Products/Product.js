import React from 'react';
import classNames from 'classnames';

const Product = ({product, addToCart}) => {

	const handleClick = (product, quantity) => {

		return addToCart(product, quantity);
	}

  return (
	<div
		onClick={() => handleClick(product, 1)}
		key={product.slug}
		style={{border:'2px solid red'}}
		>
			{product.name} | {product.price}<br/>
		<img style={{objectFit:'cover', width:200, height:200}} src={product.images[0]}/>
	</div>
  )
}

export default Product;

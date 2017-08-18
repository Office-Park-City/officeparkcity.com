import React from 'react';
import classNames from 'classnames';
import products from '../../settings/products';

const Products = () => {

	const productList = products.map(product => <li key={product.slug}>{product.name} | {product.price}<br/><img style={{objectFit:'cover', width:200, height:200}} src={product.images[0]}/></li>)

  return (
		<ul style={{display:'flex'}}>
			{productList}
		</ul>
  )
}

export default Products;

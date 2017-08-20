import React from 'react';
import classNames from 'classnames';
import CartQuantity from './CartQuantity';

const CartItem = ({ item, deleteProduct, incrementProduct, decrementProduct }) => {

	const { product, quantity } = item;

	return (
		<li className="cart-list__item">
			<div className="cart-list__item-image">
				<img src={product.images[0]} />
			</div>
			<div className="cart-list__item-info">
				<div className="cart-list__item-title">{product.name}</div>
				<div onClick={() => deleteProduct(product.slug)} className="cart-list__item-delete">delete</div>
			</div>
			<div className="cart-list__item-numbers">
				<CartQuantity slug={product.slug} quantity={item.quantity} incrementProduct={incrementProduct} decrementProduct={decrementProduct} />
				<div className="cart-list__item-price">${((product.price / 100) * quantity ).toLocaleString('en', {currency: 'usd'})}</div>
			</div>
		</li>
	)
}

export default CartItem;
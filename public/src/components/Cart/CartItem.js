import React from 'react';
import classNames from 'classnames';

const CartItem = ({ item, deleteProduct }) => {

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
				<div className="cart-list__item-quantity-container">
					<div className="cart-list__item-quantity-inc">-</div>
					<div className="cart-list__item-quantity-value">{quantity}</div>
					<div className="cart-list__item-quantity-dec">+</div>
				</div>
				<div className="cart-list__item-price">${((product.price / 100) * quantity ).toLocaleString('en', {currency: 'usd'})}</div>
			</div>
		</li>
	)
}

export default CartItem;
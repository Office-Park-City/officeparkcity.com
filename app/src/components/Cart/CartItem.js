import React from 'react';
import classNames from 'classnames';

const CartItem = () => {

	return (
		<li className="cart-list__item">
			<div className="cart-list__item-image">
				<img src="http://common-room.net/site/wp-content/uploads/2014/03/artsforliving_release1.jpg" />
			</div>
			<div className="cart-list__item-info">
				<div className="cart-list__item-title">Office Park City Instructional Guide</div>
				<div className="cart-list__item-delete">delete</div>
			</div>
			<div className="cart-list__item-numbers">
				<div className="cart-list__item-quantity-container">
					<div className="cart-list__item-quantity-inc">-</div>
					<div className="cart-list__item-quantity-value">09</div>
					<div className="cart-list__item-quantity-dec">+</div>
				</div>
				<div className="cart-list__item-price">$12</div>
			</div>
		</li>
	)
}

export default CartItem;
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Cart = ({ pathname }) => {

	const cartClasses = classNames({
		sidebar: true,
		'sidebar--cart': true,
		'sidebar--inactive': pathname == '/checkout',
	})

	return (
		<div className={cartClasses}>
			<header className="sidebar-header__container sidebar-header__container--dark">
				<div className="sidebar-header__item">cart</div>
				<Link to="/" className="sidebar-header__item">close</Link>
			</header>
			<ul className="cart-list__container">
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
			</ul>
			<div className="cart-total__container">
				<div className="cart-total__amount">$79</div>
				<div className="cart-total__subscript">total</div>
			</div>
			<Link to='/checkout' className="sidebar-footer__container sidebar-footer__container--dark">
				<div className="sidebar-footer__text">checkout</div>
			</Link>
		</div>
	)
}

export default Cart;
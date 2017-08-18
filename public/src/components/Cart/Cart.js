import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

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
				<Link to="/" className="sidebar-header__item sidebar-header__item--close">close</Link>
			</header>
			<ul className="cart-list__container">
				<CartItem />
				<CartItem />
				<CartItem />
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
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Checkout = ({ pathname }) => {

	const checkoutClasses = classNames({
		sidebar: true,
		'sidebar--checkout': true,
		// 'sidebar--inactive': pathname == '/checkout',
	})

	return (
		<div className={checkoutClasses}>
			<header className="sidebar-header__container">
				<div className="sidebar-header__item">checkout</div>
				<Link to="/cart" className="sidebar-header__item">back</Link>
			</header>
			<div onClick={() => {}} className="sidebar-footer__container">
				<div className="sidebar-footer__text">order</div>
			</div>
		</div>
	)
}

export default Checkout;
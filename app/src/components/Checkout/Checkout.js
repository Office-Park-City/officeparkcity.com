import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import nameSVG from '../../images/smile.svg';
import calendarSVG from '../../images/calendar.svg';
import envelopeSVG from '../../images/envelope.svg';
import keySVG from '../../images/key.svg';
import cardSVG from '../../images/credit-card.svg';

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
			<form className="billing__container">
				<input style={{backgroundImage: `url(${nameSVG})`}} className="billing__input billing__input--margin billing__input--name" type="text" placeholder="Name" />
				<input style={{backgroundImage: `url(${envelopeSVG})`}} className="billing__input billing__input--email" type="email" placeholder="Email" />
				<fieldset className="billing__fieldset">
					<input style={{backgroundImage: `url(${cardSVG})`}} className="billing__input billing__input--card" type="text" placeholder="Card Number" />
					<input style={{backgroundImage: `url(${calendarSVG})`}} className="billing__input billing__input--half billing__input--date" type="text" placeholder="MM / YY" />
					<input style={{backgroundImage: `url(${keySVG})`}} className="billing__input billing__input--half billing__input--cvc" type="text" placeholder="CVC" />
				</fieldset>
			</form>
			<div onClick={() => {}} className="sidebar-footer__container">
				<div className="sidebar-footer__text">order</div>
			</div>
		</div>
	)
}

export default Checkout;
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import nameSVG from '../../images/smile.svg';
import calendarSVG from '../../images/calendar.svg';
import envelopeSVG from '../../images/envelope.svg';
import keySVG from '../../images/key.svg';
import cardSVG from '../../images/credit-card.svg';
import homeSVG from '../../images/home.svg';

const Checkout = ({ pathname }) => {

	const checkoutClasses = classNames({
		sidebar: true,
		'sidebar--checkout': true,
		// 'sidebar--inactive': pathname == '/checkout',
	})

	const handleCheckout = () => {
		const amount = 1000; // in cents
		const name = document.getElementById('input-name').value;
		const email = document.getElementById('input-email').value;
		const number = document.getElementById('input-number').value;
		const expiration = document.getElementById('input-expiration').value;
		const cvc = document.getElementById('input-cvc').value;

		const [exp_month, exp_year] = expiration.split('/');

		const checkoutBody = {
			amount,
			name,
			email,
			number,
			cvc,
			exp_month,
			exp_year
		};

		fetch('http://localhost:9000/checkout', {
			method: 'post',
			body: JSON.stringify(checkoutBody),
		  headers: {
		    'Accept': 'application/json, text/plain, */*',
		    'Content-Type': 'application/json'
		  }
		}).then(reponse => reponse.json()).then(json => {

			const isSuccess = json.status === 'succeeded';
		})

	}

	return (
		<div className={checkoutClasses}>
			<header className="sidebar-header__container">
				<div className="sidebar-header__item">checkout</div>
				<Link to="/cart" className="sidebar-header__item sidebar-header__item--close">back</Link>
			</header>
			<form className="billing__container">
				<input id="input-name" name="name" style={{backgroundImage: `url(${nameSVG})`}} className="billing__input billing__input--margin billing__input--name" type="text" placeholder="Name" />
				<input id="input-email" name="email" style={{backgroundImage: `url(${envelopeSVG})`}} className="billing__input billing__input--email" type="email" placeholder="Email" />
				<fieldset className="billing__fieldset">
					<input id="input-number" name="card-number" required style={{backgroundImage: `url(${cardSVG})`}} className="billing__input billing__input--card" type="text" placeholder="Card Number" />
					<input id="input-expiration" name="expiration" style={{backgroundImage: `url(${calendarSVG})`}} className="billing__input billing__input--half billing__input--date" type="text" placeholder="MM / YY" />
					<input id="input-cvc" name="cvc" style={{backgroundImage: `url(${keySVG})`}} className="billing__input billing__input--half billing__input--cvc" type="text" placeholder="CVC" />
				</fieldset>
				<input type="checkbox" defaultChecked name="newsletter" value="signup" /> <span className="billing__input--newsletter-label">Receive infrequent wacky newsletter</span>
				<fieldset className="billing__fieldset">
					<input style={{backgroundImage: `url(${homeSVG})`}} className="billing__input billing__input--card" type="text" placeholder="Street Address" />
					<div className="billing__input--thirds">
						<input className="billing__input billing__input--city billing__input--third" type="text" placeholder="City" />
						<input className="billing__input billing__input--third billing__input--state" type="text" placeholder="State" />
						<input className="billing__input billing__input--third billing__input--zip" type="text" placeholder="Zip" />
					</div>
				</fieldset>
				<input type="checkbox" name="pickup" value="pickup" /> <span className="billing__input--newsletter-label">Will pick up (no shipping)</span>
			</form>
			<div className="cart-total__container cart-total--billing">
				<div className="cart-total__amount">$79</div>
				<div className="cart-total__subscript">total</div>
			</div>
			<div onClick={() => handleCheckout()} className="sidebar-footer__container">
				<div className="sidebar-footer__text">order</div>
			</div>
		</div>
	)
}

export default Checkout;
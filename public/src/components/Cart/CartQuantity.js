import React from 'react';
import classNames from 'classnames';

const Quantity = ({ quantity, incrementProduct, decrementProduct, slug }) => {

	const decClasses = classNames({
		'cart-list__item-quantity-dec': true,
		'cart-list__item-quantity-dec--inactive': quantity <= 1,
	});

	const incClasses = classNames({
		'cart-list__item-quantity-inc': true,
		'cart-list__item-quantity-inc--inactive': quantity >= 5,
	});

	const handleClick = (direction, slug) => {
		return direction === 'dec' ? decrementProduct(slug) : incrementProduct(slug);
	}

  return (
	<div className="cart-list__item-quantity-container">
		<div onClick={() => handleClick('dec', slug)} className={decClasses}>-</div>
		<div className="cart-list__item-quantity-value">{quantity}</div>
		<div onClick={() => handleClick('inc', slug)} className={incClasses}>+</div>
	</div>
  )
}

export default Quantity;

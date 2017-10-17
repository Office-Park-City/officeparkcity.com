import React from 'react';

const Total = ({ cart }) => {

	if (cart.length < 1) { return null }

	console.log(cart[0].quantity);
	console.log(cart[0].product.price);

	const total = cart.reduce((total, item) => {
		console.log('item: ', item);
		console.log('quantity: ', item.quantity);
		console.log('price: ', item.product.price);
		console.log('total: ', total);
		return total + (item.quantity * item.product.price)
		}, 0 )

	console.log('total: ', total);

  return (
		<div className="cart-total__container">
			<div className="cart-total__amount">${(total / 100).toLocaleString('en', {currency: 'usd'})}</div>
			<div className="cart-total__subscript">total</div>
		</div>
  )
}

export default Total;

import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Products from '../Products/ProductsContainer';

const Main = ({pathname, history}) => {

	const mainClasses = classNames({
		main: true,
		'main--inactive': pathname !== '/'
	})

	const cartOptionClasses = classNames({
		'options__item': true,
		'options__item--inactive': pathname !== '/'
	})

	const handleClick = () => { pathname !== '/' ? history.push('/') : null}

  return (
  	<main onClick={() => handleClick()} className={mainClasses}>
  		www.officeparkcity.com
  		<div className="options__container">
  			<Link to='/cart' className={cartOptionClasses}>cart</Link>
  		</div>

  		<br/>
  		<br/>
  		<br/>

  		 <Products/>
  	</main>
  )
}

export default Main;

import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

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
  		Main Content
  		<div className="options__container">
  			<Link to='/cart' className={cartOptionClasses}>cart</Link>
  		</div>
  	</main>
  )
}

export default Main;

import React from 'react';
import classNames from 'classnames';
import { Link, Route } from 'react-router-dom';
import Nav from '../Nav/NavContainer';
import Products from '../Products/ProductsContainer';
import About from '../About/AboutContainer';
import Misc from '../Misc/MiscContainer';
import Home from '../Home/HomeContainer';
import Contact from '../Contact/ContactContainer';

const Main = ({pathname, history, preCommerceRoute}) => {

	const mainClasses = classNames({
		main: true,
		'main--inactive': ['/cart', '/checkout'].includes(pathname)
	})

	const cartOptionClasses = classNames({
		'options__item': true,
		'options__item--inactive': ['/cart', '/checkout'].includes(pathname)
	})

	const handleClick = () => { ['/cart', '/checkout'].includes(pathname) ? history.push(preCommerceRoute) : null}

  const routeComponent = {
    '/about': <About/>,
    '/products': <Products/>,
    '/misc': <Misc/>,
    '/contact': <Contact/>,
    '/': <Home/>
  }

  return (
  	<main onClick={() => handleClick()} className={mainClasses}>
  		<Nav />
  		<div className="options__container">
  			<Link to='/cart' className={cartOptionClasses}>cart</Link>
  		</div>

      <br/>
      <br/>
      <br/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/products" component={Products}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/misc" component={Misc}/>
      <Route path="/cart" render={() => routeComponent[preCommerceRoute]}/>
  	</main>
  )
}

export default Main;

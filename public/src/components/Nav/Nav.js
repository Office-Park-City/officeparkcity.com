import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <div className="nav__container">
      <h1 className="nav__title"><Link to={`/`}>www.officeparkcity.com</Link></h1>
      <ul className="nav__primary">
        <li className="nav__list-item"><Link to={`/about`}>about</Link></li>
        <li className="nav__list-item"><Link to={`/products`}>products</Link></li>
        <li className="nav__list-item"><Link to={`/contact`}>contact</Link></li>
        <li className="nav__list-item"><Link to={`/misc`}>misc</Link></li>
      </ul>
    </div>
  );
}

export default Nav;

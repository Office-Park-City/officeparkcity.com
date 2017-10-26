import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <div>
      <h1><Link to={`/`}>www.officeparkcity.com</Link></h1>
      <ul>
        <li><Link to={`/about`}>about</Link></li>
        <li><Link to={`/products`}>products</Link></li>
        <li><Link to={`/contact`}>contact</Link></li>
        <li><Link to={`/misc`}>misc</Link></li>
      </ul>
    </div>
  );
}

export default Nav;

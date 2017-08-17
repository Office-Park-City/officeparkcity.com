import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Cart from '../Cart/CartContainer';

import '../../styles/styles.scss';

const App = () => {

  return (
    <div>
      App
      <Switch>
      	<Route path='/cart' component={Cart} />
      	<Redirect to='/' />
      </Switch>
    </div>
  )
}

export default App;

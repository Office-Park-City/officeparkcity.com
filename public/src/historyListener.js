import { preCommerceRoute } from './actions/actions';
import createHistory from 'history/createBrowserHistory'

const historyListener = store => {

	const history = createHistory();

	// Listen to changes on history for cart / checkout back functionality
	history.listen((location, action) => {

		const {pathname} = location;

	  const commerceRoutes = ['/cart', '/checkout'];

	  if (!commerceRoutes.includes(pathname)) {

	  	return store.dispatch(preCommerceRoute(pathname));
	  }
	});

	return history;
}

export default historyListener;

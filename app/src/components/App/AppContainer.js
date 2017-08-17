import { connect } from 'react-redux';
import { toggleSetting } from '../../actions/actions';
import App from './App';

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSetting: () => {
      dispatch(toggleSetting());
    },
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;

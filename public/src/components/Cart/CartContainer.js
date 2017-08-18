import { connect } from 'react-redux';
import { toggleSetting } from '../../actions/actions';
import Cart from './Cart';

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

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartContainer;

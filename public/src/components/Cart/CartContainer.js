import { connect } from 'react-redux';
import { toggleSetting, deleteProduct, decrementProduct, incrementProduct } from '../../actions/actions';
import Cart from './Cart';

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (slug) => {
      dispatch(deleteProduct(slug));
    },
    decrementProduct: (slug) => {
      dispatch(decrementProduct(slug));
    },
    incrementProduct: (slug) => {
      dispatch(incrementProduct(slug));
    },

  };
};

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartContainer;

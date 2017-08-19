import { connect } from 'react-redux';
import { toggleSetting, deleteProduct } from '../../actions/actions';
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
  };
};

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartContainer;

import { connect } from 'react-redux';
import { toggleSetting } from '../../actions/actions';
import Checkout from './Checkout';

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

const CheckoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);

export default CheckoutContainer;

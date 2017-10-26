import { connect } from 'react-redux';
import { toggleSetting } from '../../actions/actions';
import Contact from './Contact';

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

const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);

export default ContactContainer;

import { connect } from 'react-redux';
import { toggleSetting } from '../../actions/actions';
import Misc from './Misc';

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

const MiscContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Misc);

export default MiscContainer;

import { connect } from 'react-redux';
import { toggleSetting } from '../../actions/actions';
import Home from './Home';

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

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;

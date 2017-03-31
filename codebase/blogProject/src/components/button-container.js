import Button from './button';
import { connect } from 'react-redux';
import { changeHeaderContent } from '../action/actions';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBtnClick:() => {
      dispatch(changeHeaderContent('header changed!'));
    }
  };
}

const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default ButtonContainer;
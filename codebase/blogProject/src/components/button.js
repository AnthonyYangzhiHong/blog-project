import React, { PropTypes } from 'react';

const Button = (props) => {
  return (
    <button onClick={props.onBtnClick}>
      Click to change Header
    </button>
  );
}

Button.propTypes = {
  onBtnClick: PropTypes.func,
};

export default Button;
import React, { PropTypes } from 'react';

cosnt StreamingComponent = (props) => {
  return(
    <div>
      {props.data}
    </div>
  )
}

StreamingComponent.propTypes = {
  data: PropTypes.string,
}

export default StreamingComponent;
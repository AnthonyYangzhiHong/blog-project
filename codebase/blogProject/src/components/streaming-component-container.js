import StreamingComponent from './streaming-component';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    data: state.streamingComponent.data,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

const StreamingComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamingComponent);

export default StreamingComponentContainer;
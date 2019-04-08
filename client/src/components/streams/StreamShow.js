import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchOneStream } from '../../actions';


class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }
  componentDidMount () {
    const { id } = this.props.match.params;

    this.props.fetchOneStream(id);
    this.buildPLayer();
  }

  componentDidUpdate() {
    this.buildPLayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPLayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }
  
  render() {
    if(!this.props.stream) return null;
    const { title, description } = this.props.stream;
    return (
        <div>
          <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  
  return {stream: state.streams[id]};
}

export default connect(mapStateToProps, { fetchOneStream })(StreamShow);
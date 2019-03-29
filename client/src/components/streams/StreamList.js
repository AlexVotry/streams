import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllStreams } from '../../actions';

class StreamList extends Component {

    componentDidMount() {
        this.props.fetchAllStreams();
    }

    renderList() {
        const streams = this.props.streams;
        return streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>Streams:</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ streams }) => {
    return { streams: Object.values(streams)};
}


export default connect(mapStateToProps, { fetchAllStreams })(StreamList);
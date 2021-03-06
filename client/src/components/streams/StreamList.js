import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllStreams } from '../../actions';

class StreamList extends Component {

    componentDidMount() {
        this.props.fetchAllStreams();
    }

    renderButtons(stream) {
        if (this.props.currentUserId === stream.userId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }
    }

    renderList() {
        const streams = this.props.streams;
        return streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderButtons(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}` } className="header">{stream.title}</Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <Link to="/streams/new">
                    <button className="ui button primary" style={{ textAlign: 'right'}}>
                        Create Stream
                    </button>
                </Link>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Streams:</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}


export default connect(mapStateToProps, { fetchAllStreams })(StreamList);
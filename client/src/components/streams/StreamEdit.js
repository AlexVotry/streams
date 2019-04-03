import React from 'react';
import { connect } from 'react-redux';
import { fetchOneStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

    componentDidMount() {
        if (!this.props.stream) {
            this.props.fetchOneStream(this.props.match.params.id);
        }
    }

    onSubmit = (formValues) => {
        console.log(formValues);
    }

    render() {
        if(!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                    initialValues={ this.props.stream } 
                    onSubmit={this.onSubmit} 
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return { stream: state.streams[id] };
}

export default connect(
    mapStateToProps, 
    { fetchOneStream, editStream }
)(StreamEdit);
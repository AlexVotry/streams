import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {

    renderInput({ input, label }) {
        // {input} is from formProps.input
        // formProps comes from the Field component props.
        
        return (
            <div className="ui form">
                <label>{label}</label>
                <input {...input} />
            </div>
        )
    }

    render() {
        return (
            <form>
                <Field name="title" label="Enter Title" component={this.renderInput} />
                <Field name="description" label="Enter Description" component={this.renderInput} />
            </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);
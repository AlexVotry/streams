import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {

    renderInput({ input, label }) {
        // {input} is from formProps.input
        // formProps comes from the Field component props.
        console.log('input:',input);
        
        return (
            <div>
                <label>{label}</label>
                <input {...input} />
            </div>
        )
    }

    onSubmit(formValues) {
        validate(formValues);
        console.log(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" label="Enter Title" component={this.renderInput} />
                <Field name="description" label="Enter Description" component={this.renderInput} />
                <button className="primary" type="submit">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    for (const key of formValues) {
        if(!formValues[key]) {
            errors[key] = `You must enter a ${key}`;
        }
    }

    return errors;
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);
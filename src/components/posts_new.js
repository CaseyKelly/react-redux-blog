import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        {field.meta.error}
      </div>
    );
  }

  onSubmit(values) {

  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Go Back to Posts
          </Link>
        </div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="title"
            component={this.renderField}
            label="Title For Post"
          />
          <Field
            name="categories"
            component={this.renderField}
            label="Categories"
          />
          <Field
            name="content"
            component={this.renderField}
            label="Post Content"
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(PostsNew);

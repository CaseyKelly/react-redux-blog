import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Go Back to Posts
          </Link>
        </div>
        <form>
          <Field 
            name="title"
            component={}
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "PostsNewForm"
})(PostsNew);

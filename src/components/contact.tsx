import * as React from "react";
import { Component } from "react";

export class Contact extends Component {
  public render(): React.ReactNode {
    return (
      <div className="blog">
        <h2>Contact Me.</h2>
        <p>LinkedIn: <code><a href="https://www.linkedin.com/in/paul-hawkins-2b44321a/">Paul Hawkins</a></code></p>
        <p>email: <code><a href="mailto:paulhawkins123@gmail.com">paulhawkins123@gmail.com</a></code>.</p>
        <p>Github username: <code><a href="http://github.com/hawkie">Hawkie</a></code>.</p>
      </div>
    );
  }
}

export default Contact;

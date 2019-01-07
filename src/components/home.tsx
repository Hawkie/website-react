import * as React from "react";
import { Component } from "react";

class Home extends Component {
  public render(): React.ReactNode {
    return (
      <div className="blog">
        <h2>Overview</h2>
        <p>Welcome to Paul Hawkins' profile website.</p>
        <h5>Mission</h5>
        <p>The aim of this website is not only to demonstrate technology
          and practice it for fun, but also to share my interests and views with other parties
          who may learn from it and promote discussion for mutual benefit.</p>
          <p>This web page itself is built on react and is being hosted for free by the fabulous&nbsp;
            <a href="http://www.netlify.com">Netlify team</a> who have the perfect setup
            for modern website development and deployment. My code is on&nbsp;
            <a href="http://github.com/Hawkie/website-react">http://github.com/Hawkie/website-react</a>
          </p>
          <p>This page is in development. I aim to add a domainname and a blog / article page and useful links.</p>
          <h5>Background</h5>
          <p>I am an experienced developer, with over twenty six years of development, analysis and management practice.
          For twenty one years I have been working in a London investment banking environment.
          I am currently focusing on web applications and cloud technology.</p>
      </div>
    );
  }
}

export default Home;

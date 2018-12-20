import * as React from "react";
import { Component } from "react";

interface IProps {
  myText: string;
}

interface IState {
  s: string;
}

export class HelloComponent extends Component<IProps, IState> {

  constructor(props) {
    super(props);
  }

public render() {
  return (
      <div>{this.props.myText}</div>
    );
  }
}

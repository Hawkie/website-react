import * as React from "react";
import { Component } from "react";

interface IProps {
  date: string;
  title: string;
  description: string;
  technology: string;
  screenshotUrl: string;
  link: string;
  codelink: string;
}

export class ProductComponent extends Component<IProps> {

  constructor(props: IProps) {
    super(props);
  }

public render(): React.ReactNode {
  return (
      <div className="product">
        <h5>{this.props.title}</h5>
        <p>{this.props.description}</p>
        <p>Start Date: {this.props.date}</p>
        <p>Tech: {this.props.technology}</p>
        <p>
        <a href={this.props.link}>
          <img src={this.props.screenshotUrl} height="200px"></img>
          <p>Link: {this.props.link}</p>
        </a>
        </p>
        <p>Github: <a href={this.props.codelink}>{this.props.codelink}</a></p>
      </div>
    );
  }
}

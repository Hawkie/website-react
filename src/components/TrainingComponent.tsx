import * as React from "react";
import { Component } from "react";

interface IProps {
  title: string;
  description: string;
  date: string;
  by: string;

}

export class TrainingComponent extends Component<IProps> {

  constructor(props: IProps) {
    super(props);
  }

public render(): React.ReactNode {
  return (
      <div className="training">
        <h5>{this.props.title}</h5>
        <p>{this.props.description}</p>
        <p>Date: {this.props.date}</p>
        <p>By: {this.props.by}</p>
      </div>
    );
  }
}

import * as React from "react";
import { Component } from "react";
import { Button } from "reactstrap";

export class Projects extends Component {
  public render(): React.ReactNode {
    return (
      <div>
        <Button color="danger" onClick={click}>hit me</Button>
        <h2>Projects</h2>
        <p>My development projects:</p>
        <ol>
          <li>Create Art website and shopping basket</li>
          <li>Create Home Wiki</li>
          <li>Begin Augmented Reality app for multiplay boardgame</li>
          <li>Publish Boardgame{" "}</li>
        </ol>
        <ol>
            <li>Web Library: multiplayer game server (use swagger)</li>
            <li>Web Library: include 3d</li>
        </ol>
      </div>
    );
  }
}

function click(): void {
  // tslint:disable-next-line:no-console
  console.log("jd");
}

export default Projects;

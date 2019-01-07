import * as React from "react";
import { Component } from "react";
import { ProductComponent } from "./ProductComponent";

export class Products extends Component {
  public render(): React.ReactNode {
    return (
      <div>
      <h2>Products Built</h2>
      <p>My development projects:</p>
      <div className="products">
        <ProductComponent
          date="2019"
          title="AJH Gallery"
          description="Website for displaying art and crafts online"
          technology="React, Typescript, MongoDB"
          screenshotUrl="/res/img/ajh-gallery-paintings.png"
          link="http://ajh-gallery.netlify.com"
          codelink=""
          ></ProductComponent>
          <ProductComponent
          date="2018"
          title="Air Rider"
          description="Web game for programming jam (Ludum Dare 43) using own typescript framework.
          Hosted on itch.io in Nov 2018"
          technology="Typescript, Html5 canvas"
          screenshotUrl="/res/img/AirRider-menu.png"
          link="http://hawkie123.itch.io/air-rider"
          codelink="http://github.com/hawkie/ludumdare43">
          </ProductComponent>
          <ProductComponent
            date="2017"
            title="Space Command"
            description="Web game project using own typescript framework.&nbsp;
            Hosted on Hostinger in Feb 2018"
            technology="Typescript, Html5 canvas"
            screenshotUrl="/res/img/SpaceCommand-Asteroids.png"
            link="https://hawkie123.itch.io/space-command"
            codelink="http://github.com/hawkie/weblib">
          </ProductComponent>
          <ProductComponent
            date="2008"
            title="Suduko and samari solver"
            description="Desktop application and general logic rule framework for solving logical&nbsp;
            puzzles using elimination and deduction rules. Download and build in visual studio."
            technology="C# and WPF"
            screenshotUrl="/res/img/Solver-fiendishPuzzleSolved.png"
            link="http://github.com/hawkie/solver"
            codelink="http://github.com/hawkie/solver">
            </ProductComponent>
      </div>
      </div>
    );
  }
}

export default Products;

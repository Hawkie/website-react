import * as React from "react";
import { Component } from "react";
import { ProductComponent } from "./ProductComponent";

export class Products extends Component {
  public render(): React.ReactNode {
    return (
      <div>
        <h2>Products Built</h2>
        <p>My development projects:</p>
        <ul><ProductComponent
          date="2019"
          title="Website for AJH Gallery"
          description="Website for displaying art and crafts online"
          technology="React, Typescript, MongoDB"
          screenshotUrl="/res/img/ajh-gallery-paintings.png"
          link="http://ajh-gallery.netlify.com"
          codelink=""
          ></ProductComponent>
          <ProductComponent
          date="2018"
          title="AirRider Web Game for Code Jam"
          description="Web game using own typescript framework.
          Hosted in Nov 2018 itch.io for programming jam (Ludum Dare 43)"
          technology="Typescript"
          screenshotUrl="/res/img/AirRider-menu.png"
          link="http://hawkie123.itch.io/air-rider"
          codelink="http://github.com/hawkie/ludumdare43">
          </ProductComponent>
          <ProductComponent
            date="2017"
            title="Space Command Web Game"
            description="Web game using own typescript framework
            Hosted in Oct 2018 "
            technology="Typescript"
            screenshotUrl="/res/img/SpaceCommand-Asteroids.png"
            link="http://spacecommand.000webhostapp.com/"
            codelink="http://github.com/hawkie/spacecommand">
          </ProductComponent>

          <ProductComponent
            date="2008"
            title="Suduko and Samari Solver desktop application"
            description="Desktop Solver application using general framework for solving logic,
            logical puzzles using elimination and deduction rules."
            technology="C# and WPF"
            screenshotUrl="/res/img/Solver-fiendishPuzzleSolved.png"
            link=""
            codelink="http://github.com/hawkie/solver">
            </ProductComponent>
        </ul>
      </div>
    );
  }
}

export default Products;

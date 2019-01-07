import * as React from "react";
import { Component } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Contact from "./contact";
import Home from "./home";
import Products from "./products";
import TrainingLog from "./TrainingLog";

export class Main extends Component {
  public render(): React.ReactNode {
    return (
        <BrowserRouter>
        <div>
          <h1>Paul Hawkins</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/training">Training Log</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path="/training" component={TrainingLog}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </BrowserRouter>
    );
  }
}

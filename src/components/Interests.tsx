import * as React from "react";
import { Component } from "react";

export class Interests extends Component {
  public render(): React.ReactNode {
    return (
      <div className="blog">
      <h2>Interests</h2>
      <p>A snippet of what I have done in my spare time.</p>
        <ul>
            <li>2018: Built Mountain Bike from components</li>
            <li>2017: Built and hosted html5 web games: asteroids and lander. (Typescript, html 5, Canvas).</li>
            <li>2014: Qualified as Bridge Master one star on <a href="https://www.bridgeclublive.com/">
            http://www.bridgeclublive.com</a></li>
            <li>2012: Volunteered to teach year six pupils over ten weeks;&nbsp;
                The power of programming on the Raspberry Pi (at Kobi Nazrul School London)</li>
            <li>2011: Automatic Bridge Report Generator (C#)</li>
            <li>2011: Built Low Power Consumption Media PC</li>
            <li>2009: Built and Hosted Version 1.0 of Website for Groombridge Pre School&nbsp;
                <a href="https://groombridgepreschool.webs.com">https://groombridgepreschool.webs.com/</a></li>
            <li>2008: Built Sudoku Generator and Solver (C#/WPF)</li>
            <li>Competitive Cycling, Triathlons (Olympic PB = 2:38 at Bala)</li>
            <li>Squash, Mountain biking and canoeing – learnt eskimo roll in 20 minutes</li>
            <li>AI, Machine Learning, Data Science (TED.com)</li>
        </ul>
    </div>);
  }
}

export default Interests;

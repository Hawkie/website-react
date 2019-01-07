import * as React from "react";
import { Component } from "react";

export class TrainingLog extends Component {
  public render(): React.ReactNode {
    return (
      <div className="blog">
        <h2>Training Log</h2>
        <p>A grouped and chronological list of my training history</p>
          <h5>Management</h5>
          <ul>
          <li>2017: Leadership Training – Ross McEwan’s RBS Determined to Lead.</li>
          <li>2010: Scrum Master by the <a href="https://www.scrumalliance.org/">
          Scrum Alliance</a> with Jeffrey Sutherland.</li>
          </ul>
          <h5>Analysis:</h5>
          <ul>
          <li>2015: RBS Business Analysis / Requirement Documentation (Gap Analysis)</li>
          <li>2015: RBS Business Process Modelling (<a href="https://elements.cloud/2016/06/01/upn/">UPN</a>, BPMN)</li>
          <li>2015: RBS Internal - Quantifying Process Models</li>
          </ul>
          <h5>Business:</h5>
          <ul>
            <li>2018: International Organisation for Securities Commodities (IOSCO) – Index Administration.</li>
            <li>Quarterly RBS Anti-Money Laundering Training, RBS Inclusion Training, RBS Whistleblowing</li>
            <li>Internal Derivative Business Awareness</li>
            <li>Advanced Equity Derivative Products by CIFT</li>
            <li>Intermediate Equity Derivative Products by CIFT</li>
            <li>Introduction to Derivative Products by CIFT</li>
            <li>Introduction to the Financial Markets by Profile</li>
            <li>Dodd-Frank and the Volcker Rule by RBS</li>
            </ul>
            <h5>Technical:</h5>
            <ul>
            <li>Plural sight (Web API, NodeJS, WCF).</li>
            <li>RBS Data Analyst Awareness Talk from Google (Hadoop)</li>
            <li>2013: Web Development – Angular 1 / Javascript.</li>
            <li>2010: Test Driven Development by Skill Matter with Damjan Vujnovic</li>
            <li>ASP.NET 2.0 MVC by FDM</li>
            <li>Microsoft Certified by QA Windows Presentation Foundation (WPF)</li>
            <li>.NET Advanced by QA</li>
            <li>2008: SQL Server Programming – RBS Internal Course</li>
            <li>1999: Porting Unix Applications to Windows NT – QA</li>
            <li>1997: Infinity Developers Course</li>
            </ul>
            <h5>Interpersonal:</h5>
            <ul>
            <li>2017: Profile: Gallup Survey - Clifton Strength. (Achiever / Command).</li>
            <li>Achieving Personal Excellence by Personality Profiles.</li>
            <li>2009: RBS Internal Offsites team building</li>
            <li>2005: Goal Getting, Influence and Persuade by Mind Align</li>
            </ul>
      </div>
    );
  }
}

export default TrainingLog;

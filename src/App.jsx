import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top mt-2 radius">
          <div className="container-fluid">
            <a className="navbar-brand name-1">Frank Were</a>
          </div>

          <div className="Nav-style ">
            <a className="navbar-brand name  " href="#">
              Home
            </a>
            <a className="navbar-brand name " href="#">
              Tech Stack
            </a>
            <a className="navbar-brand name " href="#">
              Community
            </a>
            <a className="navbar-brand name " href="#">
              Education
            </a>
            <a className="navbar-brand name " href="#">
              Experience
            </a>
            <a className="navbar-brand name " href="#">
              Projects
            </a>
          </div>
        </nav>
      </div>

      <div></div>
    </div>
  );
}

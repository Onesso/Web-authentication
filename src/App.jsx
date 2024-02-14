import React from "react";
import { useState } from "react";
import "./style.css";
import { Toggle } from "./components/toggle.jsx";
import useLocalStorage from "use-local-storage";

export default function App() {
  const preference = window.matchMedia("(prefers-color-schema: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", false); //using local storage to save the theme
  return (
    <>
      <div className="full">
        <div>
          <nav className="nav">
            <div>
              <p className="nav frank">FRANK WERE</p>
            </div>

            <div>
              <ul className="stylo">
                <li>
                  <a id="home-anchor" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a id="stack-anchor" href="#">
                    Tech-stack
                  </a>
                </li>
                <li>
                  {" "}
                  <a id="comm-anchor" href="#">
                    Community
                  </a>
                </li>
                <li>
                  <a id="Edu-anchor" href="#">
                    Education
                  </a>
                </li>
                <li>
                  <a id="Expe-anchor" href="#">
                    Experience
                  </a>
                </li>
                <li>
                  <a id="projo-anchor" href="#">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="App" data-theme={isDark ? "dark" : "light"}>
          <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />

          <h1 className="title">Hello world</h1>
          <div className="box">
            <h2>This is a box</h2>
          </div>
        </div>
      </div>
    </>
  );
}

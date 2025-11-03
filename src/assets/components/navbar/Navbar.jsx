import React from "react";
import "./Navbar.css";
export function Navbar() {
  return (
    <div id="navbar">
      <h2>MY PORTFOLIO</h2>
      <div className="underline">
        <a
          href="#header"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#header").scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Home
        </a>
        <a
          href="#examples"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#examples").scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          projects
        </a>
        <a
          href="#core-concepts"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#core-concepts").scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Skills
        </a>

        <a
          href="#contact"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact").scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          contact
        </a>
      </div>
    </div>
  );
}

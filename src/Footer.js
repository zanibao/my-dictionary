import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <small className="App-footer">
      This project was coded by{" "}
      <a
        href="https://www.linkedin.com/in/anazanibao/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ana Paula Zanibão
      </a>
      , and is{" "}
      <a
        href="https://github.com/zanibao/my-dictionary"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-sourced on GitHub
      </a>
      .
    </small>
  );
}

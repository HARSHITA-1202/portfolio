// Example.jsx
import React, { useState } from "react";
import { EXAMPLES } from "../../../../data.js";
import Button from "./Button.jsx"; // default import (fixed)
import "./Example.css";

export function Example() {
  const [content, setContent] = useState(null);

  function handleClick(selected) {
    setContent(selected);
  }

  return (
    <>
      <section id="examples">
        <h2>projects</h2>
        <menu>
          <Button
            isSelected={content === "docmed"}
            onSelect={() => handleClick("docmed")}
          >
            Docmed
          </Button>

          <Button
            isSelected={content === "webvital"}
            onSelect={() => handleClick("webvital")}
          >
            Webvitals
          </Button>

          <Button
            isSelected={content === "chatbot"}
            onSelect={() => handleClick("chatbot")}
          >
            Ai TB Daignosis
          </Button>
        </menu>

        {content ? (
          <div id="content">
            <h3>{EXAMPLES[content].title}</h3>
            <p>{EXAMPLES[content].description}</p>
            <pre>
              <a
                href={EXAMPLES[content].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 View Project on GitHub
              </a>
            </pre>
          </div>
        ) : (
          <p>please select a project</p>
        )}
      </section>
    </>
  );
}

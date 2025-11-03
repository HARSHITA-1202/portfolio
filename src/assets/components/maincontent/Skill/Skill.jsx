import { CoreConcept } from "../../../../concepts.jsx";
import cores from "../../../../data.js";
import "./Skill.css";

export function Skill() {
  return (
    <section id="core-concepts">
      <h2>SKILLS</h2>
      <ul>
        {cores.map((concept, index) => (
          <CoreConcept
            key={index}
            description={concept.description}
            image={concept.image}
          />
        ))}
      </ul>
    </section>
  );
}

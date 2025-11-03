import "./Footer.css";
import endpic from "../../endpic.jpeg";
export function Footer() {
  return (
    <section id="contact">
      <div className="contacter">
        <h2>
          <b>P R Harshita</b>
        </h2>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/HARSHITA-1202"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/HARSHITA-1202"
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/prharshita18/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/prharshita18/
          </a>
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="harshakulkarni2367@gmail.com">
            harshakulkarni2367@gmail.com
          </a>
        </p>

        <p>
          <strong>Phone:</strong> <a href="tel:+919110208594">+91 9110208594</a>
        </p>

        <p>
          <strong>Address:</strong> Davanagere 577006
        </p>
      </div>
      <div id="pic">
        <img src={endpic} />
      </div>
    </section>
  );
}

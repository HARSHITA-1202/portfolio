import python from "./assets/python.webp";
import reactt from "./assets/react.svg";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import sql from "./assets/sql.png";

const CORE_CONCEPTS = [
  {
    image: python,
    title: "Python",
    description:
      "A versatile and beginner-friendly language I learned for logic building, data handling, and automation. I’ve practiced using loops, functions, OOP concepts, file handling, and libraries for real-world problem solving..",
  },
  {
    image: reactt,
    title: "React",
    description:
      "A powerful JavaScript library I use to build dynamic UIs. I’ve learned about virtual DOM, component function, props, children, event handling, (state management by useState), conditional rendering with ternary,if,&&operators, and fragments..",
  },
  {
    image: html,
    title: "Html5",
    description:
      "The backbone of web structure. I’ve learned semantic tags, forms, inline and block elements, header tags, video and iframe embedding, and the use of labels for better accessibility and forms SEO{og tags}",
  },
  {
    image: css,
    title: "css3",
    description:
      "The styling language that brings web pages to life. I’ve practiced Flexbox, Grid layout, animations, transitions, rem units, positions, flex-wrap, pseudo-elements (::before, ::after), and pseudo-classes (:hover, :focus) for responsive and interactive designs.",
  },
  {
    image: js,
    title: "Javascript",
    description:
      "The brain of web interactivity. I’ve learned about operators, string and array methods (map, reduce), higher-order functions, DOM manipulation, callbacks, async/await, and writing pseudocode to solve logical problems efficiently.",
  },
  {
    image: sql,
    title: "Sql",
    description:
      "A language for managing and querying databases. I’ve learned to create, read, update, and delete data using SQL commands, work with joins, conditions, and aggregate functions to handle structured data effectively.",
  },
];
export default CORE_CONCEPTS;

export const EXAMPLES = {
  docmed: {
    title: "Docemed E-Care | Full-Stack Web Application",
    description:
      "Tech Stack: HTML, CSS, JavaScript, PHP, MySQL  Developed a healthcare platform for doctor appointments, hospital directories, and medical store listings. • Implemented backend logic in PHP/MySQL for appointment scheduling and hospital data management. • Built an admin panel with responsive UI for managing hospitals, patients, and pharmacies.",
    link: `https://github.com/HARSHITA-1202/Docmed-healthcaewebsite`,
  },
  webvital: {
    title:
      "2.WebVitals360 – Website Security & Performance Audit Tool | Full-Stack Project",
    description:
      "Tech Stack: Python (Flask), MySQL, REST APIs, JavaScript, Chrome Extension, OpenAI API • a web application for automated website security and performance auditing, integrating APIs (GooglePageSpeed,Mozilla Observatory, SSL Labs). • Implemented AI-powered code optimization, automated PDF reporting, and a Chrome extension",
    link: `https://github.com/HARSHITA-1202/24_Stephen`,
  },
  chatbot: {
    title: "AI Chatbot for Chest X-ray Analysis | Deep Learning Project",
    description:
      "Tech Stack: Python, TensorFlow, ResNet50, OpenCV, Google Colab GitHub• I-powered chatbot to analyze chest X-rays (DICOM & non-DICOM) for Tuberculosis and Pneumonia classification.• ResNet50 CNN model achieving high accuracy on training, validation, and test datasets.. • Integrated an interactive chatbot interface to deliver diagnostic predictions with user-friendly explanations.",
    link: `
`,
  },
};

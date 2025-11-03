// src/assets/components/Header/pic-container/Pic.jsx
import "./Pic.css";
import mypic from "../../../my.jpeg";

export function Pic({ handleclick }) {
  return (
    <div className="pic-container">
      <img id="mypic" src={mypic} alt="mypic" />
      <button onClick={handleclick} id="btn">
        U will know abt me! click here
      </button>
    </div>
  );
}

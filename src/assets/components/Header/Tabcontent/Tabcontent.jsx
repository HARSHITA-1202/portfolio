import "./Tabcontent.css";
import { useState } from "react";

export function useTabContent() {
  const [tabcontent, setTabContent] = useState(false);
  const handleclick = () => {
    setTabContent((prev) => !prev);
  };

  return { tabcontent, handleclick };
}

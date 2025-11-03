// src/assets/components/Header/Header.jsx
import "./Header.css";
import { Pic } from "./pic-container/Pic.jsx";
import { Profile } from "./profile-card/Profile.jsx";
import { useTabContent } from "./Tabcontent/Tabcontent.jsx";

export function Header() {
  const { tabcontent, handleclick } = useTabContent();

  return (
    <header id="header">
      <Pic handleclick={handleclick} />
      <Profile tabcontent={tabcontent} />
    </header>
  );
}

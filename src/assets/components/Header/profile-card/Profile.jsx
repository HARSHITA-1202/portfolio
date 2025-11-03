// src/assets/components/Header/profile-card/Profile.jsx
import React from "react";
import "./Profile.css";

export function Profile({ tabcontent }) {
  const profile = {
    Name: "P R HARSHITA",
    Course: "Pursuing 7th semester in CSE Department",
    Hobby: "She loves singing! 🎵",
    Skill: "React Developer 😎😎",
    cgpa: 9.0,
  };

  return (
    <section id="tabcontent" className={tabcontent ? "show" : ""}>
      <div className="profile-card">
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </div>
    </section>
  );
}

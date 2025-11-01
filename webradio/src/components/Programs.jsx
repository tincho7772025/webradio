import React from "react";
import "./Programs.css";

export default function Programs({ programs }) {
  return (
    <section className="programs-section">
      <h2>Nuestros Programas</h2>
      <div className="programs-grid">
        {programs.map(program => (
          <div key={program.id} className="program-card">
            <img
              src={program.image}
              alt={program.title}
              className="program-image"
            />
            <h3>{program.title}</h3>
            <p><strong>Horario:</strong> {program.time}</p>
            <p><strong>Locutor:</strong> {program.host}</p>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
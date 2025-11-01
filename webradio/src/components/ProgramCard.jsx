import React from "react";
import './ProgramCard.css';


export default function ProgramCard({ program }) {
return (
<article className="program-card">
<h3>{program.title}</h3>
<p className="program-time">{program.time}</p>
<p className="program-host">Con: {program.host}</p>
<p className="program-description">{program.description}</p>
</article>
);
}
import React from "react";
import './Footer.css';


export default function Footer() {
return (
<footer className="footer">
<div className="footer-container">
<div>© {new Date().getFullYear()} Radio Online — cristinafm 89.7</div>
<div>Hecho con ❤️ pasión por la gente</div>
</div>
</footer>
);
}
import React from "react";
import './Header.css';


export default function Header() {
return (
<header className="header">
<div className="header-container">
<div className="header-logo">
<div className="logo-icon">R</div>
<div>
<h1 className="logo-title">Radio Online cristianafm 98.7</h1>
<div className="logo-subtitle">Tu música, tus programas</div>
</div>
</div>


<nav className="nav">
<a href="#home">Inicio</a>
<a href="#programs">Programas</a>
</nav>
</div>
</header>
);
}
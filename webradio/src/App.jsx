import React from "react";
import Programs from "./components/Programs";

const PROGRAMS = [
  {
    id: 1,
    title: "Mañanas con El Espíritu Santo",
    time: "06:00 - 10:00",
    host: "Monica Sandobal",
    description: "Noticias, humor y la mejor música para empezar tu día.",
    image: "/programa1.jpg"
  },
  {
    id: 2,
    title: "Tarde de reflexión con la palabra",
    time: "14:00 - 18:00",
    host: "Jose Thorlet",
    description: "Un viaje al pasado con los grandes clásicos de la Biblia.",
    image: "/programa2.jpg"
  },
  {
    id: 3,
    title: "Moda Cristiana",
    time: "20:00 - 22:00",
    host: "Laura Ferrando",
    description: "Música suave, entrevistas y charlas nocturnas.",
    image: "/programa3.jpg"
  }
];

function App() {
  return (
    <div>
      <Programs programs={PROGRAMS} />
    </div>
  );
}

export default App;
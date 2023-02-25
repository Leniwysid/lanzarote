import React from "react";
import CitiesCard from "./CitiesCard";
import c1 from "../assets/costa.jpg";
import c2 from "../assets/carmen.jpg";
import c3 from "../assets/arrecife.jpg";
import c4 from "../assets/arrieta.jpg";
import c5 from "../assets/haria.jpg";
import c6 from "../assets/bartolome.jpg";
import c7 from "../assets/papago.jpg";
import c8 from "../assets/punta.jpg";
import c9 from "../assets/yaiza.jpg";

const Cities = () => {
  return (
    <div
      id="destinations"
      className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-2"
    >
      <CitiesCard bg={c1} text="Costa Teguise" />
      <CitiesCard bg={c2} text="Puerto del Carmen" />
      <CitiesCard bg={c3} text="Arrecife" />
      <CitiesCard bg={c4} text="Arrieta" />
      <CitiesCard bg={c5} text="Haria" />
      <CitiesCard bg={c6} text="San Bartolomé" />
      <CitiesCard bg={c7} text="Playa de Papago" />
      <CitiesCard bg={c8} text="Punta Mujeres" />
      <CitiesCard bg={c9} text="Yaiza" />
    </div>
  );
};

export default Cities;

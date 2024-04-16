import React, { useState } from "react";
import TodoRacesForm from "./TodoRacesForm";

function TodoRaces() {
  const [races, setRaces] = useState([
    { name: "Tough Mudder", cost: "$60", date: "2-4-2024", id: 1 },
    { name: "Spartan", cost: "$160", date: "3-4-2024", id: 2 },
    { name: "Running", cost: "$20", date: "5-4-2024", id: 3 },
    { name: "OCR", cost: "$40", date: "10-4-2024", id: 4 },
    { name: "Bone Frog", cost: "$60", date: "7-6-2024", id: 5 },
  ]);
  return (
    <div>
      {races.map((race) => (
        <li>{race.name}</li>
      ))}
      <TodoRacesForm />
    </div>
  );
}

export default TodoRaces;

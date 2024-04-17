import React, { useState } from "react";

function TodoRacesForm() {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="add a new race" />
    </form>
  );
}

export default TodoRacesForm;

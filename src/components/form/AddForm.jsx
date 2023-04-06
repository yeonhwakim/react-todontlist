import React, { useState } from "react";

function AddForm({ handleAdd }) {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;

    setNewTodo(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add to don't list"
        value={newTodo}
        onChange={handleChange}
      />
      <button type="submit">입력</button>
    </form>
  );
}

export default AddForm;

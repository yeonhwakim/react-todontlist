import React, { useState } from "react";

import addFormStyle from "./AddForm.module.css";

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
    <form className={addFormStyle.addForm} onSubmit={handleSubmit}>
      <input
        className={addFormStyle.addInput}
        type="text"
        placeholder="ADD TO DON'T LIST"
        value={newTodo}
        onChange={handleChange}
      />
      <button className={addFormStyle.addButton} type="submit">
        ADD
      </button>
    </form>
  );
}

export default AddForm;

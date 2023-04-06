import React from "react";

function UpdateForm({
  id,
  updateTodo,
  handleUpdate,
  handleUpdateTxt,
  handleCancelUpdate,
}) {
  return (
    <form onSubmit={(e) => handleUpdate(e, id)}>
      <input
        type="text"
        value={updateTodo}
        onChange={(e) => handleUpdateTxt(e, id)}
      />
      <button type="button" onClick={() => handleCancelUpdate(id)}>
        cancel
      </button>
      <button type="submit">update</button>
    </form>
  );
}

export default UpdateForm;

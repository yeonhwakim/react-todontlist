import React from "react";

import updateFormStyle from "./UpdateForm.module.css";

function UpdateForm({
  id,
  updateTodo,
  handleUpdate,
  handleUpdateTxt,
  handleCancelUpdate,
}) {
  return (
    <form
      className={updateFormStyle.updateForm}
      onSubmit={(e) => handleUpdate(e, id)}
    >
      <input
        className={updateFormStyle.updateInput}
        type="text"
        value={updateTodo}
        onChange={(e) => handleUpdateTxt(e, id)}
      />
      <button
        className={updateFormStyle.updateButton}
        type="button"
        onClick={() => handleCancelUpdate(id)}
      >
        cancel
      </button>
      <button className={updateFormStyle.updateButton} type="submit">
        update
      </button>
    </form>
  );
}

export default UpdateForm;

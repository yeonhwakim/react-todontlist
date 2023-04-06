import React from "react";

function DontList({
  id,
  todo,
  updateTodo,
  updateYn,
  handleCheck,
  handleDelete,
  handleUpdateState,
  handleUpdate,
  handleUpdateTxt,
  handleCancelUpdate,
}) {
  return (
    <li>
      {!updateYn && (
        <div>
          <input type="checkbox" onChange={(e) => handleCheck(e, id)} />
          <span>{todo}</span>
          <button onClick={() => handleDelete(id)}>delete</button>
          <button onClick={() => handleUpdateState(id)}>update</button>
        </div>
      )}
      {updateYn && (
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
      )}
    </li>
  );
}

export default DontList;

import React from "react";
import UpdateForm from "../form/UpdateForm";

function DontList({
  item: { id, todo, updateTodo, updateYn, doneYn },
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
          {!doneYn && (
            <input type="checkbox" onChange={(e) => handleCheck(e, id)} />
          )}
          <span>{todo}</span>
          <button onClick={() => handleDelete(id)}>delete</button>
          <button onClick={() => handleUpdateState(id)}>update</button>
        </div>
      )}
      {updateYn && (
        <UpdateForm
          id={id}
          updateTodo={updateTodo}
          handleUpdate={handleUpdate}
          handleUpdateTxt={handleUpdateTxt}
          handleCancelUpdate={handleCancelUpdate}
        />
      )}
    </li>
  );
}

export default DontList;

import React from "react";
import UpdateForm from "../form/UpdateForm";

function Item({
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
          {!doneYn && <button onClick={() => handleDelete(id)}>delete</button>}
          {!doneYn && (
            <button onClick={() => handleUpdateState(id)}>update</button>
          )}
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

export default Item;

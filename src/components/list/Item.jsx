import React from "react";
import UpdateForm from "../form/UpdateForm";
import { getDateDiff } from "../../utils/filterList";

function Item({
  item: { id, todo, updateTodo, startYn, updateYn, doneYn, startDate },
  handleCheck,
  handleReset,
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
          {startYn && !doneYn && <span>{`${getDateDiff(startDate)} 일`}</span>}
          {startYn && !doneYn && (
            <button onClick={() => handleReset(id)}>reset</button>
          )}
          {!startYn && !doneYn && (
            <button onClick={() => handleDelete(id)}>delete</button>
          )}
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

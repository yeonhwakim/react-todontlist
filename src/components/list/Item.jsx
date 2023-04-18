import React from "react";
import UpdateForm from "../form/UpdateForm";
import { getDateDiff } from "../../utils/filterList";

import itemStyle from "./Item.module.css";

function Item({
  item: {
    id,
    todo,
    updateTodo,
    startYn,
    updateYn,
    doneYn,
    startDate,
    doneDate,
  },
  handleCheck,
  handleReset,
  handleDelete,
  handleUpdateState,
  handleUpdate,
  handleUpdateTxt,
  handleCancelUpdate,
}) {
  return (
    <li className={itemStyle.item}>
      {!updateYn && (
        <>
          {!doneYn && (
            <>
              <input
                type="checkbox"
                id={id}
                onChange={(e) => handleCheck(e, id)}
              />
              <label htmlFor={id}></label>
            </>
          )}
          <div
            className={`${itemStyle.todoBox} ${
              startYn && !doneYn && doneDate && itemStyle.rollback
            }`}
          >
            <span className={itemStyle.ellipsis}>{todo}</span>
            {startYn && !doneYn && (
              <span>{`${getDateDiff(startDate)} 일`}</span>
            )}
          </div>
          <div className={`${itemStyle.btnBox} ${doneYn && itemStyle.done}`}>
            {!doneYn && (
              <button onClick={() => handleUpdateState(id)}>UPDATE</button>
            )}
            {(startYn || doneYn) && (
              <button onClick={() => handleReset(id)}>RESET</button>
            )}
            {!startYn && !doneYn && (
              <button onClick={() => handleDelete(id)}>DELETE</button>
            )}
          </div>
        </>
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

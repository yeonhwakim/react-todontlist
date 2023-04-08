import React from "react";
import Item from "./Item";

function DontList({
  list,
  handleCheck,
  handleDelete,
  handleUpdateState,
  handleUpdate,
  handleUpdateTxt,
  handleCancelUpdate,
}) {
  return (
    <>
      <ul>
        {list.map(({ id, todo, updateTodo, updateYn }) => (
          <Item
            key={id}
            id={id}
            todo={todo}
            updateTodo={updateTodo}
            updateYn={updateYn}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            handleUpdateState={handleUpdateState}
            handleUpdate={handleUpdate}
            handleUpdateTxt={handleUpdateTxt}
            handleCancelUpdate={handleCancelUpdate}
          />
        ))}
      </ul>
    </>
  );
}

export default DontList;

import React from "react";
import DontItem from "./DontItem";

function DontList({
  dontList,
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
        {dontList.map(({ id, todo, updateTodo, updateYn }) => (
          <DontItem
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

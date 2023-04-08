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
        {list.map((item) => (
          <Item
            key={item.id}
            item={item}
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

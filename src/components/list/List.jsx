import React from "react";
import Item from "./Item";

import listStyle from "./List.module.css";

function List({
  list,
  handleCheck,
  handleReset,
  handleDelete,
  handleUpdateState,
  handleUpdate,
  handleUpdateTxt,
  handleCancelUpdate,
}) {
  return (
    <>
      <ul className={listStyle.list}>
        {list.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleReset={handleReset}
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

export default List;

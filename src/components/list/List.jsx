import React, { useState } from "react";
import Item from "./Item";

import listStyle from "./List.module.css";

import { ReactSortable } from "react-sortablejs";

function List({
  list,
  isDone = false,
  handleCheck,
  handleReset,
  handleDelete,
  handleUpdateState,
  handleUpdate,
  handleUpdateTxt,
  handleCancelUpdate,
}) {
  const [state, setState] = useState(list);

  return (
    <>
      {isDone && (
        <ul className={`${listStyle.list} ${isDone && listStyle.done}`}>
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
      )}
      {!isDone && (
        <ReactSortable
          list={state}
          setList={setState}
          animation="200"
          easing="ease-out"
          className={`${listStyle.list} ${isDone && listStyle.done}`}
        >
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
        </ReactSortable>
      )}
    </>
  );
}

export default List;

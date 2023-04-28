import React, { useEffect, useState } from "react";
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
  handleSort,
}) {
  const [state, setState] = useState(list);

  useEffect(() => {
    handleSort(state);
  }, [handleSort, state]);

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
          tag="ul"
          list={state}
          setList={setState}
          animation="200"
          easing="ease-out"
          handle=".my-handle"
          className={`${listStyle.list} ${isDone && listStyle.done}`}
        >
          {state.map((item) => (
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

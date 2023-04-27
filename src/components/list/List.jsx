import React, { useState } from "react";
import Item from "./Item";

import listStyle from "./List.module.css";

import { ReactSortable } from "react-sortablejs";
import { compareIndex } from "../../utils/filterList";

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
  const [state, setState] = useState(list.sort(compareIndex));

  const handleDrag = (e) => {
    handleSort(state);
  };

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
          onEnd={handleDrag}
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

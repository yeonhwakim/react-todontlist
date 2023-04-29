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
  const [sortedList, setSortedList] = useState(list);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    setSortedList(list);
  }, [list]);

  useEffect(() => {
    if (isSorted) {
      handleSort(sortedList);
      setIsSorted(false);
    }
  }, [handleSort, sortedList, isSorted]);

  const handleEnd = () => {
    setIsSorted(true);
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
          list={sortedList}
          setList={setSortedList}
          animation="200"
          easing="ease-out"
          handle=".my-handle"
          className={`${listStyle.list} ${isDone && listStyle.done}`}
          onEnd={handleEnd}
        >
          {sortedList.map((item) => (
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

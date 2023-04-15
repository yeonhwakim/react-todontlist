import React from "react";
import DoneItem from "./DoneItem";

function DoneList({ list, handleReset }) {
  return (
    <ul>
      {Object.keys(list).map((date) => (
        <DoneItem
          key={date}
          date={date}
          list={list[date]}
          handleReset={handleReset}
        />
      ))}
    </ul>
  );
}

export default DoneList;

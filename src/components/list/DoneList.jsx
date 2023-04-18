import React from "react";
import DoneItem from "./DoneItem";

import doneListStyle from "./DoneList.module.css";

function DoneList({ list, handleReset }) {
  return (
    <ul className={doneListStyle.doneList}>
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

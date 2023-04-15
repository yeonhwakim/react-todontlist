import React from "react";
import DoneItem from "./DoneItem";

function DoneList({ list }) {
  return (
    <ul>
      {Object.keys(list).map((date) => (
        <DoneItem key={date} date={date} list={list[date]} />
      ))}
    </ul>
  );
}

export default DoneList;

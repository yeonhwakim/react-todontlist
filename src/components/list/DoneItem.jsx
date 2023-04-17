import React from "react";
import List from "./List";

import doneItemStyle from "./DoneItem.module.css";

function DoneItem({ date, list, handleReset }) {
  return (
    <li className={doneItemStyle.doneItem} key={date}>
      <span>{date}</span>
      <List key={date} list={list} handleReset={handleReset} />
    </li>
  );
}

export default DoneItem;

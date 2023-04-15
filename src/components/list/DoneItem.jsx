import React from "react";
import Item from "./Item";

function DoneItem({ date, list, handleReset }) {
  return (
    <li key={date}>
      <span>{date}</span>
      <ul>
        {list.map((item) => (
          <Item key={item.id} item={item} handleReset={handleReset} />
        ))}
      </ul>
    </li>
  );
}

export default DoneItem;

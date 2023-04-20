import React, { useEffect, useReducer } from "react";
import Header from "../header/Header";
import List from "../list/DoneList";
import { getLocalStoage, setLocalStoage } from "../../utils/localStorage";
import {
  getFilterdList,
  getFilterdListByDoneDate,
} from "../../utils/filterList";
import todosReducer from "../../reducers/todos-reducer";

function DoneList() {
  const [todos, dispatch] = useReducer(todosReducer, getLocalStoage("todos"));

  useEffect(() => {
    setLocalStoage("todos", todos);
  }, [todos]);

  const handleReset = (resetId) => {
    dispatch({ type: "resetDone", resetId });
  };

  const donelist = getFilterdListByDoneDate(
    getFilterdList({
      list: todos,
      filterName: "donelist",
    })
  );

  return (
    <div>{donelist && <List list={donelist} handleReset={handleReset} />}</div>
  );
}

export default DoneList;

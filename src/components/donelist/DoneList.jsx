import React, { useEffect, useReducer } from "react";
import Header from "../header/Header";
import donelistReducer from "../../reducers/donelist-reducer";
import List from "../list/List";

function DoneList() {
  const [donelist, dispatch] = useReducer(donelistReducer, []);

  useEffect(() => {
    fetch(`data/todos.json`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "fetch", todos: data });
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <Header title={"DONE LIST"} />
      {donelist && <List list={donelist} />}
    </div>
  );
}

export default DoneList;

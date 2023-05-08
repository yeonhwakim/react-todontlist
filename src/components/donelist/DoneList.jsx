import React from "react";

import List from "../list/DoneList";

import useTodos from "../../hooks/use-todos";

function DoneList() {
  const [, dispatch, filteredTodos] = useTodos();

  const donelist = filteredTodos;

  const handleReset = (resetId) => {
    if (window.confirm("Sure?")) {
      dispatch({ type: "resetDone", resetId });
    }
  };

  return (
    <div>{donelist && <List list={donelist} handleReset={handleReset} />}</div>
  );
}

export default DoneList;

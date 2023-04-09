import { useEffect, useReducer } from "react";
import todolistReducer from "../../reducers/todolist-reducer";
import Header from "../header/Header";
import List from "../list/List";

function ToDontList() {
  const [todolist, dispatch] = useReducer(todolistReducer, []);

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
      <Header title={"TO DO LIST"} />
      {todolist && <List list={todolist} />}
    </div>
  );
}

export default ToDontList;

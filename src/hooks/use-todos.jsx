import { useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import todosReducer from "../reducers/todos-reducer";
import { getLocalStoage, setLocalStoage } from "../utils/localStorage";
import {
  getFilterdLessThreeMonthList,
  getFilteredList,
  getFilteredListByDoneDate,
} from "../utils/filterList";

function useTodos() {
  const location = useLocation();
  const pathname = location.pathname.replace("/", "");

  const [todos, dispatch] = useReducer(
    todosReducer,
    pathname === "todontlist"
      ? getFilterdLessThreeMonthList(getLocalStoage("todos"))
      : getLocalStoage("todos") || []
  );

  useEffect(() => {
    setLocalStoage("todos", todos);
  }, [todos]);

  const filteredTodos =
    pathname === "donelist"
      ? getFilteredListByDoneDate(
          getFilteredList({
            list: todos,
            filterName: pathname,
          })
        )
      : getFilteredList({
          list: todos,
          filterName: pathname,
        });

  return [todos, dispatch, filteredTodos];
}

export default useTodos;

import { useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import todosReducer from "../reducers/todos-reducer";
import {
  getFilterdLessThreeMonthList,
  getFilteredList,
  getFilteredListByDoneDate,
} from "../utils/filterList";

function useFetchTodos() {
  const location = useLocation();
  const pathname = location.pathname.replace("/", "");

  const [todos, dispatch] = useReducer(todosReducer, []);

  useEffect(() => {
    fetch("https://dd77ec75-5830-4693-ba7c-540ea2466e92.mock.pstmn.io/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "fetch",
          fetchTodos:
            pathname === "todontlist"
              ? getFilterdLessThreeMonthList(data)
              : data || [],
        });
      });
  }, []);

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

export default useFetchTodos;

import { useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import todosReducer from "../reducers/todos-reducer";
import {
  getFilterdLessThreeMonthList,
  getFilteredList,
  getFilteredListByDoneDate,
} from "../utils/filterList";
import { useQuery } from "@tanstack/react-query";

function useQueryTodos() {
  const location = useLocation();
  const pathname = location.pathname.replace("/", "");

  const [todos, dispatch] = useReducer(todosReducer, []);

  const { data, isLoading } = useQuery(
    ["todos"],
    async () => {
      return fetch(
        "https://dd77ec75-5830-4693-ba7c-540ea2466e92.mock.pstmn.io/todos",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());
    },
    { staleTime: 5000 }
  );

  useEffect(() => {
    dispatch({
      type: "fetch",
      fetchTodos:
        pathname === "todontlist"
          ? getFilterdLessThreeMonthList(data)
          : data || [],
    });
  }, [pathname, data]);

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

  return [todos, dispatch, filteredTodos, isLoading];
}

export default useQueryTodos;

import React from "react";
import Header from "../header/Header";
import List from "../list/DoneList";
import { getLocalStoage } from "../../utils/localStorage";
import {
  getFilterdList,
  getFilterdListByDoneDate,
} from "../../utils/filterList";

function DoneList() {
  const donelist = getFilterdListByDoneDate(
    getFilterdList({
      list: getLocalStoage("todos"),
      filterName: "donelist",
    })
  );

  return (
    <div>
      <Header title={"DONE LIST"} />
      {donelist && <List list={donelist} />}
    </div>
  );
}

export default DoneList;

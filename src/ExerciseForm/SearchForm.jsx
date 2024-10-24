import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_CHANGE } from "./redux/constant";

export default function SearchForm() {
  let searchItem = useSelector((state) => state.studentReducer.searchItem);
  let dispatch = useDispatch();
  let handleSearchChange = (e) => {
    let action = {
      type: SEARCH_CHANGE,
      payload: e.target.value,
    };
    dispatch(action);
  };
  return (
    <div className="my-2">
      <input
        type="text"
        value={searchItem}
        onChange={handleSearchChange}
        placeholder="Type to search"
      />
    </div>
  );
}

import React from "react";

function Filter({ changeView }) {
  return (
    <div className="filter">
      <label htmlFor="filter-todos">Status Filter: </label>
      <select
        onChange={changeView}
        name="filter-todos"
        id="filter-todos"
        className="filter"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not completed">Not Completed</option>
      </select>
    </div>
  );
}
export default Filter;

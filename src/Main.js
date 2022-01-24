import React from "react";

export default function Main() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
        <h1>React ToDo List</h1>
        <input
          type="text"
          placeholder="Enter task"
          className="form-control"
        ></input>
        <button className="btn btn-success">Add</button>
      </div>
    </div>
  );
}

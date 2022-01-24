import React, { useState } from "react";

export default function Main() {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);
  function addTask() {
    setTaskList([...taskList, taskName]);
  }
  const taskListContent = taskList.map((task) => {
    return (
      <div>
        <p>{task}</p>

        <i className="far fa-trash-alt"></i>
      </div>
    );
  });

  return (
    <div className="row justify-content-center">
      <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
        <h1>React ToDo List</h1>
        <input
          type="text"
          placeholder="Enter task"
          className="form-control"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        ></input>
        <button className="btn btn-success" onClick={addTask}>
          Add
        </button>
        <br />
        {taskListContent}
      </div>
    </div>
  );
}

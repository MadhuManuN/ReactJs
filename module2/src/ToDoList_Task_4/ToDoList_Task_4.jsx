import React, { useState } from "react";
import "./ToDoList_Task_4.css";

function ToDoList_Task_4() {
  let [tasks, setTasks] = useState([]);
  let [task, setTask] = useState("");
  let [list, setList] = useState("");
  let [cart, setCart] = useState(0);
  let btn = document.getElementById("btn");

  let updateTask = ({ target: { value } }) => {
    setTask(value);
  };
  let updateList = ({ target: { value } }) => {
    setList(value);
  };
  let updateLists = () => {
    if (btn.innerHTML === "Update") {
      btn.innerHTML = "Add";
    }
    if (task !== "" && list !== "") {
      const todo = {
        tName: task,
        tDisc: list,
      };
      setTasks([...tasks, todo]);
      setCart(cart + 1);
      setList("");
      setTask("");
    }
  };

  let deltedList = (id) => {
    tasks.splice(id, 1);
    setCart(cart - 1);
    setTasks([...tasks]);
  };
  let updateData = (id) => {
    if (btn.innerHTML === "Add") {
      btn.innerHTML = "Update";
    }
    setTask(tasks[id].tName);
    setList(tasks[id].tDisc);
    tasks.splice(id, 1);
    setCart(cart - 1);
    setTasks([...tasks]);
  };
  let SlNo = 0;
  return (
    <div id="body">
      <h1>TODO LISTS</h1>
      <div id="parent">
        <div className="formDesign">
          <label htmlFor="">To-Do : </label>
          <input
            type="text"
            placeholder="Enter The Task Name"
            value={task}
            onChange={updateTask}
            className="input"
          />
        </div>
        <div className="formDesign">
          <label htmlFor="">Description : </label>
          <textarea
            name=""
            id=""
            cols="60"
            rows="6"
            onChange={updateList}
            value={list}
            className="input"
          ></textarea>
        </div>
        <div>
          <button onClick={updateLists} id="btn">
            Add
          </button>
        </div>
      </div>
      <div>
        <table border="2px">
          <thead>
            <tr>
              <th>SlNo</th>
              <th>TaskName</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody id="tbody">
            {tasks.map((task, index) => {
              return (
                <tr key={index}>
                  <td>{++SlNo}</td>
                  <td>{task.tName}</td>
                  <td>
                    <textarea
                      name=""
                      id=""
                      cols="100"
                      rows="6"
                      onChange={updateList}
                      value={task.tDisc}
                    >
                      {task.tDisc}
                    </textarea>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        updateData(index);
                      }}
                      className="btn1"
                      id="updateBtn"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deltedList(index);
                      }}
                      className="btn1"
                      id="deleteBtn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ToDoList_Task_4;

import { useState } from "react";
import Swal from "sweetalert2";

const App = () => {
  const [taskInput, setTaskInput] = useState("");

  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    if (taskInput === "") {
      Swal.fire({
        icon: "warning",
        text: "Input can not be empty!",
      });
    } else {
      const newTask = taskInput;
      setTaskInput("");
      setTaskList([...taskList, newTask]);
    }
  };

  const handleDeleteTask = (task) => {
    if(task){
      Swal.fire({
        icon: "error",
        text: "Are you sure?",
      });
    }
    setTaskList(taskList.filter((t) => t !== task));
  };

  return (
    <div className="container my-5 p-5">
      <h1 className="display-5">To-Do List</h1>
      <div className="d-flex justify-content-center align-items-center my-5">
        <input
          className="form-control w-50 bg-green mx-3"
          type="text"
          placeholder="Enter a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="btn btn-primary mx-5" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <ul className="list-group w-50 m-auto">
        {taskList.map((task, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center "
            key={index}
          >
            {task}
            <button
              className="btn btn-danger ml-5"
              onClick={() => handleDeleteTask(task)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
